export default function EmptyState({ title = 'No results found', message = '', className = '' }) {
  return (
    <div className={`text-center py-12 ${className}`}>
      <p className="text-lg font-medium text-gray-600 dark:text-gray-300">{title}</p>
      {message && <p className="text-gray-400 dark:text-gray-500 mt-1">{message}</p>}
    </div>
  )
}
