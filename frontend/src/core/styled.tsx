import { GeistUIThemes } from '@geist-ui/react'
import baseStyled, {
  ThemedCssFunction,
  ThemedStyledInterface,
  css as baseCSS,
} from 'styled-components'

export const styled = baseStyled as ThemedStyledInterface<GeistUIThemes>
export const css = baseCSS as ThemedCssFunction<GeistUIThemes>
