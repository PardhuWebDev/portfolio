# Pardhu's Portfolio Website

[![Built with Next](https://img.shields.io/badge/built%20with-Next.js-000000)](https://nextjs.org)
[![Deployed on Vercel](https://img.shields.io/badge/deployed%20on-Vercel-000000)](https://vercel.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Forked and customized from [bettinasosa/portfolio](https://github.com/bettinasosa/portfolio).

## Getting Started

### Install dependencies

```bash
npm install
```

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
GITHUB_USERNAME=PardhuWebDev
GITHUB_PERSONAL_ACCESS_TOKEN=your_github_pat_here
```

> Get a GitHub PAT at https://github.com/settings/tokens — needs `read:user` scope.

### Run dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
```

## Customization Done

- Hero text animation: "Building the future with AI"
- About page: bio, stack, journey timeline updated
- Projects page: IndiaQuant MCP, Research Synthesizer, VELA, Stock Dashboard, PO System
- Contact page: name, email, GitHub, LinkedIn updated
- Layout metadata: title, description, OG tags updated
- Footer: timezone → IST, socials → GitHub + LinkedIn

## Deploy to Vercel

1. Push to GitHub
2. Import at vercel.com
3. Add environment variables in Vercel dashboard
4. Deploy

## License

MIT — forked from bettinasosa/portfolio with permission (MIT licensed).
