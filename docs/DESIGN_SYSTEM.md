# Design System

## Purpose

Defines **visual design tokens** for job search website project.

⚠️ **Stability Rule**

* Considered **frozen**
* Changed **only when explicitly instructed by project owner**

---

## Color Palette

### Primary Colors

| Name | Hex | Usage |
|------|-----|-------|
| primary-50 | #EBF5FF | Lightest backgrounds |
| primary-100 | #D6EBFF | Card backgrounds |
| primary-200 | #ADD5FF | Borders, dividers |
| primary-300 | #85BFFF | Secondary elements |
| primary-400 | #5CA8FF | Active states |
| primary-500 | #338EFF | Primary buttons (default) |
| primary-600 | #297ACC | Primary buttons (hover) |
| primary-700 | #1F5C99 | Text on light backgrounds |
| primary-800 | #154766 | Headings |
| primary-900 | #0B3333 | Primary text |

### Semantic Colors

| Name | Hex | Usage |
|------|-----|-------|
| success | #22C55E | Applied, hired, active |
| warning | #F59E0B | Expiring soon, pending |
| error | #EF4446 | Expired, rejected |
| info | #3B82F6 | Information badges |

### Job Status Colors

| Status | Color Name | Hex |
|--------|------------|-----|
| Full-time | success | #22C55E |
| Part-time | info | #3B82F6 |
| Contract | warning | #F59E0B |
| Internship | primary-400 | #5CA8FF |
| Remote | info | #3B82F6 |

### Neutral Colors

| Name | Hex | Usage |
|------|-----|-------|
| white | #FFFFFF | Backgrounds |
| gray-50 | #F8FAFC | Page background |
| gray-100 | #F1F5F9 | Card backgrounds |
| gray-200 | #E2E8F0 | Borders |
| gray-300 | #CBD5E1 | Disabled states |
| gray-400 | #94A3B8 | Placeholder text |
| gray-500 | #64748B | Secondary text |
| gray-600 | #475569 | Body text |
| gray-700 | #334155 | Headings |
| gray-800 | #1E293B | Primary text |
| gray-900 | #0F172A | Darkest text |

---

## Typography

### Font Families

| Usage | Font | Fallback |
|-------|------|----------|
| Headings | Inter | system-ui, sans-serif |
| Body | Inter | system-ui, sans-serif |
| Mono/Data | JetBrains Mono | monospace |

### Font Sizes

| Name | Size | Line Height |
|------|------|--------------|
| xs | 0.75rem (12px) | 1rem |
| sm | 0.875rem (14px) | 1.25rem |
| base | 1rem (16px) | 1.5rem |
| lg | 1.125rem (18px) | 1.75rem |
| xl | 1.25rem (20px) | 1.75rem |
| 2xl | 1.5rem (24px) | 2rem |
| 3xl | 1.875rem (30px) | 2.25rem |

---

## Spacing

Based on 4px grid system — standard Tailwind scale.

---

## Border Radius

| Name | Value |
|------|-------|
| none | 0px |
| sm | 4px |
| DEFAULT | 8px |
| md | 12px |
| lg | 16px |
| full | 9999px |

---

## Shadows

Standard Tailwind shadow scale (sm, DEFAULT, md, lg, xl).

---

## Component Guidelines

### Cards (Job Listing)
- Background: white
- Border radius: DEFAULT (8px)
- Shadow: DEFAULT
- Padding: 6 (24px)
- Hover: shadow-md

### Job Badges
- Background: semantic color with 15% opacity
- Text: semantic color
- Border radius: full
- Padding: 1 (4px) horizontal, 0.5 (2px) vertical

### Buttons
- Primary: primary-500 bg, white text
- Secondary: gray-100 bg, gray-700 text
- Border radius: DEFAULT
- Padding: 3 (12px) horizontal, 2 (8px) vertical

### Inputs & Selects
- Background: white
- Border: gray-200
- Border radius: DEFAULT
- Padding: 3 (12px)

---

## Responsive Breakpoints

Standard Tailwind breakpoints (sm: 640px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1536px).

---

## Implementation

Design tokens implemented via:
1. Tailwind config (`tailwind.config.js`)
2. CSS custom properties in `src/styles/globals.css`
3. Reusable component primitives in `components/common/`
