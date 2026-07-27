export default function Card({ children, className = '', ...props }) {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-colors ${className}`} {...props}>
      {children}
    </div>
  )
}
