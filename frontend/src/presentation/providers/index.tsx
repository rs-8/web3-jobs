import React from 'react'
import {CssBaseline, GeistProvider} from '@geist-ui/react'
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'
import {AppThemeProvider} from './theme-provider'
import {createGlobalStyle} from 'styled-components'

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
})

const GlobalStyle = createGlobalStyle`
  *, :after, :before, html {
    box-sizing: border-box;
  }
`

const RootProvider: React.FC = ({children}) => {
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
