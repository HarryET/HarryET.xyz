import type { NextPage } from 'next'
import { NextSeo } from 'next-seo';

const Home: NextPage = ({ }) => {
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
              <a className='text-brand hover:cursor-pointer hover:underline' href='/photos'>Photos</a>
            </div>
          </header>
          <div id='experience' className='max-w-4xl'>
            <h1 className='text-2xl font-bold'>Experience.</h1>
            <div className='flex flex-col gap-4'>
              <div id='felicis'>
                <div id='info' className='flex flex-col md:flex-row md:gap-2 text-lg'>
                  <a className='text-[#FF7E00] hover:cursor-pointer hover:underline' href='https://felicis.com'>Felicis</a>
                  <div className='flex flex-row gap-2'>
                    <span className='hidden md:block'>•</span>
                    <p>Dec 2023 <span>→</span> <span className='underline'>Present</span></p>
                    <span>•</span>
                    <p>Research Contractor</p>
                  </div>
                </div>
                <div className='mt-2 px-3 py-1 text-center text-red-500 border-2 border-red-500 border-dashed'>
                  IN PROGRESS
                </div>
              </div>
              <div id='walletconnect'>
                <div id='info' className='flex flex-col md:flex-row md:gap-2 text-lg'>
                  <a className='text-[#5570FF] hover:cursor-pointer hover:underline' href='https://walletconnect.com'>WalletConnect</a>
                  <div className='flex flex-col sm:flex-row sm:gap-2'>
                    <span className='hidden md:block'>•</span>
                    <p>Jun 2022 <span>→</span> Sep 2023</p>
                    <span className='hidden sm:block'>•</span>
                    <p>Distributed Systems Engineer</p>
                  </div>
                </div>
                <p id='description' className='mt-2 text-gray-700'>
                  I joined WalletConnect as an intern for the Summer of 2022 on the Cloud Team. While in this role I rolled-out a new authentication solution to support SIWE as well as retaining backwards compatibility with the existing authentication solution.
                  After that I returned to college while continuing part-time and helping to found the new Rust team. In this role I worked on the core relay which powered 1,000,000+ concurrent websockets and distributed it across 3 different AWS regions.
                  While working in this role I also wrote the protocol&apos;s <a className='text-brand hover:cursor-pointer hover:underline' href='https://github.com/walletconnect/echo-server'>push server implementation</a> in rust. I was also responsible for liaising with different customers of the push notification protocol from small wallets to Fortune 500 companies.
                </p>
              </div>
              <div id='cbnexpert'>
                <div id='info' className='flex flex-col md:flex-row md:gap-2 text-lg'>
                  <a className='text-[#48a770] hover:cursor-pointer hover:underline' href='https://cbn.expert'>CBNExpert</a>
                  <div className='flex flex-row gap-2'>
                    <span className='hidden md:block'>•</span>
                    <p>Jul 2022</p>
                    <span>•</span>
                    <p>Work Experience</p>
                  </div>
                </div>
                <p id='description' className='mt-2 text-gray-700'>
                  I spent 3 days working in person with the CBNExpert team; during this time I sat in on meetings with clients and helped to start a new product within their product suite.
                </p>
              </div>
            </div>
          </div>
        </main>
        <footer className='w-full flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-between'>
          <div className='flex flex-row space-x-6 text-gray-500'>
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
