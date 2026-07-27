export default function Loading({ className = '' }) {
  return (
    <div className={`flex items-center justify-center py-12 ${className}`}>
      <div className="w-8 h-8 border-4 border-primary-200 dark:border-primary-800 border-t-primary-500 rounded-full animate-spin" />
    </div>
  )
}
