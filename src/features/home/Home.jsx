import { useMemo, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useJobSearch } from '../../api/endpoints/useJobSearch'
import Input from '../../ui/common/Input'
import Select from '../../ui/common/Select'
import Button from '../../ui/common/Button'
import JobList from '../job-list/JobList'

const categories = [
  { value: '', label: 'All Categories' },
  { value: 'Software Development', label: 'Software Development' },
  { value: 'Marketing', label: 'Marketing' },
  { value: 'Sales', label: 'Sales' },
  { value: 'Customer Service', label: 'Customer Service' },
  { value: 'Data and Analytics', label: 'Data / Analytics' },
  { value: 'Devops', label: 'DevOps / SysAdmin' },
  { value: 'Product Management', label: 'Product Management' },
  { value: 'Quality Assurance', label: 'Quality Assurance' },
  { value: 'Medical', label: 'Medical' },
  { value: 'Artificial Intelligence', label: 'AI / ML' },
  { value: 'Writing', label: 'Writing' },
]

const jobTypes = [
  { value: '', label: 'All Types' },
  { value: 'full-time', label: 'Full-time' },
  { value: 'part-time', label: 'Part-time' },
  { value: 'contract', label: 'Contract' },
  { value: 'internship', label: 'Internship' },
]

const sortOptions = [
  { value: 'date', label: 'Most Recent' },
  { value: 'relevance', label: 'Relevance' },
  { value: 'salary', label: 'Salary (high-low)' },
]

function parseSalary(salaryStr) {
  if (!salaryStr) return 0
  const numStr = salaryStr.replace(/[^0-9.]/g, '')
  return Number(numStr) || 0
}

const PAGE_SIZE = 10

function applyFilters(jobs, filters) {
  let filtered = jobs

  if (filters.query) {
    const q = filters.query.toLowerCase()
    filtered = filtered.filter(
      (j) =>
        j.title?.toLowerCase().includes(q) ||
        j.company_name?.toLowerCase().includes(q) ||
        j.description?.toLowerCase().includes(q)
    )
  }

  if (filters.category) {
    filtered = filtered.filter(
      (j) => j.category?.toLowerCase() === filters.category.toLowerCase()
    )
  }

  if (filters.jobType) {
    filtered = filtered.filter(
      (j) => j.job_type?.toLowerCase().replace(/_/g, '-') === filters.jobType
    )
  }

  if (filters.location) {
    const loc = filters.location.toLowerCase()
    filtered = filtered.filter(
      (j) => j.candidate_required_location?.toLowerCase().includes(loc)
    )
  }

  if (filters.sort === 'date') {
    filtered = [...filtered].sort(
      (a, b) => new Date(b.publication_date) - new Date(a.publication_date)
    )
  } else if (filters.sort === 'salary') {
    filtered = [...filtered].sort(
      (a, b) => parseSalary(b.salary) - parseSalary(a.salary)
    )
  }

  return filtered
}

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialQuery = searchParams.get('q') || ''
  const initialCategory = searchParams.get('category') || ''
  const [query, setQuery] = useState(initialQuery)
  const [category, setCategory] = useState(initialCategory)
  const [page, setPage] = useState(1)
  const [jobType, setJobType] = useState('')
  const [location, setLocation] = useState('')
  const [sort, setSort] = useState('date')

  const { data, isLoading, error } = useJobSearch()
  const allJobs = data?.jobs || []

  const filters = { query, category, jobType, location, sort }
  const filtered = useMemo(() => applyFilters(allJobs, filters), [allJobs, filters])
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE)
  const jobs = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  useEffect(() => {
    setPage(1)
    const params = new URLSearchParams()
    if (query) params.set('q', query)
    if (category) params.set('category', category)
    setSearchParams(params, { replace: true })
  }, [query, category, setSearchParams])

  return (
    <div>
      <div className="sticky top-0 z-10 bg-gray-50 pb-3 mb-4">
        <div className="flex gap-3 max-w-2xl mx-auto">
          <div className="flex-1">
            <Input
              placeholder="Search jobs..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="w-48">
            <Select value={category} onChange={(e) => setCategory(e.target.value)}>
              {categories.map((c) => (
                <option key={c.value} value={c.value}>{c.label}</option>
              ))}
            </Select>
          </div>
        </div>
      </div>

      {allJobs.length > 0 && (
        <p className="text-sm text-gray-500 mb-2">{filtered.length} job{filtered.length !== 1 ? 's' : ''} found</p>
      )}

      {allJobs.length > 0 && (
        <div className="flex gap-3 mb-6 flex-wrap">
          <div className="w-40">
            <Select value={jobType} onChange={(e) => setJobType(e.target.value)}>
              {jobTypes.map((t) => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </Select>
          </div>
          <div className="w-44">
            <Input
              placeholder="Filter by location..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="w-44">
            <Select value={sort} onChange={(e) => setSort(e.target.value)}>
              {sortOptions.map((s) => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </Select>
          </div>
        </div>
      )}

      <JobList jobs={jobs} isLoading={isLoading} error={error} />

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-8">
          <Button
            variant="secondary"
            disabled={page <= 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
          >
            Previous
          </Button>
          <span className="text-sm text-gray-500">
            Page {page} of {totalPages} &middot; {(page - 1) * PAGE_SIZE + 1}&ndash;{Math.min(page * PAGE_SIZE, filtered.length)} of {filtered.length} displayed
          </span>
          <Button
            variant="secondary"
            disabled={page >= totalPages}
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  )
}
