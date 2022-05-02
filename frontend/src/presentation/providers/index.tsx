import React from 'react'
import {CssBaseline, GeistProvider} from '@geist-ui/react'
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'
import {AppThemeProvider} from './theme-provider'

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
})

const RootProvider: React.FC = ({children}) => {
  return (
    <ApolloProvider client={client}>
      <GeistProvider themeType={'light'}>
        <CssBaseline />
        <AppThemeProvider>{children}</AppThemeProvider>
      </GeistProvider>
    </ApolloProvider>
  )
}

export default RootProvider
