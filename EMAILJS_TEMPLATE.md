# EmailJS Template Configuration

To make the auto-replies work, you need to configure your Email Template in the [EmailJS Dashboard](https://dashboard.emailjs.com/).

## 1. Fix "Invalid Grant" Error
**Important:** The error `Gmail_API: Invalid grant` means EmailJS lost permission to send emails from your Gmail account.
1. Go to **Email Services** in the EmailJS dashboard.
2. Find your Gmail service.
3. Click **Reconnect** or **Disconnect** and then connect it again.

## 2. Configure the Template
1. Go to **Email Templates**.
2. Select your template (`template_65jg4mf`).
3. Update the fields as follows:

### Email Settings (Top/Right Panel)
*   **To Email:** `{{to_email}}`
*   **From Name:** `Cafe VanaBella`
*   **From Email:** (Your connected Gmail address)
*   **Reply To:** `{{reply_to}}`
*   **BCC:** (Optional - your admin email if you want a copy)

### Email Content (Subject & Body)

**Subject Line:**
```
Reservation Confirmation - Cafe VanaBella
```

**Content (Design Editor or HTML):**
You can copy-paste this into the message body:

```html
<div style="font-family: sans-serif; color: #333;">
    <h2>Hello {{to_name}},</h2>
    
    <p>Thank you for contacting Cafe VanaBella!</p>
    
    <!-- For Reservations -->
    <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
        <h3 style="margin-top: 0;">Reservation Details:</h3>
        <p><strong>Date:</strong> {{reservation_date}}</p>
        <p><strong>Time:</strong> {{reservation_time}}</p>
        <p><strong>Guests:</strong> {{guests}}</p>
    </div>

    <!-- For Contact Messages -->
    <p>We have received your message regarding: <strong>{{subject}}</strong></p>
    
    <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
    
    <p>We look forward to seeing you!</p>
    
    <p>Best regards,<br>
    <strong>The Cafe VanaBella Team</strong><br>
    <a href="https://cafevanabella.com">cafevanabella.com</a></p>
</div>
```

### 3. Save
Click **Save** in the EmailJS dashboard.
