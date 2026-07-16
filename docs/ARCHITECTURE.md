# Architecture

## Purpose

Describes **technical structure and design decisions** of the job search website project.

⚠️ **Stability Rule**

* Considered **frozen**
* Changed **only when explicitly instructed by project owner**

---

## High-Level Architecture

```
User Input (Search Query)
        ↓
Job API (Remotive / JSearch) → Returns job listings
        ↓
Frontend (React + Vite) → Renders results
```

Frontend calls free job APIs directly. No backend server.

---

## Frontend Structure

```
src/
├── api/                    # API service layer
│   ├── client.js           # Base API client
│   ├── queryKeys.js        # TanStack Query keys
│   └── endpoints/          # Resource-specific API hooks
├── features/               # Feature-based UI modules
│   ├── home/               # Home page (landing + search)
│   ├── job-search/         # Job search with filters
│   ├── job-details/        # Single job details page
│   └── saved-jobs/         # Saved/bookmarked jobs
├── components/
│   ├── layout/             # Layout, Header, Navigation
│   │   └── Layout.jsx      # Main application layout
│   └── common/             # Reusable UI components
│       ├── Card.jsx        # Job listing card
│       ├── Input.jsx       # Search input
│       ├── Select.jsx      # Dropdown filter
│       ├── Badge.jsx       # Job type badge
│       ├── Loading.jsx     # Loading component
│       ├── ErrorMessage.jsx# Error message component
│       └── EmptyState.jsx  # Empty state component
├── routes/                 # Router configuration
├── styles/                 # Global styles
└── design-system/          # Design tokens
```

---

## Data Flow Pattern

```
External API → API Client → TanStack Query Hooks → Feature Component → UI Component
```

* All network logic lives in `api/`
* UI components never call fetch directly
* Automatic caching and invalidation handled by TanStack Query

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
* Background refetching handled automatically

---

## Routing

* Uses `createBrowserRouter`
* Layout rendered via `<Outlet />`
* No `{children}` pattern for routes
* Routes defined in `routes/index.js`

Routes:
| Path | Page | Description |
|------|------|-------------|
| `/` | Home | Landing with search bar |
| `/jobs/:id` | JobDetails | Single job posting |
| `/saved` | SavedJobs | Bookmarked jobs |

---

## State Management

* TanStack Query for server state (job listings)
* React useState/useReducer for UI state only
* URL search params for search query persistence (`?q=&category=&location=`)
* localStorage for saved/bookmarked jobs

---

## Search State Persistence

* Search query, category, and filters stored in URL search params
* Home page reads params on mount to restore search
* Allows sharing search URLs

---

## Saved Jobs

* Stored in localStorage as array of job IDs + minimal metadata
* SavedJobs page reads from localStorage, fetches full details
* Save/unsave toggle updates localStorage and invalidates query cache

---

## Design System

* Tailwind CSS for styling
* Custom color palette configured in Tailwind
* Design tokens in `design-system/` directory

This document exists to prevent architectural drift.
