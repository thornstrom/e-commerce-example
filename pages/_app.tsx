import type { AppProps } from 'next/app'
import { ShoopingCartProvider } from '../context/ShoppingCartContext'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShoopingCartProvider>
      <Component {...pageProps} />
    </ShoopingCartProvider>
  )
}
