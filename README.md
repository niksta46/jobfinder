# JobFinder

A remote job search website built with React. Fetches live job listings from the Remotive API. Search, filter, save jobs — no backend required.

## Features

- **Job search** — search by keyword, category, location, job type
- **Filters & sorting** — filter by type/location, sort by date/salary/relevance
- **Job details** — full description, company info, apply link, related jobs
- **Saved jobs** — bookmark jobs via localStorage, persist across sessions
- **Dark mode** — toggle manually or follows OS preference
- **Responsive** — works on mobile, tablet, desktop
- **Loading skeletons** — animated placeholders while fetching

## Tech Stack

- **React 19** — UI framework
- **Vite** — build tool
- **Tailwind CSS 3** — styling
- **React Router 6** — client-side routing
- **TanStack Query 5** — server state & caching
- **Recharts** — charts (if used)

## Data Sources

- **Primary:** [Remotive API](https://remotive.com/api/) (free, no key required)
- **Fallback:** JSearch via RapidAPI (free tier, requires `VITE_RAPIDAPI_KEY`)

## Getting Started

```bash
git clone https://github.com/niksta46/jobfinder.git
cd jobfinder
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

### Environment Variables (optional)

| Variable | Required | Description |
|---|---|---|
| `VITE_RAPIDAPI_KEY` | No | API key for JSearch fallback |

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── api/              # API client & TanStack Query hooks
├── contexts/         # React contexts (saved jobs)
├── features/         # Feature-based UI modules
│   ├── home/         # Landing page with search
│   ├── job-list/     # Job card components
│   ├── job-details/  # Single job detail view
│   └── saved-jobs/   # Bookmarked jobs page
├── hooks/            # Shared custom hooks
├── ui/
│   ├── common/       # Reusable UI primitives (Button, Card, Input, etc.)
│   └── layout/       # App layout & header
├── routes/           # Router configuration
└── styles/           # Global styles & design tokens
```

## Deployment

Deployed on [Vercel](https://vercel.com). Auto-deploys on push to `main`.
