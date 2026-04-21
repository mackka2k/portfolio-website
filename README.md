# Portfolio Website

A modern, responsive portfolio website built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion. Designed to showcase projects, skills, and experience with a focus on performance, accessibility, and SEO.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS + `tailwind-merge` + `clsx`
- **Animations:** Framer Motion (with `prefers-reduced-motion` support)
- **Themes:** `next-themes` (dark / light / system)
- **Icons:** `lucide-react`
- **Testing:** Jest + React Testing Library
- **Tooling:** ESLint (`next/core-web-vitals`), Prettier

## Project structure

```
app/
├── _components/        # Domain + UI components (private folder)
│   ├── ui/             # Presentational primitives (Navbar, ShinyButton, etc.)
│   ├── __tests__/      # Component tests
│   └── …
├── _lib/               # Helpers, constants, site config
│   └── __tests__/      # Unit tests for utilities
├── _styles/            # Global CSS
├── work/[projectName]/ # Dynamic project detail pages (statically generated)
├── error.tsx           # Global error boundary UI
├── layout.tsx          # Root layout (metadata, theme, schema.org)
├── not-found.tsx       # 404 page
├── page.tsx            # Landing page
├── sitemap.ts          # Dynamic sitemap
└── icon.svg            # Favicon
public/
├── imgs/               # Project mockups, avatars, logos
├── resume/             # Place your CV_en.pdf here
└── robots.txt
```

## Getting started

### 1. Clone & install

```bash
git clone https://github.com/mackka2k/portfolio-website.git
cd portfolio-website
npm install
```

### 2. Configure environment

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

| Variable                    | Purpose                                               |
| --------------------------- | ----------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`      | Canonical base URL used by metadata and sitemap.      |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Email used by the "Reach out via email" CTA.          |
| `NEXT_PUBLIC_GITHUB_URL`    | Profile URL used in footer and "All Projects" button. |
| `NEXT_PUBLIC_LINKEDIN_URL`  | LinkedIn URL used in footer + structured data.        |

### 3. Add your CV (optional)

Place a `CV_en.pdf` into `public/resume/`. A placeholder PDF is included so the download link works out-of-the-box in development.

### 4. Run locally

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

## Scripts

| Command              | Description                                 |
| -------------------- | ------------------------------------------- |
| `npm run dev`        | Start the dev server (Turbopack-compatible) |
| `npm run build`      | Production build                            |
| `npm run start`      | Run the production server                   |
| `npm run lint`       | Lint the codebase                           |
| `npm run format`     | Auto-format with Prettier                   |
| `npm test`           | Run Jest test suite                         |
| `npm run test:watch` | Run Jest in watch mode                      |

## Accessibility & performance

- Semantic landmarks (`<main>`, `<nav>`, `<section>`, `<article>`, `<footer>`).
- All icon-only interactive elements have `aria-label`s.
- `prefers-reduced-motion` is respected across animations.
- Focus states are visible (`focus-visible:ring-*`).
- `next/image` is used everywhere with explicit `sizes` and lazy loading.
- Dynamic project pages are statically generated via `generateStaticParams`.
- JSON-LD `Person` schema, OpenGraph, and Twitter card metadata included.

## Deployment

The project is ready for Vercel (zero config) and any Node-based host.

```bash
npm run build && npm run start
```

## License

MIT License. See [LICENSE](LICENSE) for details.
