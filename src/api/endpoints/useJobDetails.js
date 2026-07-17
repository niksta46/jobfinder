import { useQuery } from '@tanstack/react-query'
import { apiFetch } from '../client.js'
import { queryKeys } from '../queryKeys.js'

export async function getJobDetails(id) {
  return apiFetch(`/remote-jobs?id=${encodeURIComponent(id)}`)
}

export function useJobDetails(id) {
  return useQuery({
    queryKey: queryKeys.jobs.details(id),
    queryFn: () => getJobDetails(id),
    enabled: Boolean(id),
  })
}
