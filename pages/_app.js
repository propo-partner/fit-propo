import { DataProvider } from '../components/DataProvider'
import '../styles/globals.css'
import TagManager from 'react-gtm-module'
import { useEffect } from 'react'
import { AudioPlayer } from '../components/AudioPlayer'
import Layout from '../components/Layout'

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
      <Layout>
        <Component {...pageProps}>
        </Component>
      </Layout>
    </DataProvider>
  )
}
