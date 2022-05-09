import React from 'react'
import { CssBaseline, GeistProvider } from '@geist-ui/react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { AppThemeProvider } from './theme-provider'
import { createGlobalStyle } from 'styled-components'

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
})

const GlobalStyle = createGlobalStyle`
  *, :after, :before, html {
    box-sizing: border-box;
  }
  :root {
    --geist-space: 4px;
    --geist-space-2x: 8px;
    --geist-space-4x: 16px;
    --geist-space-8x: 32px;
    --geist-space-16x: 64px;
    --geist-space-24x: 96px;
    --geist-space-32x: 128px;
    --geist-space-48x: 192px;
    --geist-space-64x: 256px;
    --geist-space-small: 32px;
    --geist-space-medium: 40px;
    --geist-space-large: 48px;
    --geist-space-gap: 24px;
    --geist-space-gap-half: 12px;
    --geist-space-gap-quarter: var(--geist-space-2x);
    --geist-gap: var(--geist-space-gap);
    --geist-gap-half: var(--geist-space-gap-half);
    --geist-gap-quarter: var(--geist-space-gap-quarter);
    --geist-gap-double: var(--geist-space-large);
    --geist-space-negative: -4px;
    --geist-space-2x-negative: -8px;
    --geist-space-4x-negative: -16px;
    --geist-space-8x-negative: -32px;
    --geist-space-16x-negative: -64px;
    --geist-space-24x-negative: -96px;
    --geist-space-32x-negative: -128px;
    --geist-space-48x-negative: -192px;
    --geist-space-64x-negative: -256px;
    --geist-space-small-negative: -32px;
    --geist-space-medium-negative: -40px;
    --geist-space-large-negative: -48px;
    --geist-space-gap-negative: -24px;
    --geist-space-gap-half-negative: -12px;
    --geist-space-gap-quarter-negative: var(--geist-space-2x-negative);
    --geist-gap-negative: var(--geist-space-gap-negative);
    --geist-gap-half-negative: var(--geist-space-gap-half-negative);
    --geist-gap-quarter-negative: var(--geist-space-gap-quarter-negative);
    --geist-gap-double-negative: var(--geist-space-large-negative);
    --geist-page-margin: var(--geist-space-gap);
    --geist-page-width: 1000px;
    --geist-page-width-with-margin: 1048px;
    --geist-radius: 5px;
    --header-height: 64px;
    --header-border-bottom: inset 0 -1px 0 0 rgba(0,0,0,.1);
    --header-background: hsla(0,0%,100%,.8);
  }
`

const RootProvider: React.FC = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      <GeistProvider themeType={'light'}>
        <CssBaseline />
        <GlobalStyle />
        <AppThemeProvider>{children}</AppThemeProvider>
      </GeistProvider>
    </ApolloProvider>
  )
}

export default RootProvider
