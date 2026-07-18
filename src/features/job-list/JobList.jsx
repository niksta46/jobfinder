import Loading from '../../ui/common/Loading'
import ErrorMessage from '../../ui/common/ErrorMessage'
import EmptyState from '../../ui/common/EmptyState'
import JobCard from './JobCard'

export default function JobList({ jobs, isLoading, error }) {
  if (isLoading) return <Loading />
  if (error) return <ErrorMessage message={error.message} />
  if (!jobs || jobs.length === 0) {
    return <EmptyState title="No jobs found" message="Try a different search or filter." />
  }

  return (
    <div className="flex flex-col gap-4">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  )
}
