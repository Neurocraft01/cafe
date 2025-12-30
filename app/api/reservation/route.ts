import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, date, time, guests, specialRequests } = body;

    // 1. Send Email to Admin via Resend
    try {
      const { data, error } = await resend.emails.send({
        from: 'Cafe VanaBella <onboarding@resend.dev>', // Update this with your verified domain
        to: process.env.ADMIN_EMAIL || 'admin@cafevanabella.com', // Fallback to a default or env var
        subject: `New Table Reservation: ${name}`,
        html: `
          <h1>New Reservation Request</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Time:</strong> ${time}</p>
          <p><strong>Guests:</strong> ${guests}</p>
          <p><strong>Special Requests:</strong> ${specialRequests || 'None'}</p>
        `,
      });

      if (error) {
        console.error('Resend API Error:', error);
      }
    } catch (emailError) {
      console.error('Resend Execution Error:', emailError);
    }

    // 2. Add to Google Calendar via Google Apps Script Webhook
    try {
      const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
      
      if (scriptUrl) {
        const calendarResponse = await fetch(scriptUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            date,
            time,
            guests,
            specialRequests
          }),
        });

        // Check for HTTP errors (like 403 Forbidden, 404 Not Found)
        if (!calendarResponse.ok) {
           const text = await calendarResponse.text();
           console.error(`Google Script HTTP Error: ${calendarResponse.status} ${calendarResponse.statusText}`, text);
        } else {
           // Try to parse JSON response from the script
           try {
             const calendarData = await calendarResponse.json();
             if (calendarData.status === 'error') {
               console.error('Google Apps Script Logic Error:', calendarData.message);
               if (calendarData.message.includes('fully booked')) {
                  return NextResponse.json(
                   { error: 'This time slot is fully booked.' },
                   { status: 409 }
                 );
               }
             }
           } catch (jsonError) {
             console.error('Failed to parse Google Script response:', jsonError);
           }
        }
      } else {
        console.warn('GOOGLE_SCRIPT_URL is not defined');
      }

    } catch (calendarError) {
      console.error('Google Calendar Webhook Exception:', calendarError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Reservation API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
