import { useQuery } from '@tanstack/react-query'
import { apiFetch } from '../client.js'
import { queryKeys } from '../queryKeys.js'

export async function searchJobs(params = {}) {
  const { query = '', category = '' } = params
  const endpoint = `/remote-jobs?category=${encodeURIComponent(category)}&search=${encodeURIComponent(query)}`
  return apiFetch(endpoint)
}

export function useJobSearch(params) {
  return useQuery({
    queryKey: queryKeys.jobs.search(params),
    queryFn: () => searchJobs(params),
    enabled: Boolean(params?.query || params?.category),
  })
}
