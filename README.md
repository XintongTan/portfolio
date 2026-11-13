# Xintong Tan — Portfolio

A minimal, responsive portfolio for a UI/UX Developer & UI Engineer. Built with React, TypeScript, React Router, Vite, and plain CSS. No backend or component library.

## Run locally

```sh
npm install
npm start
```

Open the local URL printed by Vite (normally `http://localhost:5173/portfolio/`). `npm run dev` is an alias for the same server.

```sh
npm run typecheck
npm run build
npm run preview
```

The build checks TypeScript, then creates `dist/`. The project pins Node 22 as a development dependency. After `npm install`, npm scripts automatically use that local runtime, so `npm start`, `npm run dev`, `npm run build`, and `npm run preview` work even when your system Node is 18.16.0. No global Node change or custom PATH is needed. The architecture follows KNIT, with patched Vite and React Router versions.

Node 22 is also used in CI. Installing dependencies with system Node 18 may print engine warnings for Vite and React Router; the installed project-local Node 22 is what runs those tools. Install development dependencies normally (do not use `--omit=dev` or `--ignore-scripts` for local development).

## Structure

The skeleton follows the KNIT project: `main` → hash router → `App` routes → shared `Layout`, `Header`, `Footer`, and page components.

```text
src/
  App.tsx
  main.tsx
  styles.css
  components/
    Layout.tsx
    Header.tsx
    Footer.tsx
    ProjectCard.tsx
    AboutSection.tsx
  pages/
    Home.tsx
    About.tsx
    Resume.tsx
    ProjectDetail.tsx
    NotFound.tsx
  data/
    profile.ts
    projects.ts
public/
  images/                    # Local illustrative SVG placeholders
  favicon.svg
.github/workflows/deploy.yml
```

## Edit content

- Update contact information and skills in `src/data/profile.ts`.
- Update the three case studies in `src/data/projects.ts`. All projects use the same `ProjectDetail` layout.
- Replace local SVG placeholders in `public/images/` with your own screenshots, then update the image filenames and alt text.
- Replace the sample experience and education in `src/pages/Resume.tsx`. The Print / Save PDF button uses the browser print dialog and a dedicated print stylesheet.
- Adjust colors, typography, and spacing in `src/styles.css`. DM Sans and Instrument Serif load through Google Fonts, with system and Georgia fallbacks if unavailable.

Case-study narratives, previews, resume experience, and education are explicitly placeholders. No employers, metrics, or achievements are asserted by those sample sections.

## GitHub Pages

The repository is intended to be `XintongTan/portfolio`, with `base: '/portfolio/'` in `vite.config.ts`. If you rename the repository, update this base path. `HashRouter` lets project URLs reload on static hosting without server rewrites.

Enable **Settings → Pages → Source → GitHub Actions**. Pushes to `main` run the workflow, install locked dependencies with `npm ci`, check TypeScript, build, and deploy `dist/`.

Routes:

- `/#/` — Work and About summary
- `/#/about` — About and skills
- `/#/resume` — Printable placeholder resume
- `/#/work/enterprise-design-system`
- `/#/work/wip-control-tower`
- `/#/work/b2b-customer-portal`

Expected production URL once deployment succeeds: `https://xintongtan.github.io/portfolio/`.
