import ErrorMessage from '../../ui/common/ErrorMessage'
import EmptyState from '../../ui/common/EmptyState'
import JobCard from './JobCard'
import JobCardSkeleton from './JobCardSkeleton'

export default function JobList({ jobs, isLoading, error }) {
  if (error) return <ErrorMessage message={error.message} />
  if (isLoading) {
    return (
      <div className="flex flex-col gap-4" aria-busy="true" aria-label="Loading jobs">
        {Array.from({ length: 5 }).map((_, i) => (
          <JobCardSkeleton key={i} />
        ))}
      </div>
    )
  }
  if (!jobs || jobs.length === 0) {
    return <EmptyState title="No jobs found" message="Try a different search or filter." />
  }

  return (
    <div className="flex flex-col gap-4">
      {jobs.map((job) => (
        <div key={job.id} className="animate-fade-in-up">
          <JobCard job={job} />
        </div>
      ))}
    </div>
  )
}
