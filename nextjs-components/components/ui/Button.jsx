import { forwardRef } from 'react'

const buttonVariants = {
  default: 'bg-emerald-600 text-white shadow hover:bg-emerald-700',
  destructive: 'bg-red-500 text-white shadow-sm hover:bg-red-600',
  outline: 'border border-gray-300 bg-transparent shadow-sm hover:bg-gray-100',
  secondary: 'bg-gray-100 text-gray-900 shadow-sm hover:bg-gray-200',
  ghost: 'hover:bg-gray-100',
  link: 'text-emerald-600 underline-offset-4 hover:underline',
}

const sizeVariants = {
  default: 'h-9 px-4 py-2',
  sm: 'h-8 rounded-md px-3 text-xs',
  lg: 'h-10 rounded-md px-8',
  icon: 'h-9 w-9',
}

const Button = forwardRef((
  { className = '', variant = 'default', size = 'default', children, ...props },
  ref
) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
  const variantStyles = buttonVariants[variant] || buttonVariants.default
  const sizeStyles = sizeVariants[size] || sizeVariants.default

  return (
    <button
      ref={ref}
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export { Button }
