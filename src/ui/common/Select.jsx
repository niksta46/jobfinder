export default function Select({ className = '', children, ...props }) {
  return (
    <select
      className={`w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-primary-400 dark:focus:border-primary-500 transition-colors ${className}`}
      {...props}
    >
      {children}
    </select>
  )
}
