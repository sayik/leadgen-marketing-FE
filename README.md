# Leadgen marketing website

A static-feeling, responsive marketing site built with the same stack as the Leadgen app: Nuxt 3, Vue 3, TypeScript and Tailwind CSS. It is intentionally a separate project so it can be deployed at the root domain while the product app stays on `app.`.

## Run locally

```bash
npm install
cp .env.example .env
npm run dev
```

## Contact details

Before publishing, set the real contact details. Defaults are deliberate placeholders and must be replaced:

- `NUXT_PUBLIC_CONTACT_EMAIL`
- `NUXT_PUBLIC_CONTACT_PHONE`

For example, set them in the deployment environment or `.env` for local development.

## Production build

```bash
npm run build
node .output/server/index.mjs
```

## Docker

```bash
docker build -t leadgen-marketing .
docker run -d --name leadgen-marketing --restart unless-stopped -p 3000:3000 \
  -e NUXT_PUBLIC_CONTACT_EMAIL=hello@yourdomain.com \
  -e NUXT_PUBLIC_CONTACT_PHONE="+91 00000 00000" \
  leadgen-marketing
```

## Suggested deployment

- `leadgen.yourdomain.com` or `www.yourdomain.com`: this marketing site
- `app.yourdomain.com`: the existing Leadgen application
- `admin.yourdomain.com`: the internal platform administration console, when built

The marketing site has no database, authentication, pricing page or backend dependency. Contact actions use `mailto:` and `tel:` links.

## SEO

The home page includes a descriptive title, meta description, Open Graph metadata and relevant search terms for lead management software, enquiry tracking, customer profiles and sales follow-up. Add a verified canonical domain, favicon, social preview image and `robots.txt`/sitemap before launch.


## Mobile layout notes

The mobile layout uses a 24px page gutter (20px on screens at or below 360px), a single-column hero and content flow, and compact dashboard preview components. The hero scroll cue is positioned 14px above the hero bottom with a horizontal-only transform; it is no longer pushed outside the hero clipping boundary.
