import { DataProvider } from '../components/DataProvider'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <DataProvider>
      <Component {...pageProps}>
      </Component>
    </DataProvider>
  )
}
