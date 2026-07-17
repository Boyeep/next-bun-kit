export default function Loading() {
  return (
    <main className="grid min-h-dvh place-items-center bg-background px-6" aria-busy="true">
      <div role="status" className="flex items-center gap-3 text-sm text-muted-foreground">
        <span
          aria-hidden="true"
          className="size-6 rounded-full border-2 border-muted border-t-primary motion-safe:animate-spin"
        />
        <span>Loading page…</span>
      </div>
    </main>
  )
}
