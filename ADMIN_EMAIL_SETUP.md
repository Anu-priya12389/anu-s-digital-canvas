# Admin Email Configuration

## Overview

Contact form submissions now send admin email notifications via SMTP before being saved to Supabase.

## New Files Added

- **[src/lib/email.server.ts](src/lib/email.server.ts)** — SMTP email sender with nodemailer
- **[src/lib/api/contact.functions.ts](src/lib/api/contact.functions.ts)** — Server function for sending emails
- **[src/components/portfolio/Contact.tsx](src/components/portfolio/Contact.tsx)** — Updated to call email sender

## Environment Variables Required

Add these to your `.env.local` or deployment settings:

```env
ADMIN_EMAIL=your-admin@gmail.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-gmail@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=Portfolio Contact <your-gmail@gmail.com>
SMTP_SECURE=false
```

### Gmail Setup Example

1. Enable 2-Step Verification on your Google Account
2. Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
3. Select Mail & Windows Computer (or other app)
4. Copy the generated password into `SMTP_PASSWORD`

### Other Email Providers

- **SendGrid**: Use `smtp.sendgrid.net:587`, SMTP_USER=`apikey`, SMTP_PASSWORD=your API key
- **Mailgun**: Use `smtp.mailgun.org:587`, SMTP_USER=`postmaster@...`, SMTP_PASSWORD=your key
- **Brevo**: Use `smtp-relay.brevo.com:587`, SMTP_USER & SMTP_PASSWORD from dashboard

## How It Works

1. **Contact form submission** → Validates form data
2. **Save to Supabase** → Stores message in database for admin review
3. **Send email** → Calls admin at `ADMIN_EMAIL` with formatted message
4. **User feedback** → Toast notification confirms delivery or notes email failure

## Testing Locally

1. Set environment variables in `.env.local`
2. Run `npm run dev`
3. Fill out and submit the contact form
4. Check your admin email inbox

---

**Note:** Message is still saved to Supabase even if email delivery fails, ensuring no submissions are lost.
