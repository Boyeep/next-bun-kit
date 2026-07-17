import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Blocks, Braces, Container } from 'lucide-react'

import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

const foundations = [
  {
    title: 'App Router first',
    description: 'A small routing layer with feature-owned UI and server components by default.',
    icon: Blocks,
  },
  {
    title: 'Typed data layer',
    description:
      'TanStack Query and a deliberately neutral Axios client, ready for your API contract.',
    icon: Braces,
  },
  {
    title: 'Production output',
    description:
      'Strict checks and a standalone, non-root Docker runtime are included from day one.',
    icon: Container,
  },
]

const stack = ['Next.js 16', 'React 19', 'Bun', 'Tailwind CSS 4', 'shadcn/ui', 'Playwright']

export function HomePage() {
  return (
    <div className="min-h-dvh bg-background">
      <a
        href="#main-content"
        className="sr-only fixed top-3 left-3 z-50 rounded-md bg-primary px-4 py-3 font-medium text-primary-foreground focus:not-sr-only"
      >
        Skip to main content
      </a>

      <header className="border-b border-border/80 bg-background/95 backdrop-blur">
        <div className="mx-auto flex min-h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
          <Link
            href="/"
            className="flex min-h-11 items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            <Image
              src="/logo.svg"
              alt=""
              width={40}
              height={40}
              priority
              className="size-10 shrink-0 object-contain"
            />
            <span className="text-sm font-semibold">Next Bun Kit</span>
          </Link>

          <nav aria-label="Primary navigation" className="flex items-center gap-2">
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="border-b border-border/80">
          <div className="mx-auto grid min-h-[calc(100dvh-4rem)] w-full max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:px-10 lg:py-28">
            <div className="max-w-3xl">
              <h1 className="mt-6 max-w-3xl font-heading text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                Next-Bun Kit
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Start with modern routing, typed data fetching, accessible UI primitives, dark mode,
                release checks, and a deployable container without inheriting product-specific
                rules.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="#getting-started">
                    Get started
                    <ArrowRight aria-hidden="true" data-icon="inline-end" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="#foundation">Explore the foundation</Link>
                </Button>
              </div>
            </div>

            <aside
              className="rounded-2xl border border-border bg-card p-5 shadow-sm"
              aria-label="Included technology"
            >
              <p className="text-sm font-medium text-foreground">Included and configured</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {stack.map((item) => (
                  <li
                    key={item}
                    className="rounded-md bg-muted px-3 py-2 text-sm text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section
          id="foundation"
          aria-labelledby="foundation-heading"
          className="scroll-mt-8 border-b border-border/80"
        >
          <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-primary">Foundation</p>
              <h2
                id="foundation-heading"
                className="mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Useful defaults, clear ownership.
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                The template handles repeatable setup while leaving authentication, domain models,
                and backend behavior to the application that actually needs them.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {foundations.map(({ title, description, icon: Icon }) => (
                <Card key={title} className="h-full">
                  <CardHeader>
                    <span className="grid size-11 place-items-center rounded-lg bg-primary/10 text-primary">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <h3 className="mt-3 text-base font-semibold">{title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-6 text-muted-foreground">{description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section
          id="getting-started"
          aria-labelledby="getting-started-heading"
          className="scroll-mt-8"
        >
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-24">
            <div className="max-w-xl">
              <p className="text-sm font-medium text-primary">Quick start</p>
              <h2
                id="getting-started-heading"
                className="mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                From clone to local app in three commands.
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Configure the optional API URL, replace the example feature, and keep the checks
                green as the product grows.
              </p>
            </div>

            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
              <div className="flex items-center gap-2 border-b border-border px-4 py-3 text-xs font-medium text-muted-foreground">
                <span aria-hidden="true" className="size-2 rounded-full bg-destructive" />
                <span
                  aria-hidden="true"
                  className="size-2 rounded-full bg-secondary-foreground/60"
                />
                <span aria-hidden="true" className="size-2 rounded-full bg-primary" />
                <span className="ml-2">terminal</span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-sm leading-7 text-foreground">
                <code>{`bun install\nbun run dev\nbun run check`}</code>
              </pre>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/80">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <span>Next Bun Kit</span>
          <a
            href="https://github.com/Boyeep/next-bun-kit"
            className="inline-flex min-h-11 items-center self-start rounded-md font-medium text-foreground underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:self-auto"
          >
            Github Repo
          </a>
        </div>
      </footer>
    </div>
  )
}
