export default function TestPage() {
  return (
    <main className="flex min-h-[calc(100svh-3.5rem)] items-center justify-center p-6">
      <section className="w-full max-w-md rounded-xl border bg-card p-6 text-card-foreground shadow-sm">
        <p className="text-sm font-medium text-muted-foreground">
          Protected route
        </p>
        <h1 className="mt-2 text-2xl font-semibold">Test</h1>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          You are signed in and can access this protected test page.
        </p>
      </section>
    </main>
  )
}
