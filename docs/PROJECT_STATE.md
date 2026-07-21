# Project State

## Purpose

Tracks **current status** of the job search website project.

⚠️ **Update Rule**

* Updated by **project owner**
* Agents must NOT modify this file

---

## Project Overview

| Property | Value |
|----------|-------|
| Name | Job Search Website |
| Type | Single-page web application |
| Tech Stack | React + Vite + Tailwind CSS |
| Data Source | Remotive API (free) / JSearch (RapidAPI) |

---

## Completed Tasks

* Agent configuration: AGENTS.md ✅
* Architecture definition: ARCHITECTURE.md ✅
* Design system: DESIGN_SYSTEM.md ✅
* Roadmap: ROADMAP.md ✅
* Phase 1: Project Setup ✅
  * Vite + React scaffolded
  * Dependencies installed (Tailwind, TanStack Query, React Router, Recharts)
  * Tailwind CSS configured with design tokens
  * Directory structure per ARCHITECTURE.md
  * Common components scaffolded (Button, Card, Input, Select, Badge, Loading, ErrorMessage, EmptyState)
  * Router configured with Layout, Home, JobDetails, SavedJobs routes
  * Build passes
* Phase 2: Design System Implementation ✅
  * Tailwind configured with color palette
  * Typography set in Tailwind
  * CSS custom properties created (`src/styles/design-tokens.css`)
  * Common components built
* Phase 3: API Layer ✅
  * API client created (`src/api/client.js`)
  * TanStack Query configured in `main.jsx`
  * Query keys defined (`src/api/queryKeys.js`)
  * Hooks: useJobSearch, useJobDetails, useJSearch
* Phase 4: Core Feature — Job Search ✅
  * Search input with category dropdown
  * Job listing cards with JobCard/JobList components
  * Filter bar (job type, location)
  * Sort options (date, relevance, salary)
  * Pagination (10 per page)
  * Empty state
* Phase 4.1: UX Improvements ✅
  * Remove Search button — auto-filter on category/input change
  * Remove "Search" link from header nav
  * Show total job count + "X / Y displayed" in pagination
  * Sticky search bar + smaller hero text, moved tagline to navbar
  * Fixed navbar with color polish
  * Clickable job cards with hover effects
* Phase 5: Job Details Page ✅
  * Full job description display with HTML rendering
  * Company info section (name, location, salary, date, category)
  * Apply button (links to external posting)
  * Related jobs section (same category)
  * Loading, error, and not-found states
  * Job cards link to internal details page instead of external URL

---

## Pending Tasks

* Phase 6–8: See ROADMAP.md

---

## Notes

* Remotive API ignores category/search params — all filtering done client-side
* CORS fix: Content-Type header only sent on requests with a body
