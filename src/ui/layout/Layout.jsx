import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="text-xl font-bold text-primary-500">JobFinder</a>
          <nav className="flex gap-6">
            <a href="/" className="text-gray-600 hover:text-primary-500">Search</a>
            <a href="/saved" className="text-gray-600 hover:text-primary-500">Saved</a>
          </nav>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-6">
        <Outlet />
      </main>
    </div>
  )
}
