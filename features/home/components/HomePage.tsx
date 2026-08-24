import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Box, Code2, Zap } from 'lucide-react'

import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'

const foundations = [
  { label: 'App Router', icon: Code2 },
  { label: 'Bun runtime', icon: Zap },
  { label: 'Docker ready', icon: Box },
]

export function HomePage() {
  return (
    <main className="relative flex min-h-dvh overflow-hidden bg-background px-5 py-5 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute -top-48 -right-40 size-[34rem] rounded-full bg-primary/12 blur-3xl" />
      <div className="mx-auto flex w-full max-w-7xl flex-col">
        <header className="relative z-10 flex min-h-12 items-center justify-between">
          <Link
            href="/"
            className="flex min-h-11 items-center gap-3 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            <Image src="/logo.svg" alt="" width={36} height={36} priority />
            <span className="font-semibold tracking-tight">Next Bun Kit</span>
          </Link>
          <ThemeToggle />
        </header>

        <section className="relative z-10 grid min-h-0 flex-1 items-center gap-12 py-12 lg:grid-cols-[1fr_0.72fr]">
          <div className="max-w-4xl">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
              Next.js 16 · React 19 · Bun
            </p>
            <h1 className="mt-6 text-[clamp(3.6rem,9vw,8.5rem)] leading-[0.84] font-semibold tracking-[-0.075em]">
              Start clean.
              <span className="block text-muted-foreground">Build your way.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              A small frontend foundation with typed routes, theme support, strict checks, and a
              production container. Nothing more until your product needs it.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <a href="#quick-start">
                  Quick start <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
              <span className="font-mono text-xs text-muted-foreground">bun install · bun dev</span>
            </div>
          </div>

          <aside
            id="quick-start"
            className="rounded-[2rem] bg-foreground p-6 text-background shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <p className="font-medium">Ready from day one</p>
              <span className="size-2.5 rounded-full bg-primary" />
            </div>
            <div className="mt-10 space-y-3">
              {foundations.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-2xl bg-background/8 px-4 py-3"
                >
                  <Icon aria-hidden="true" className="size-4 text-primary" />
                  <span className="text-sm">{label}</span>
                </div>
              ))}
            </div>
            <pre className="mt-8 overflow-x-auto rounded-2xl bg-black/20 p-4 font-mono text-xs leading-6 text-background/70">
              <code>{`bun install\nbun run dev\nbun run check`}</code>
            </pre>
          </aside>
        </section>
      </div>
    </main>
  )
}
