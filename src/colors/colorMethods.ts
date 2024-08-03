import { type ColorKeys, Color } from './colorDefinition'

const RESET = '\x1b[0m'

function colorize(text: string, color: ColorKeys): string {
  const value = Color[color]
  return `${value}${text}${RESET}`
}

export function createColorMethod(color: ColorKeys): (text: string) => string {
  return (text: string) => colorize(text, color)
}
