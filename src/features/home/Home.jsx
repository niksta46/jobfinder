import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useJobSearch } from '../../api/endpoints/useJobSearch'
import Input from '../../ui/common/Input'
import Select from '../../ui/common/Select'
import Button from '../../ui/common/Button'
import JobList from '../job-list/JobList'

const categories = [
  { value: '', label: 'All Categories' },
  { value: 'software-dev', label: 'Software Development' },
  { value: 'design', label: 'Design' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'sales', label: 'Sales' },
  { value: 'customer-support', label: 'Customer Support' },
  { value: 'data', label: 'Data / Analytics' },
  { value: 'devops', label: 'DevOps / SysAdmin' },
  { value: 'product', label: 'Product Management' },
  { value: 'hr', label: 'HR / Recruitment' },
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

function applyFilters(jobs, filters) {
  let filtered = jobs

  if (filters.jobType) {
    filtered = filtered.filter(
      (j) => j.job_type?.toLowerCase() === filters.jobType
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

  const searchParamsObj = query || category ? { query, category, page } : undefined
  const { data, isLoading, error } = useJobSearch(searchParamsObj)
  const rawJobs = data?.jobs || []
  const totalJobs = data?.total || 0
  const totalPages = Math.ceil(totalJobs / 10)

  const filters = { jobType, location, sort }
  const jobs = useMemo(() => applyFilters(rawJobs, filters), [rawJobs, filters])

  function handleSearch(e) {
    e.preventDefault()
    setPage(1)
    const params = new URLSearchParams()
    if (query) params.set('q', query)
    if (category) params.set('category', category)
    setSearchParams(params, { replace: true })
  }

  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Find your next job</h1>
        <p className="text-gray-500">Search thousands of remote jobs — free.</p>
      </div>

      <form onSubmit={handleSearch} className="flex gap-3 max-w-2xl mx-auto mb-6">
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
        <Button type="submit">Search</Button>
      </form>

      {(query || category) && (
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
            Page {page} of {totalPages}
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
