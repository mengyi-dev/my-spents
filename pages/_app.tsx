import '../styles/globals.css'
import '../public/assets/icons-dist/icons.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from './store/store'

function MyApp({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
}

export default MyApp
