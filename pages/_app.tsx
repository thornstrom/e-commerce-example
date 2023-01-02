import 'bootstrap/dist/css/bootstrap.css'
//import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ShoopingCartProvider } from '../context/ShoppingCartContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShoopingCartProvider>
      <Component {...pageProps} />
    </ShoopingCartProvider>
  )
}
