import { cpSync, existsSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'

const rootDirectory = process.cwd()
const standaloneDirectory = join(rootDirectory, '.next', 'standalone')

if (!existsSync(standaloneDirectory)) {
  throw new Error('Standalone output is missing. Run `bun run build` before `bun run start`.')
}

const assets = [
  ['public', 'public'],
  [join('.next', 'static'), join('.next', 'static')],
]

for (const [sourcePath, destinationPath] of assets) {
  const source = join(rootDirectory, sourcePath)

  if (!existsSync(source)) {
    continue
  }

  const destination = join(standaloneDirectory, destinationPath)
  mkdirSync(dirname(destination), { recursive: true })
  cpSync(source, destination, { recursive: true, force: true })
}
