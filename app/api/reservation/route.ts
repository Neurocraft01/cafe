import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, date, time, guests, specialRequests } = body;

    // Log the reservation submission (email and calendar integrations disabled)
    console.log('Reservation submission:', { name, email, phone, date, time, guests, specialRequests });

    // Return success - WhatsApp integration handles notifications
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Reservation API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
