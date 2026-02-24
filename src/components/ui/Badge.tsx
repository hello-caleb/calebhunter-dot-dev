interface BadgeProps {
  children: React.ReactNode
  className?: string
}

export default function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-accent-light px-2.5 py-0.5 text-xs font-medium text-accent ${className}`}
    >
      {children}
    </span>
  )
}
