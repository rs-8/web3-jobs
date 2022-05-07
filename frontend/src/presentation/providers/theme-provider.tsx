import { GeistUIThemes, useTheme } from '@geist-ui/react'
import { ThemeProvider } from 'styled-components'

export const AppThemeProvider: React.FC = ({ children }) => {
  const theme: GeistUIThemes = useTheme()

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
