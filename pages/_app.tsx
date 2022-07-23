import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import { Intro } from '../components/intro'
import { Footer } from '../components/footer'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Harry Bairstow</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "6af68ce72bd74260a556425735a80a3c"}'></Script>
      <div className="px-8 pt-6 sm:px-16 sm:pt-16 w-full h-full flex flex-col justify-between text-gray-900 dark:text-gray-50">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default App
