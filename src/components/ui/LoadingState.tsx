export default function LoadingState() {
  return (
    <div className="flex items-center justify-center py-20" aria-busy="true" aria-label="Loading artifacts">
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-da-accent animate-pulse"
              style={{ animationDelay: `${i * 150}ms` }}
            />
          ))}
        </div>
        <span className="font-mono text-[10px] text-da-muted tracking-widest uppercase">
          Loading Archive...
        </span>
      </div>
    </div>
  );
}
