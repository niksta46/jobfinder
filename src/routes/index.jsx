import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Home from '../features/home/Home'
import JobDetails from '../features/job-details/JobDetails'
import SavedJobs from '../features/saved-jobs/SavedJobs'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'jobs/:id', element: <JobDetails /> },
      { path: 'saved', element: <SavedJobs /> },
    ],
  },
])
