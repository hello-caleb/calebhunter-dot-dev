interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
  onClick?: () => void
}

export default function Button({ children, variant = 'primary', className = '', onClick }: ButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent'
  const variants = {
    primary: 'bg-accent text-white hover:bg-accent-hover',
    secondary: 'border border-border bg-surface text-text-primary hover:border-border-hover',
    ghost: 'text-text-secondary hover:text-text-primary',
  }
  return (
    <button className={`${base} ${variants[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}
