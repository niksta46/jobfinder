import { Link } from 'react-router-dom'
import Card from '../../ui/common/Card'
import Badge from '../../ui/common/Badge'
import { useSavedJobs } from '../../hooks/useSavedJobs'

const jobTypeVariant = {
  'full-time': 'success',
  'part-time': 'info',
  contract: 'warning',
  internship: 'info',
  remote: 'info',
}

export default function JobCard({ job }) {
  const { id, title, company_name, candidate_required_location, salary, job_type } = job
  const { isSaved, toggleSave } = useSavedJobs()
  const saved = isSaved(id)

  return (
    <div className="relative group">
      <Link
        to={`/jobs/${id}`}
        className="block cursor-pointer"
      >
        <Card className="transition-all hover:shadow-lg hover:-translate-y-0.5 hover:bg-primary-50 border-l-4 border-transparent hover:border-primary-400">
          <div className="flex flex-col gap-2">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h3 className="font-semibold text-gray-800 truncate">{title}</h3>
                <p className="text-sm text-gray-500">{company_name}</p>
              </div>
              {job_type && (
                <Badge variant={jobTypeVariant[job_type?.toLowerCase()] || 'default'}>
                  {job_type}
                </Badge>
              )}
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              {candidate_required_location && (
                <span>{candidate_required_location}</span>
              )}
              {salary && <span>{salary}</span>}
            </div>
          </div>
        </Card>
      </Link>
      <button
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleSave(job) }}
        className="absolute top-3 right-3 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-100"
        title={saved ? 'Unsave' : 'Save job'}
      >
        <svg
          className={`w-5 h-5 ${saved ? 'text-primary-500 fill-primary-500' : 'text-gray-400 fill-none'}`}
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
        </svg>
      </button>
    </div>
  )
}
