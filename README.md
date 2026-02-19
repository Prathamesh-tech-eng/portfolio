```markdown
My portfolio link  : https://portfolio-a46y-git-main-prathameshs-projects-2a6b51c8.vercel.app

# Portfolio (Personal Website)

This repository contains a React + Vite portfolio site showcasing projects, skills, and highlights. It uses Tailwind CSS for styling and Lucide icons.

Live demo (your Vercel deployment): https://portfolio-a46y-git-main-prathameshs-projects-2a6b51c8.vercel.app

## Quick Start — Local Development

Prerequisites: Node.js 18+ and npm.

1. Install dependencies

```bash
npm install
```

2. Start dev server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Preview built site

```bash
npm run preview
```

## Project Structure (key files)

- `src/` — React source files
- `src/components/` — UI components (About, Projects, Navbar, etc.)
- `public/` — static assets; your resume PDFs live under `public/resumes/`
- `package.json` — scripts and dependencies

## Resumes

Drop PDF files into `public/resumes/`. They will be served at `/resumes/<filename>.pdf` from the built site. The About section includes a resume selector that reads files from this folder.

Example filenames currently present:

- `public/resumes/Resume_FrontEnd_PrathameshChikkali.pdf`
- `public/resumes/Resume_BackEnd_PrathameshChikkali.pdf`
- `public/resumes/Resume_DataScience_PrathameshChikkali.pdf`
- `public/resumes/Resume_DevOps_PrathameshChikkali.pdf`
- `public/resumes/Resume_SoftwareDevelopment_PrathameshChikkali.pdf`

To add/change resumes: add the file to `public/resumes/` and (optionally) update `src/components/ResumeSelector.jsx` if you want a custom label.

## Linting

```bash
npm run lint
```

## Deployment to Vercel

Vercel automatically deploys from your repository when connected. To trigger a redeploy:

- Push changes to the branch Vercel is configured to watch (often `main`):

```bash
git add .
git commit -m "Deploy: update About section and resume selector"
git push origin main
```

- Or trigger a redeploy from the Vercel dashboard.

Manual CLI deploy (use if you prefer):

```bash
npm i -g vercel
vercel --prod
```

If you want automated deploys via GitHub Actions, I can add a workflow that runs `npm ci`, `npm run build`, and deploys with the Vercel Action using a `VERCEL_TOKEN` secret.

## Recent Changes (high level)

- Refactored `AboutSection.jsx` to match card layout and top-align columns.
- Added `src/components/ResumeSelector.jsx` and integrated a selectable Resume Download/Preview UI.
- Moved Certifications into a card aligned with the right column and ensured equal column heights using Tailwind `items-stretch` and `h-full`.
- Fixed overflow/shrink issues by adding `min-w-0` to flex containers and limiting selector width.

## Troubleshooting

- If assets fail to load after build, ensure paths in `public/` are correct and not referenced with `.` relative paths.
- If Preview opens a blank page, check devtools for 404 requests to `/resumes/<name>.pdf` and confirm filename case matches.


``` 