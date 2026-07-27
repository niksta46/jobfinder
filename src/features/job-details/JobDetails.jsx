import { useParams, Link } from 'react-router-dom'
import { useJobSearch } from '../../api/endpoints/useJobSearch'
import Loading from '../../ui/common/Loading'
import ErrorMessage from '../../ui/common/ErrorMessage'
import Badge from '../../ui/common/Badge'
import Button from '../../ui/common/Button'
import { useSavedJobs } from '../../contexts/SavedJobsContext'

const jobTypeVariant = {
  'full-time': 'success',
  'part-time': 'info',
  contract: 'warning',
  internship: 'info',
  remote: 'info',
}

function formatDate(dateStr) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function JobDetails() {
  const { id } = useParams()
  const { data, isLoading, error } = useJobSearch()
  const allJobs = data?.jobs || []
  const { isSaved, toggleSave } = useSavedJobs()

  const job = allJobs.find((j) => String(j.id) === id)
  const saved = job && isSaved(job.id)

  if (isLoading) return <Loading />
  if (error) return <ErrorMessage message={error.message} />
  if (!job) return <ErrorMessage message="Job not found." />

  const related = allJobs.filter(
    (j) => j.category === job.category && String(j.id) !== id
  ).slice(0, 5)

  return (
    <div className="max-w-3xl mx-auto">
      <Link to="/" className="text-sm text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mb-4 inline-block">&larr; Back to search</Link>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 sm:p-6 mb-6 animate-fade-in-up transition-colors">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-1">{job.title}</h1>
            <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400">{job.company_name}</p>
          </div>
          {job.job_type && (
            <Badge variant={jobTypeVariant[job.job_type?.toLowerCase()] || 'default'}>
              {job.job_type}
            </Badge>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm text-gray-400 dark:text-gray-500 mb-6">
          {job.candidate_required_location && (
            <span>&#128205; {job.candidate_required_location}</span>
          )}
          {job.salary && <span>&#128176; {job.salary}</span>}
          {job.publication_date && <span>&#128197; {formatDate(job.publication_date)}</span>}
          {job.category && <span>&#128194; {job.category}</span>}
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6">
          <a
            href={job.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors text-center"
          >
            Apply Now &rarr;
          </a>
          <Button
            variant={saved ? 'primary' : 'secondary'}
            onClick={() => toggleSave(job)}
          >
            {saved ? 'Saved' : 'Save'}
          </Button>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Job Description</h2>
          <div
            className="prose prose-sm prose-gray max-w-none dark:text-gray-200 [&_p]:mb-3 [&_ul]:mb-3 [&_li]:mb-1 [&_h1]:text-lg [&_h1]:font-semibold [&_h2]:text-lg [&_h2]:font-semibold [&_h3]:text-base [&_h3]:font-semibold [&_img]:hidden"
            dangerouslySetInnerHTML={{ __html: job.description || 'No description provided.' }}
          />
        </div>
      </div>

      {related.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 sm:p-6 transition-colors">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Related Jobs</h2>
          <div className="flex flex-col gap-3">
            {related.map((rj) => (
              <Link
                key={rj.id}
                to={`/jobs/${rj.id}`}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 p-3 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors border border-gray-100 dark:border-gray-700"
              >
                <div>
                  <p className="font-medium text-gray-800 dark:text-gray-100">{rj.title}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{rj.company_name}</p>
                </div>
                {rj.job_type && (
                  <Badge variant={jobTypeVariant[rj.job_type?.toLowerCase()] || 'default'}>
                    {rj.job_type}
                  </Badge>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
