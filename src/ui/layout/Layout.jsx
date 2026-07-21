import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-sm fixed top-0 left-0 right-0 z-20">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between relative">
          <a href="/" className="text-xl font-bold text-primary-500">JobFinder</a>
          <p className="text-sm text-gray-500 absolute left-1/2 -translate-x-1/2 hidden sm:block">Find your next job</p>
          <nav className="flex gap-6">
            <a href="/saved" className="text-gray-600 hover:text-primary-500">Saved</a>
          </nav>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-6 pt-16">
        <Outlet />
      </main>
    </div>
  )
}
