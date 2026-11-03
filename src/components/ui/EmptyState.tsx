interface EmptyStateProps {
  title: string;
  description: string;
  action?: React.ReactNode;
}

export default function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center border border-da-border/50 rounded-sm bg-da-surface/30">
      <div className="font-mono text-[10px] text-da-muted tracking-widest uppercase mb-4">
        — ARCHIVE EMPTY —
      </div>
      <h3 className="text-da-text text-lg font-medium mb-2">{title}</h3>
      <p className="text-da-muted text-sm max-w-sm leading-relaxed mb-6">{description}</p>
      {action}
    </div>
  );
}
