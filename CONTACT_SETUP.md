# Contact Form Setup

The contact form at `/contacto` sends emails to `contacto@pasito.app`.

## Email Service Setup (Resend)

1. Sign up for a free account at [Resend](https://resend.com)
2. Verify your domain `pasito.app` in Resend dashboard
3. Generate an API key
4. Add the API key to `.env.local`:

```bash
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
```

## Alternative: Using a Different Email Service

If you prefer to use a different email service (SendGrid, Mailgun, AWS SES, etc.), update the `/app/api/contact/route.ts` file with your preferred service's API.

## Development Mode

If `RESEND_API_KEY` is not set, the API will log contact form submissions to the console instead of sending emails. This is useful for local development.

## Testing

1. Start the dev server: `npm run dev`
2. Visit `http://localhost:3001/contacto`
3. Fill out and submit the form
4. Check your email at `contacto@pasito.app` (or console logs if API key not set)

## Domain Verification

For Resend to work in production, you need to:
1. Add DNS records to verify `pasito.app` domain
2. Configure SPF, DKIM records for better deliverability
3. Set up the `contacto@pasito.app` email address in Resend

See Resend documentation for detailed setup: https://resend.com/docs
