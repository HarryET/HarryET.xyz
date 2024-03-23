import type { GetStaticProps, NextPage } from 'next'
import { NextSeo } from 'next-seo';
import { Image, ImagesGrid } from '../components/imageGrid';
import { getImagesForDir } from '../lib/props';

export const getStaticProps: GetStaticProps = async () => {
    const images = await getImagesForDir(`./public/images`)

    return {
        props: {
            images
        }
    }
}

const Home: NextPage<{images: Image[]}> = ({ images }) => {
  return (
    <>
      <NextSeo title='Harry Bairstow' />
      <div className='w-full h-full px-6 py-3 flex flex-col justify-between'>
        <main className='flex flex-col gap-6'>
            <header className='w-full flex flex-row justify-between items-center'>
                <div id='me'>
                <h1 className='text-3xl'>Harry Bairstow.</h1>
                <div className='flex flex-col gap-1 sm:flex-row sm:gap-2'>
                    <p>17.</p>
                    <p>Elixir & Rust enthusiast.</p>
                    <p>Conference Speaker.</p>
                    <p>Venture Research.</p>
                </div>
                </div>
                <div id='menu'>
                    { /* eslint-disable-next-line @next/next/no-html-link-for-pages */ }
                    <a className='text-brand hover:cursor-pointer hover:underline' href='/'>Home</a>
                </div>
            </header>
            <ImagesGrid images={images} />
        </main>
        <footer className='my-5 w-full flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-between'>
          <div className='w-full md:w-min flex flex-row space-x-6 text-gray-500'>
            <a href="https://github.com/harryet" className='hover:underline hover:cursor-pointer'>GitHub</a>
            <a href="https://twitter.com/theharryet" className='hover:underline hover:cursor-pointer'>Twitter</a>
            <a href="mailto:me@harryet.xyz" className='hover:underline hover:cursor-pointer'>Email</a>
          </div>
          <p>&copy; 2024 Harry Bairstow</p>
        </footer>
      </div>
    </>
  )
}

export default Home
