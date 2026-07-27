# Roadmap

## Purpose

Defines **where the project is going next**.

⚠️ **Update Rule**

* **Updated continuously** by project owner
* Agents must follow this file as authoritative plan

---

## Phase 1: Project Setup

### Goal

Initialize React + Vite project with proper configuration.

### Tasks

- [ ] Initialize Vite + React project
- [ ] Install dependencies (Tailwind, TanStack Query, React Router)
- [ ] Configure Tailwind CSS with design tokens
- [ ] Set up project structure per ARCHITECTURE.md

---

## Phase 2: Design System Implementation

### Goal

Implement design tokens and common components.

### Tasks

- [ ] Configure Tailwind with color palette
- [ ] Set up typography in Tailwind
- [ ] Create CSS custom properties
- [ ] Build common components:
  - [ ] Button
  - [ ] Card
  - [ ] Input
  - [ ] Select/Dropdown
  - [ ] Loading
  - [ ] ErrorMessage
  - [ ] EmptyState
  - [ ] Badge (for job type, salary, etc.)

---

## Phase 3: API Layer

### Goal

Set up API client and TanStack Query integration.

### Tasks

- [ ] Create API client (`src/api/client.js`)
- [ ] Configure TanStack Query provider
- [ ] Create query keys (`src/api/queryKeys.js`)
- [ ] Implement Remotive API hooks:
  - [ ] useJobSearch(query, category)
  - [ ] useJobDetails(id)
- [ ] Implement JSearch hooks (fallback):
  - [ ] useJSearch(query, params)

---

## Phase 4: Core Feature — Job Search

### Goal

Build job search with filters and results display.

### Tasks

- [x] Search input with category dropdown
- [x] Job listing cards (title, company, location, salary, type)
- [x] Filter bar (category, location, job type, date posted)
- [x] Sort options (date, relevance, salary)
- [x] Pagination / infinite scroll
- [x] Empty state for no results

---

## Phase 4.1: UX Improvements

### Goal

Polish search UX based on user feedback.

### Tasks

- [x] Remove Search button — auto-filter on category/input change
- [x] Remove "Search" link from header nav (keep only Saved)
- [x] Show total job count + "X / Y displayed" in pagination
- [x] Sticky search bar + smaller hero text to reclaim space

---

## Phase 5: Job Details Page

### Goal

Build detailed view for individual job listings.

### Tasks

- [x] Full job description display
- [x] Company info section
- [x] Apply button (links to external posting)
- [x] Related jobs section
- [x] Loading & error states

---

## Phase 6: Saved / Bookmarked Jobs

### Goal

Allow users to save jobs for later.

### Tasks

- [x] Save/unsave button on job cards and details
- [x] localStorage persistence
- [x] Saved jobs page with list view
- [x] Empty state for no saved jobs

---

## Phase 7: Advanced Features

### Goal

Add polish and advanced filtering.

### Tasks

- [ ] Salary range filter (if data available)
- [ ] Remote vs on-site toggle
- [ ] Keyword highlight in results
- [ ] Recent searches in localStorage
- [ ] Debounced search input

---

## Phase 8: UI Polish & Responsive Design

### Goal

Ensure professional look across all devices.

### Tasks

- [ ] Responsive layout (mobile, tablet, desktop)
- [ ] Loading skeletons for job cards
- [ ] Smooth transitions and animations
- [ ] Dark mode toggle (optional)

---

## Definition of Done

* All features implemented and reachable
* Responsive on mobile, tablet, desktop
* Proper loading, error, and empty states
* No console errors

---

## Agent Instruction

Agents must:

* Start work from **first unchecked step**
* Not skip roadmap steps
* Ask for clarification if roadmap and code conflict
