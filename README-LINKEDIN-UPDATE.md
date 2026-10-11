# ORYN LinkedIn footer update

The footer's **Connect on LinkedIn** link now points to the official ORYN Technology company page:

https://www.linkedin.com/company/143979740/

The link is configurable through the Vite environment variable `VITE_LINKEDIN_URL`. The footer falls back to the URL above if the variable is not set.

## Configure in Vercel (recommended)

Add this under **Vercel → Project → Settings → Environment Variables** for Production (and Preview if needed):

```env
VITE_LINKEDIN_URL=https://www.linkedin.com/company/143979740/
```

Redeploy after adding or changing the variable. Vite variables prefixed with `VITE_` are public client-side values; this is appropriate for a public company-page URL, never for secrets.

## Files changed
- `src/components/Footer.tsx`
- This README
