interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`max-w-content mx-auto px-6 ${className}`}>
      {children}
    </div>
  )
}
