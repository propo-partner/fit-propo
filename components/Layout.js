import Head from 'next/head'
import Link from 'next/link'
import Header from './header'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, shrink-to-fit=no"/>
        <link rel="icon" href="/favicon.ico" />
        <title>FIT.Propo.fm</title>
      </Head>
      <Header />
      <main className='main'>
        {children}
      </main>
      <Footer />
    </>
  )
}
