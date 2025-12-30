# Google Apps Script for Calendar Integration

This script allows your Next.js application to add events to your Google Calendar.

## Setup Instructions

1.  Go to [script.google.com](https://script.google.com).
2.  Click **New Project**.
3.  Delete any code in the editor and paste the code below.
4.  Click **Deploy** > **New deployment**.
5.  Click the **Select type** icon (gear) and choose **Web app**.
6.  Fill in the details:
    *   **Description**: Cafe Reservation API
    *   **Execute as**: **Me** (your email)
    *   **Who has access**: **Anyone** (This is important so your Next.js app can call it)
7.  Click **Deploy**.
8.  Copy the **Web App URL** and paste it into your `.env.local` file as `GOOGLE_SCRIPT_URL`.

## Code

```javascript
// This function handles the POST request from your website
function doPost(e) {
  try {
    // Parse the incoming JSON data
    var data = JSON.parse(e.postData.contents);
    var name = data.name;
    var email = data.email;
    var phone = data.phone;
    var date = data.date;
    var time = data.time;
    var guests = data.guests;
    var specialRequests = data.specialRequests || "None";

    // Get the default calendar
    var calendar = CalendarApp.getDefaultCalendar();

    // Parse start and end times
    // Note: 'date' is YYYY-MM-DD, 'time' is HH:MM
    var startDateTime = new Date(date + 'T' + time + ':00');
    var endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000); // 1 hour duration

    // Check for existing bookings in this slot (Max 10)
    var events = calendar.getEvents(startDateTime, endDateTime);
    if (events.length >= 10) {
      return ContentService.createTextOutput(JSON.stringify({
        'status': 'error',
        'message': 'This time slot is fully booked (max 10 bookings).'
      })).setMimeType(ContentService.MimeType.JSON);
    }

    // Create the event
    var title = "Reservation: " + name + " (" + guests + " ppl)";
    var description = "Phone: " + phone + "\n" +
                      "Email: " + email + "\n" +
                      "Guests: " + guests + "\n" +
                      "Requests: " + specialRequests;

    calendar.createEvent(title, startDateTime, endDateTime, {
      description: description
    });

    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'success',
      'message': 'Reservation added to calendar'
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// This function allows you to test if the URL is working in your browser
function doGet(e) {
  return ContentService.createTextOutput("Success! The API is accessible to the public.");
}
```
