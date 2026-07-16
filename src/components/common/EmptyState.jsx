export default function EmptyState({ title = 'No results found', message = '', className = '' }) {
  return (
    <div className={`text-center py-12 ${className}`}>
      <p className="text-lg font-medium text-gray-600">{title}</p>
      {message && <p className="text-gray-400 mt-1">{message}</p>}
    </div>
  )
}
