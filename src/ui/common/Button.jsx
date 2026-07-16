export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const base = 'px-3 py-2 rounded-lg font-medium transition-colors'
  const variants = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600',
    secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
  }
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
