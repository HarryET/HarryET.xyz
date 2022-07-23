import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import { Footer } from '../components/footer'
import { Navbar } from '../components/navbar'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Harry Bairstow</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <div className="px-8 sm:px-16 w-full h-full flex flex-col justify-between text-gray-900 dark:text-gray-50">
        <div className="space-y-8">
          <div className="w-full mt-6 sm:mt-16">
            <Navbar />
          </div>
          <div className='w-full flex flex-col space-y-6'>
            <Component {...pageProps} />
          </div>
        </div>
        <div className="w-full mb-6 sm:mb-16 mt-8">
          <Footer />
        </div>
      </div>

      <Script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "6af68ce72bd74260a556425735a80a3c"}'></Script>

      {/* TODO fix warning */}
      <link id="syntax-theme" rel="stylesheet" href="//unpkg.com/@highlightjs/cdn-assets@11.0.1/styles/atom-one-dark.min.css" />
      <script src="//unpkg.com/@highlightjs/cdn-assets@11.0.1/highlight.min.js"></script>
      <script src="//unpkg.com/@highlightjs/cdn-assets@11.0.1/languages/javascript.min.js"></script>
      <script src="//unpkg.com/@highlightjs/cdn-assets@11.0.1/languages/elixir.min.js"></script>
      <script src="//unpkg.com/@highlightjs/cdn-assets@11.0.1/languages/erlang.min.js"></script>
      <script src="/javascript/highlightjs.js"></script>
    </>
  )
}

export default App
