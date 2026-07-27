# AGENTS.md

## Purpose

Defines **how AI coding agents must behave** in this job search website project.

Not a progress log and not a roadmap.

⚠️ **Important Rule**

* This file is considered **stable**
* Changed **only if project owner explicitly instructs so**
* Agents must never modify this file on their own

For project progress and goals, refer to:

* PROJECT_STATE.md (current status)
* ROADMAP.md (future work)
* DEPLOYMENT.md (deployment progress)

---

## Agent Role

* **Frontend-focused agent** building job search UI
* Responsibility: build features that consume external job listing APIs
* Treat all external APIs as stable data sources

---

## Repository Overview

```
.                   # Project root (React + Vite frontend)
docs/               # Project documentation
src/                # Source code
```

---

## Scope Rules (Strict)

### Backend

* ❌ Do NOT create backend server unless explicitly instructed
* ❌ Do NOT add database or persistence layer unless explicitly instructed
* ✅ Call free job APIs directly from frontend

### Frontend

* ✅ All new work inside `src/`
* ✅ Use existing architecture and patterns
* ✅ Consume external job API data as-is

---

## Tech Stack

### Frontend

* React 19
* Vite
* Tailwind CSS v3
* React Router v6 (createBrowserRouter)
* TanStack Query v5
* Recharts (for salary/trend charts if needed)

### External APIs

* Primary: Remotive API (free, no API key required)
  * Base URL: `https://remotive.com/api/`
  * Endpoint: `/remote-jobs?category=&search=`
* Fallback: JSearch via RapidAPI (free tier, API key via env)
  * Base URL: `https://jsearch.p.rapidapi.com/`
  * Key: `VITE_RAPIDAPI_KEY`

---

## Frontend Architecture

### Directory Structure
```
src/
├── api/                    # API service layer
│   ├── client.js           # Base API client
│   ├── queryKeys.js        # TanStack Query keys
│   └── endpoints/          # Resource-specific API hooks
├── features/               # Feature-based UI modules
│   ├── home/               # Home page (landing)
│   ├── job-search/         # Job search & filters
│   ├── job-details/        # Single job details page
│   ├── saved-jobs/         # Saved/bookmarked jobs
│   └── job-list/           # Job listing display
├── ui/
│   ├── layout/             # Layout, Header, Navigation
│   └── common/             # Reusable UI primitives
├── routes/                 # Router configuration
├── styles/                 # Global styles
└── design-system/          # Design tokens
```

### Data Flow Pattern
```
API Client → TanStack Query Hooks → Feature Component → UI Component
```

---

## API Layer Conventions

* One module per resource
* Consistent method naming:
  * searchJobs, getJobDetails
  * TanStack Query hooks: useJobSearch, useJobDetails
* Query keys centralized in `queryKeys.js`
* API base URLs provided via `VITE_*` env vars

---

## Error Handling Strategy

* Network & server errors handled in `client.js`
* Errors propagated as `Error` objects
* Displayed using `ErrorMessage` component

---

## Loading & Empty States

* Full-page loading: `Loading` component
* Component-level loading: TanStack Query `isLoading` state
* Empty results: `EmptyState` component

---

## Routing

* Uses `createBrowserRouter`
* Layout rendered via `<Outlet />`
* No `{children}` pattern for routes

Routes:
- `/` — Home page (search)
- `/jobs/:id` — Job details
- `/saved` — Saved/bookmarked jobs

---

## Search State Persistence

* Search query stored in URL search params (`?q=&category=&location=`)
* Layout component handles search bar and URL state
* Results page reads params on mount

---

## Design System

* Tailwind CSS for styling
* Custom color palette configured in Tailwind
* Design tokens defined in `design-system/` directory

---

## What Agent Can Do ✅

1. Create and modify React components
2. Set up TanStack Query hooks
3. Configure Tailwind and design system
4. Add routes and navigation
5. Handle all UI states (loading, error, empty, success)
6. Use existing patterns and components
7. Implement search, filter, and sort features
8. Implement bookmark/save functionality with localStorage

---

## What Agent Must NOT Do ❌

1. Do NOT modify files outside `src/` and `docs/`
2. Do NOT create backend code unless instructed
3. Do NOT add authentication unless instructed
4. Do NOT commit or push code
5. Do NOT create new directories without approval
6. Do NOT add new dependencies without approval
7. Do NOT make design decisions without consulting user

---

## What Agent Must Ask About ⚠️

1. **Design decisions**: colors, typography, layout choices
2. **New features**: beyond core job search
3. **Dependencies**: any new npm packages
4. **Architecture changes**: new patterns or structures
5. **API changes**: different job data source

---

## Documentation Authority

| File              | Who Updates It | Purpose                     |
| ----------------- | -------------- | --------------------------- |
| AGENTS.md         | ❌ Agent        | Agent behavior & rules      |
| ARCHITECTURE.md   | ❌ Agent        | Technical structure         |
| DESIGN_SYSTEM.md  | ❌ Agent        | Design tokens & styling     |
| PROJECT_STATE.md  | ✅ Owner        | Current project status      |
| ROADMAP.md        | ✅ Owner        | Goals & next steps          |
| DEPLOYMENT.md     | ✅ Owner        | Deployment progress tracking |

Agents must respect this separation at all times.

---

## Development Rules

* Prefer existing components over creating new ones
* Handle all states: loading, error, empty, success
* Follow established design system
* Keep components focused and readable
* Use TypeScript if project requires it (not default)

---

## Phase Completion Workflow

When a phase is completed, the agent will:

1. Ask the user: "Do you believe this phase is done?"
   - If "yes" → proceed
   - If "no" → wait for instructions

2. Update PROJECT_STATE.md:
   - Write down the completed task(s) at the corresponding phase
   - Add ✅ tick at the completed task(s)

3. Update ROADMAP.md:
   - Add ✅ tick at the completed task(s) in the corresponding phase

4. **Ask the user**: "Do you want me to commit and push these changes?"
   - If "yes" → git add, commit, push
   - If "no" → stop
   - ⚠️ Agent must ALWAYS ask before committing/pushing. Never auto-commit.
