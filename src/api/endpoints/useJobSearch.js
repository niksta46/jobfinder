import { useQuery } from '@tanstack/react-query'
import { apiFetch } from '../client.js'
import { queryKeys } from '../queryKeys.js'

export async function searchJobs(_params) {
  return apiFetch('/remote-jobs')
}

export function useJobSearch() {
  return useQuery({
    queryKey: queryKeys.jobs.all,
    queryFn: searchJobs,
  })
}
