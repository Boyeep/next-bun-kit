# Next Bun Kit

A focused frontend starter built with Next.js 16 App Router, React 19, Bun, Tailwind
CSS 4, shadcn/ui conventions, TanStack Query, Axios, and Playwright.

The template provides repeatable application plumbing without choosing your authentication
scheme, backend response format, or product domain for you.

## Requirements

- Bun `>=1.3` (the repository pins Bun `1.3.13` through `packageManager`)
- Node.js `>=20.9`, required by Next.js 16 and used by the production container

## Quick start

```bash
bun install
cp .env.example .env.local
bun run dev
```

On PowerShell, copy the environment file with:

```powershell
Copy-Item .env.example .env.local
```

Open `http://localhost:3000`.

## Included decisions

- **Next.js App Router:** routing and layouts live in `app/`; feature code stays outside the
  routing layer.
- **TanStack Query:** one browser `QueryClient` is reused, while server rendering creates an
  isolated client per request.
- **Axios:** the shared client only applies the configured base URL and an `Accept` header.
  Authentication and error mapping belong to the consuming application.
- **Tailwind CSS and shadcn/ui:** semantic color tokens, reusable primitives, and Lucide icons
  provide a neutral UI baseline.
- **Theme support:** `next-themes` starts in light mode by default and applies the existing light
  or dark token set when the user switches themes.
- **Release checks:** ESLint, Prettier, TypeScript, a production build, Playwright, and GitHub
  Actions are configured.
- **Container deployment:** Next.js standalone output runs as a non-root user in the final image.

Dependencies are intentionally limited to packages used by the starter or its build tooling.
Add forms, validation, state management, animation, notifications, or other product features when
the application needs them.

## Scripts

| Command                | Purpose                                                     |
| ---------------------- | ----------------------------------------------------------- |
| `bun run dev`          | Start the development server                                |
| `bun run build`        | Create a production build                                   |
| `bun run start`        | Run the production build                                    |
| `bun run lint`         | Check ESLint without changing files                         |
| `bun run lint:fix`     | Apply safe ESLint fixes                                     |
| `bun run format`       | Format files with Prettier                                  |
| `bun run format:check` | Check formatting without changing files                     |
| `bun run typecheck`    | Run TypeScript without emitting files                       |
| `bun run check`        | Run lint, formatting, type-checking, and a production build |
| `bun run test:e2e`     | Build, start, and smoke-test the app with Chromium          |
| `bun run test:e2e:ui`  | Open Playwright's interactive test runner                   |

Install the Playwright Chromium binary once before running end-to-end tests locally:

```bash
bunx playwright install chromium
bun run test:e2e
```

GitHub Actions runs `bun run check` and the Playwright smoke test for pushes and pull requests.

## Project structure

```text
.
├── .github/workflows/ci.yml
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── providers.tsx
├── components/
│   ├── ui/
│   └── theme-toggle.tsx
├── features/
│   └── home/
├── lib/
│   ├── api.ts
│   └── utils.ts
├── public/
├── scripts/
├── tests/e2e/
├── types/
├── Dockerfile
├── playwright.config.ts
└── package.json
```

### Ownership rules

- `app/` owns routes, layouts, metadata, and route-level composition.
- `features/*` owns domain-specific components, hooks, requests, and types.
- `components/ui/*` stores shared design-system primitives.
- `components/*` stores shared composed UI such as the theme control.
- `lib/` stores framework-agnostic helpers and shared infrastructure clients.
- `types/` stores types shared by more than one feature.

## Environment and API behavior

Copy `.env.example` to `.env.local` and set the optional public API URL:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

`lib/api.ts` passes this value to Axios unchanged. It does not append `/api`, select between custom
development and production variables, attach credentials, or rewrite error responses. If the value
is empty, relative requests use the current application origin.

Variables prefixed with `NEXT_PUBLIC_` are visible in the browser and are frozen into the client
bundle during `next build`. Never place secrets in this variable. Authentication should be added by
the application based on its security model—for example, through a same-origin backend-for-frontend
or an explicitly configured client interceptor.

Use standard Next.js environment files such as `.env.local`, `.env.development`, and
`.env.production` to provide environment-specific values.

## Customization checklist

1. Replace the example home feature in `features/home`.
2. Update the metadata and language in `app/layout.tsx`.
3. Adjust semantic light and dark tokens in `app/globals.css`.
4. Set `NEXT_PUBLIC_API_URL` or remove `lib/api.ts` if the application does not need Axios.
5. Add product-specific dependencies only when their first feature is implemented.
6. Keep `bun run check` and `bun run test:e2e` passing before deployment.

## Docker

Build the image without an external API:

```bash
docker build -t next-bun-kit .
```

For a browser-facing API URL, provide it at build time because `NEXT_PUBLIC_` values are compiled
into the client bundle:

```bash
docker build \
  --build-arg NEXT_PUBLIC_API_URL=https://api.example.com \
  -t next-bun-kit .
```

Run the container:

```bash
docker run --rm -p 3000:3000 next-bun-kit
```

The Docker context excludes local `.env*` files while retaining `.env.example`. The final image
contains only the standalone server, static assets, and the public directory, and runs as a non-root
user.

## Deployment

- **Managed Next.js hosting:** configure `NEXT_PUBLIC_API_URL` in the provider's build environment,
  then deploy normally.
- **Node.js hosting:** run `bun run build` followed by `bun run start`.
- **Containers:** use the included multi-stage Dockerfile and provide public variables during the
  image build.

For a single image that must move between environments with different runtime configuration, expose
runtime values through a server endpoint instead of a `NEXT_PUBLIC_` build-time variable.
