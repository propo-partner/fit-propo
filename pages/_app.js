import { DataProvider } from '../components/DataProvider'
import '../styles/globals.css'
import TagManager from 'react-gtm-module'
import { useEffect } from 'react'

const tagManagerArgs = {
  gtmId: 'GTM-PCGKC6C',
}

export default function App({ Component, pageProps }) {

  // Google Tag Manager
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, [])

  return (
    <DataProvider>
      <Component {...pageProps}>
      </Component>
    </DataProvider>
  )
}
