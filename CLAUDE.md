# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the dev server at http://localhost:3000
- `npm run build` — production build (Turbopack; also runs the TypeScript check)
- `npm run start` — serve the production build
- `npm run lint` — ESLint 9 flat config ([eslint.config.mjs](eslint.config.mjs), `eslint-config-next`)
- `npx tsc --noEmit` — type-check only (`strict: true`)

There is no test suite.

On Windows, run builds from a shell whose cwd uses an uppercase drive letter (`C:\...`). With a lowercase `c:\...` cwd, `next build` compiles but then fails with `PageNotFoundError` while collecting page data.

## Environment

Requires a `.env.local` (gitignored) with:
- `MONGO_URI` — MongoDB connection string, used by [src/utils/db.ts](src/utils/db.ts)
- `SEARCHPASS` — secret that unlocks the `/message` page (`/message?pass=<SEARCHPASS>`); if unset, the page never shows messages

## Architecture

Single-page personal portfolio on **Next.js 16 App Router + React 19**, TypeScript. Path alias `@/*` → `src/*`.

- **Home page** ([src/app/page.tsx](src/app/page.tsx)) is a stack of `<section id="...">` blocks (`hero`, `project`, `experience`, `about`, `contact`). The navbar ([src/components/Navbarr.tsx](src/components/Navbarr.tsx)) scrolls to these IDs with `react-scroll`, driven by `navbarItem` in [src/constants/index.ts](src/constants/index.ts) — keep section IDs and `navbarItem` in sync. `Navbar.tsx`, `Projects.tsx` and `TechStack.tsx` are older unused variants; `Navbarr.tsx` and `Project.tsx` are the live ones. Project rows render from `projects` in constants, and the Experience section (timeline + Technologies chips) renders from `experience` and `technologies`. `techImage` is only used by the unused `TechStack.tsx`.
- **Providers** in [src/app/layout.tsx](src/app/layout.tsx): `next-themes` `ThemeProvider` (class-based dark mode) → `HeroUIProvider` ([src/app/providers.tsx](src/app/providers.tsx)).
- **Styling is Tailwind CSS v4**, configured in CSS — there is no `tailwind.config.js`. [src/app/globals.css](src/app/globals.css) holds the `@theme` tokens (shadcn CSS variables), the class-based `dark` variant, `tw-animate-css`, and loads HeroUI via `@plugin '../hero.ts'` plus an `@source` for HeroUI's theme files. HeroUI theme options live in [src/hero.ts](src/hero.ts). Tailwind v4 accepts arbitrary spacing numbers (e.g. `mt-30`) that v3 silently ignored — watch for that when copying old classes.
- **UI components**: HeroUI v2 (provider only; the navbar is plain Tailwind, the popover lives in unused `TechStack.tsx`), lucide-react for UI icons and react-icons for brand icons, and shadcn/ui ([src/components/ui/](src/components/ui/), [components.json](components.json)). The toast system (`useToast` + `<Toaster/>` in the layout) is shadcn's.
- **Contact flow**: [src/components/Contact.tsx](src/components/Contact.tsx) POSTs to `/api/contact` ([src/app/api/contact/route.ts](src/app/api/contact/route.ts)), which saves to MongoDB via the Mongoose `Contact` model ([src/model/Contact.ts](src/model/Contact.ts)). The route validates `name`/`email`/`message` (required, trimmed, length-capped) and deliberately has no `GET`, since messages hold visitors' personal data. The model uses the `mongoose.models.Contact ||` pattern to survive hot reload; `connect()` is called per request but returns early when the connection is already open.
- **Messages page** ([src/app/message/page.tsx](src/app/message/page.tsx)) is a dynamic server component. When `?pass` matches `SEARCHPASS`, it reads messages straight from MongoDB via [src/lib/GetMessage.ts](src/lib/GetMessage.ts).
- Static content (tech stack entries, nav items) lives in [src/constants/index.ts](src/constants/index.ts); images and tech logos are in [public/](public/) and are referenced by URL (e.g. `/proj1.PNG`).

## Dependency constraints

- **TypeScript is pinned to 6.0.x**: `typescript-eslint` (inside `eslint-config-next`) requires `<6.1`. TS 7 builds fine but breaks `npm run lint`.
- **ESLint is pinned to 9**: `eslint-plugin-react` in `eslint-config-next` 16 crashes on ESLint 10.
- **HeroUI stays on v2**: v3 is a rewrite with a different component API.
- `@types/node` tracks the Node runtime major (22), not the latest types.

Deployed on Vercel.
