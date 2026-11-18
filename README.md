# TEC REC Club website

A mobile-first website and installable web app for TEC REC Club, a free STEAM education program that gives students hands-on projects and connects them with ideas from Silicon Valley and other tech hubs.

## What it does

- **Explains the program:** a home page, About, FAQ and a Contact form.
- **Shows the projects.** Sections for the Project of the Month (with build instructions and supply lists), inventions, toys, apps, games, AI, videos, news and a showcase of student builds.
- **Helps schools start a club.** A Start a Club page walks an organization through setting one up for free.
- **Works like an app on a phone.** It has a bottom navigation bar on mobile and can be installed to the home screen as a progressive web app that also works offline.
- **Newsletter sign-up** on the site.

## Run it

You need Node.js 18 or newer.

```bash
git clone https://github.com/moazzanimran2007/tec-rec-app-kit.git
cd tec-rec-app-kit
npm install
npm run dev
```

Then open the local address Vite prints. `npm run build` makes a production build, including the service worker for installing and offline use.

## Tech stack

React and TypeScript on Vite, Tailwind CSS with shadcn/ui, React Router for page navigation, and `vite-plugin-pwa` for installing and offline support. Built with Lovable. There is no backend.

## Status

The newsletter and contact forms show a confirmation but don't send anything yet, so they need a form service or backend before going live.
