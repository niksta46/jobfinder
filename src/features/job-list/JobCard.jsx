import { Link } from 'react-router-dom'
import Card from '../../ui/common/Card'
import Badge from '../../ui/common/Badge'

const jobTypeVariant = {
  'full-time': 'success',
  'part-time': 'info',
  contract: 'warning',
  internship: 'info',
  remote: 'info',
}

export default function JobCard({ job }) {
  const { id, title, company_name, candidate_required_location, salary, job_type } = job

  return (
    <Link
      to={`/jobs/${id}`}
      className="block cursor-pointer"
    >
      <Card className="transition-all hover:shadow-lg hover:border-primary-200 hover:-translate-y-0.5 hover:bg-primary-50 border-l-4 border-transparent hover:border-primary-400">
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
  )
}
