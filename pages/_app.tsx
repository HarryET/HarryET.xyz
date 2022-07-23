import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Harry Bairstow</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "6af68ce72bd74260a556425735a80a3c"}'></script>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
