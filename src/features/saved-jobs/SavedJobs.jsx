import { Link } from 'react-router-dom'
import { useSavedJobs } from '../../hooks/useSavedJobs'
import EmptyState from '../../ui/common/EmptyState'
import Card from '../../ui/common/Card'
import Badge from '../../ui/common/Badge'
import Button from '../../ui/common/Button'

const jobTypeVariant = {
  'full-time': 'success',
  'part-time': 'info',
  contract: 'warning',
  internship: 'info',
  remote: 'info',
}

export default function SavedJobs() {
  const { savedJobs, toggleSave } = useSavedJobs()

  if (savedJobs.length === 0) {
    return (
      <EmptyState
        title="No saved jobs yet"
        message="Save jobs by clicking the bookmark icon on job cards."
      />
    )
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-1">Saved Jobs</h2>
      <p className="text-sm text-gray-500 mb-6">{savedJobs.length} job{savedJobs.length !== 1 ? 's' : ''} saved</p>
      <div className="flex flex-col gap-4">
        {savedJobs.map((job) => (
          <div key={job.id} className="relative group">
            <Link to={`/jobs/${job.id}`} className="block cursor-pointer">
              <Card className="transition-all hover:shadow-lg hover:-translate-y-0.5 hover:bg-primary-50 border-l-4 border-transparent hover:border-primary-400">
                <div className="flex flex-col gap-2">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h3 className="font-semibold text-gray-800 truncate">{job.title}</h3>
                      <p className="text-sm text-gray-500">{job.company_name}</p>
                    </div>
                    {job.job_type && (
                      <Badge variant={jobTypeVariant[job.job_type?.toLowerCase()] || 'default'}>
                        {job.job_type}
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    {job.candidate_required_location && <span>{job.candidate_required_location}</span>}
                    {job.salary && <span>{job.salary}</span>}
                  </div>
                </div>
              </Card>
            </Link>
            <button
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleSave(job) }}
              className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-gray-100 transition-colors"
              title="Remove from saved"
            >
              <svg className="w-5 h-5 text-primary-500 fill-primary-500" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
