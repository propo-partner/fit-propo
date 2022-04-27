import { DataProvider } from '../components/DataProvider'
import '../styles/globals.css'
import TagManager from 'react-gtm-module'
import { useEffect } from 'react'
import { AudioPlayer } from '../components/AudioPlayer'
import LayoutMain from '../components/LayoutMain'
import LayoutPlayer from '../components/LayoutPlayer'

const tagManagerArgs = {
  gtmId: 'GTM-PCGKC6C',
}

export default function App({ Component, pageProps }) {

  // Google Tag Manager
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, [])

  switch (pageProps.layout) {
    case 'withPlayer': {
      return (
        <DataProvider>
          <LayoutPlayer>
            <Component {...pageProps}>
            </Component>
          </LayoutPlayer>
        </DataProvider>
      )
    } default: {
      return (
        <DataProvider>
          <LayoutMain>
            <Component {...pageProps}>
            </Component>
          </LayoutMain>
        </DataProvider>
      )
    }
  }
}
