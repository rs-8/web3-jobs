import {AppProps} from 'next/app'
import RootProvider from 'src/presentation/providers'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <RootProvider>
      <Component {...pageProps} />
    </RootProvider>
  )
}
export default MyApp
