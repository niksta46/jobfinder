import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '../queryKeys.js'

const JSEARCH_BASE = import.meta.env.VITE_JSEARCH_API_URL || 'https://jsearch.p.rapidapi.com'
const RAPIDAPI_KEY = import.meta.env.VITE_RAPIDAPI_KEY

export async function searchJSearch(params = {}) {
  const { query = '', location = '', page = 1 } = params
  const queryStr = [query, location].filter(Boolean).join(' in ')
  const url = `${JSEARCH_BASE}/search?query=${encodeURIComponent(queryStr)}&page=${page}`

  const response = await fetch(url, {
    headers: {
      'X-RapidAPI-Key': RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },
  })

  if (!response.ok) {
    throw new Error(`JSearch API error: ${response.status} ${response.statusText}`)
  }

  return response.json()
}

export function useJSearch(params) {
  return useQuery({
    queryKey: queryKeys.jobs.search({ ...params, source: 'jsearch' }),
    queryFn: () => searchJSearch(params),
    enabled: Boolean(RAPIDAPI_KEY && (params?.query || params?.location)),
  })
}
