import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'savedJobs'

function loadSaved() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

const SavedJobsContext = createContext(null)

export function SavedJobsProvider({ children }) {
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

  return (
    <SavedJobsContext.Provider value={{ savedJobs, isSaved, toggleSave }}>
      {children}
    </SavedJobsContext.Provider>
  )
}

export function useSavedJobs() {
  const ctx = useContext(SavedJobsContext)
  if (!ctx) {
    throw new Error('useSavedJobs must be used within SavedJobsProvider')
  }
  return ctx
}
