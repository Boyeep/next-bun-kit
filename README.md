# Next Bun Kit

[![npm version](https://img.shields.io/npm/v/%40boyeep%2Fnext-bun-kit)](https://www.npmjs.com/package/@boyeep/next-bun-kit) [![npm downloads](https://img.shields.io/npm/dm/%40boyeep%2Fnext-bun-kit)](https://www.npmjs.com/package/@boyeep/next-bun-kit) [![license](https://img.shields.io/npm/l/%40boyeep%2Fnext-bun-kit)](https://www.npmjs.com/package/@boyeep/next-bun-kit)

Create a project directly from npm:

```bash
npx @boyeep/next-bun-kit my-next-app
```


A small Next.js frontend starter powered by Bun.

## Included

- Next.js 16 App Router and React 19
- TypeScript and Tailwind CSS 4
- light and dark themes
- reusable button primitive and Lucide icons
- ESLint, Prettier, type-checking, and production build checks
- standalone, non-root Docker image
- minimal GitHub Actions CI

## Start

```bash
bun install
bun run dev
```

Open `http://localhost:3000`.

## Commands

```bash
bun run lint
bun run format:check
bun run typecheck
bun run build
bun run check
```

## Environment

Copy `.env.example` to `.env.local` when the app needs public configuration.
Only values prefixed with `NEXT_PUBLIC_` are exposed to the browser. Do not put secrets there.

## Docker

```bash
docker build -t next-bun-kit .
docker run --rm -p 3000:3000 next-bun-kit
```

The image uses Next.js standalone output and runs as a non-root user.
