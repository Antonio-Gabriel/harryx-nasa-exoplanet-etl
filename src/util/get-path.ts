import path from 'path'

export function getPath(file: string) {
  return path.resolve(path.dirname(__dirname), file)
}
