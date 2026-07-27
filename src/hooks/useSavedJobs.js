import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'savedJobs'

function loadSaved() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function useSavedJobs() {
  const [savedJobs, setSavedJobs] = useState(loadSaved)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedJobs))
  }, [savedJobs])

  const isSaved = useCallback(
    (id) => savedJobs.some((j) => String(j.id) === String(id)),
    [savedJobs]
  )

  const toggleSave = useCallback((job) => {
    setSavedJobs((prev) => {
      const exists = prev.some((j) => String(j.id) === String(job.id))
      if (exists) {
        return prev.filter((j) => String(j.id) !== String(job.id))
      }
      return [job, ...prev]
    })
  }, [])

  return { savedJobs, isSaved, toggleSave }
}
