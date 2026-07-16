export default function ErrorMessage({ message = 'Something went wrong.', className = '' }) {
  return (
    <div className={`bg-red-50 border border-red-200 text-red-600 rounded-lg p-4 ${className}`}>
      {message}
    </div>
  )
}
