export default function JobCardSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 animate-pulse transition-colors">
      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
          </div>
          <div className="flex flex-col items-end gap-2 shrink-0">
            <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded-full w-20" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-6" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20" />
        </div>
      </div>
    </div>
  )
}
