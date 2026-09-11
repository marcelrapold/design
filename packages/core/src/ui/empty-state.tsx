import type { LucideIcon } from 'lucide-react'

interface EmptyStateProps {
  icon?: LucideIcon
  title: string
  description?: string
  actions?: React.ReactNode
  className?: string
}

export function EmptyState({
  icon: Icon,
  title,
  description,
  actions,
  className = '',
}: EmptyStateProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-border/60 bg-card/40 px-6 py-12 text-center ${className}`}
    >
      {Icon && (
        <div className="rounded-full bg-muted p-3">
          <Icon className="h-5 w-5 text-muted-foreground" aria-hidden />
        </div>
      )}
      <div className="space-y-1">
        <h3 className="text-sm font-semibold">{title}</h3>
        {description && (
          <p className="max-w-sm text-xs leading-relaxed text-muted-foreground">{description}</p>
        )}
      </div>
      {actions && <div className="mt-2">{actions}</div>}
    </div>
  )
}

