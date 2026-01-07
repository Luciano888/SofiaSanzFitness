This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on DigitalOcean App Platform (Static Site - FREE)

Este proyecto está configurado para deploy estático en DigitalOcean App Platform (plan gratuito).

### Configuración en DigitalOcean:

1. **Tipo de App**: Seleccioná **Static Site** (NO Web Service)
2. **Build Command**: `npm run build`
3. **Output Directory**: `out`
4. **Node Version**: 22.x (se detecta automáticamente)

### Variables de Entorno (EmailJS):

Configurá estas variables en DigitalOcean App Platform > Settings > App-Level Environment Variables:

- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`: Tu Service ID de EmailJS
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`: Tu Template ID de EmailJS
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`: Tu Public Key de EmailJS

### Configurar EmailJS:

1. Creá una cuenta gratuita en [EmailJS](https://www.emailjs.com/)
2. Creá un Email Service (Gmail, Outlook, etc.)
3. Creá un Email Template con estas variables:
   - `{{nombre}}`
   - `{{email}}`
   - `{{consulta}}`
   - `{{plan}}`
   - `{{to_email}}`
4. Obtené tu Public Key desde Account > API Keys
5. Agregá las variables de entorno en DigitalOcean

### Build Local:

```bash
npm run build
```

Esto genera la carpeta `out` con los archivos estáticos listos para deploy.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
