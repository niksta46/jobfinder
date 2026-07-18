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
  const { title, company_name, candidate_required_location, salary, job_type, url } = job

  return (
    <Card className="hover:shadow-md transition-shadow">
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
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-sm font-medium text-primary-500 hover:text-primary-600"
        >
          View Job &rarr;
        </a>
      </div>
    </Card>
  )
}
