import { createColorMethod } from '../colors/colorMethods'
import { type ColorKeys, Color } from '../colors/colorDefinition'

export const method = Object.keys(Color).reduce(
  (methods, color) => {
    methods[color] = createColorMethod(color as ColorKeys)
    return methods
  },
  {} as { [key: string]: (text: string) => string }
)
