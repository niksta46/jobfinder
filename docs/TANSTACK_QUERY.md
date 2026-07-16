# TanStack Query Conventions

## Purpose

Captures TanStack Query patterns used in the job search project.

---

## Query Client Defaults

```js
{
  staleTime: 5 * 60 * 1000, // 5 minutes
  retry: 1,
}
```

---

## Query Keys Architecture

Centralized in `src/api/queryKeys.js` with hierarchical structure:

```js
export const queryKeys = {
  jobs: {
    all: ['jobs'],
    search: (params) => ['jobs', 'search', params],
    details: (id) => ['jobs', 'details', id],
  },
  saved: {
    all: ['saved'],
  },
}
```

---

## Hook Patterns

Each endpoint exports:
1. Raw API function (for direct use if needed)
2. TanStack Query hook (for components)

```js
// api function
export async function searchJobs(params) { ... }

// hook
export function useJobSearch(params) {
  return useQuery({
    queryKey: queryKeys.jobs.search(params),
    queryFn: () => searchJobs(params),
    enabled: Boolean(params?.query),
  });
}
```

---

## Cache Invalidation Strategy

* Saved jobs mutation invalidates `['saved']` keys
* Job search refetches on param change (automatic via query key dependency)
* No mutations on external API (read-only) — cache only

---

## Usage Examples

### Search jobs
```js
const { data, isLoading, error } = useJobSearch({ query: 'react', category: 'engineering' });
```

### Get job details
```js
const { data, isLoading, error } = useJobDetails(jobId);
```

---

## Benefits

1. Automatic caching with background refetching
2. No manual loading state management
3. Built-in retry logic and error boundaries
4. DevTools support via browser extension
