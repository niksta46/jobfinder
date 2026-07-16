export default function Select({ className = '', children, ...props }) {
  return (
    <select
      className={`w-full px-3 py-2 border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-primary-400 ${className}`}
      {...props}
    >
      {children}
    </select>
  )
}
