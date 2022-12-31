import '../styles/globals.css'
import '../styles/highlight-js.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import { Footer } from '../components/footer'
import { Navbar } from '../components/navbar'
import PlausibleProvider from 'next-plausible'

function App({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain='harryet.xyz' enabled={!process.env.DEV}>
      <Head>
        <title>Harry Bairstow</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <div className="px-8 sm:px-16 py-6 sm:py-16 w-full h-full flex flex-col justify-between text-gray-900 dark:text-gray-50">
        <div className="space-y-8">
          <div className="w-full">
            <Navbar />
          </div>
          <div className='w-full flex flex-col space-y-6'>
            <Component {...pageProps} />
          </div>
        </div>
        <div className="w-full pt-8 pb-8">
          <Footer />
        </div>
      </div>

      <Script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "6af68ce72bd74260a556425735a80a3c"}'></Script>
    </PlausibleProvider>
  )
}

export default App
