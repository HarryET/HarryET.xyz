import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { NextSeo } from 'next-seo';

export const getStaticProps: GetStaticProps = async () => {
  // @ts-ignore
  const daysTillMay21 = Math.floor((new Date('2024-05-21') - new Date()) / (1000 * 60 * 60 * 24))

  return {
    props: {
      // @ts-ignore
      age: new Date(new Date() - new Date('2006-08-19')).getFullYear() - 1970 as number,
      year: new Date().getFullYear(),
      exams: daysTillMay21
    },
    // Update every 12 hours
    revalidate: 60 * 60 * 12
  }
}

const Home: NextPage = ({ age, year, exams }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <NextSeo title='Harry Bairstow' />
      <div className='w-full h-full px-6 py-3 flex flex-col justify-between'>
        <main className='flex flex-col gap-6'>
          <header className='w-full flex flex-row justify-between items-center'>
            <div id='me'>
              <h1 className='text-3xl'>Harry Bairstow.</h1>
              <div className='flex flex-col gap-1 sm:flex-row sm:gap-2'>
                <p>{age}.</p>
                <p>Elixir & Rust enthusiast.</p>
                <p>Conference Speaker.</p>
                <p>Venture Research.</p>
              </div>
            </div>
            <div id='menu'>
              {/* <a className='text-brand hover:cursor-pointer hover:underline' href='/photos'>Photos</a> */}
            </div>
          </header>
          <div id='key-facts' className='max-w-4xl'>
            <h1 className='text-2xl font-bold'>In a Nutshell.</h1>
            <p className='text-gray-700'>Before I explain my life story, here are 3 things about me you might be interested in.</p>
            <div className='mt-3 flex flex-col md:flex-row items-center justify-between gap-6'>
              <div className='w-full border-2 border-gray-900 flex items-center flex-col gap-3 py-3'>
                <p className='text-6xl font-semibold'>6</p>
                <p>Years of Experience</p>
              </div>
              <a href='#presentations' className='w-full border-2 border-gray-900 flex items-center flex-col gap-3 py-3 hover:bg-gray-900 hover:cursor-pointer hover:text-white'>
                <p className='text-6xl font-semibold'>4+</p>
                <p>International Presentations</p>
              </a>
              <a href='#research' className='w-full border-2 border-gray-900 flex items-center flex-col gap-3 py-3 hover:bg-gray-900 hover:cursor-pointer hover:text-white'>
                <p className='text-6xl font-semibold'>2</p>
                <p>Research Projects</p>
              </a>
            </div>
          </div>
          <div id='key-facts' className='max-w-4xl'>
            <h1 className='text-2xl font-bold'>Whoami?</h1>
            <div className='mt-3'>
              👋🏻 Hey, My name is Harry Bairstow and I&apos;m a {age} years old Software Engineer from the UK. While I could write you a paragraph about my work experience I might as well just give a tl;dr and focus on what matters.
              <br /><br /><span className="underline">tl;dr</span> I&apos;ve worked for 6 years in the tech industry and currently I&apos;m a Venture Research Consultant for <div className='inline-flex flex-row items-center gap-1'>Felicis <img className='h-4' alt='felicis logo' src='/logos/felicis_32.png' /></div>.
              <br /><br /> So, who actually am I? Aside from enjoying my work - both professionally and personally - I study Electronics, Computer Science and Maths at Sir John Dean&apos;s Sixth Form College in the UK. When I&apos;m not revising or finishing my homework I enjoy spending time with my friends, research new and interesting areas and uniquely flying hot-air balloons.
              <br /><br /> Now that you know a bit about me, feel free to keep scrolling an take look into my experience and accolades.
            </div>
          </div>
          <div id='experience' className='max-w-4xl' style={{pageBreakBefore: "always"}}>
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
                <div className='mt-2 px-3 py-1 gap-3 border-2 border-red-500 border-dashed'>
                  <div className='w-full text-center text-red-500'>
                    <p>IN PROGRESS</p>
                  </div>
                  <p id='description' className='text-gray-700'>At Felicis I help source companies from various channels and provide insights into active and growing tools in the wider development ecosystem. This is accompanied by detailed reports on specific companies which are being considered by various partners throughout the company.</p>
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
                  During my penultimate year at Sandbach Boys School, I spent 3 days working in person with the CBNExpert team; during this time I assisted with client meetings and helped to start a new product within their product suite. After my placement finished, I have continued on the team as a Staff Software Engineer leading the development of <a className='text-[#0284C7] hover:cursor-pointer hover:underline' href='https://swift.eco'>Swift.eco</a> building every component from a highly reliable API to a fully featured web application for the product.
                </p>
              </div>
              <div id='freelance'>
                <div id='info' className='flex flex-col md:flex-row md:gap-2 text-lg'>
                  <p>Freelance Software Engineer</p>
                  <div className='flex flex-row gap-2'>
                    <span className='hidden md:block'>•</span>
                    <p>Jun 2019 <span>→</span> Jun 2022</p>
                  </div>
                </div>
                <p id='description' className='mt-2 text-gray-700'>
                  As a freelance engineer, I worked with a verity of clients from all around the world building everything from complex integrated billing solutions to chat bots for Discord. For the 2 years I was freelancing I completed a new project almost every week - all while completing my GCSEs. Each project was fully documented, tested and deployed for the client on unique hardware each time.
                </p>
              </div>
            </div>
          </div>
          <div id='key-facts' className='max-w-4xl' style={{pageBreakBefore: "always"}}>
            <h1 className='text-2xl font-bold'>Academics.</h1>
            <div className='flex flex-col gap-4'>
              <div id='sjd'>
                <div id='info' className='flex flex-col md:flex-row md:gap-2 text-lg'>
                  <p>Sir John Dean&apos;s Sixth Form College</p>
                  <div className='flex flex-col sm:flex-row sm:gap-2'>
                    <span className='hidden md:block'>•</span>
                    <p>Sep 2022 <span>→</span> Jul 2024</p>
                    <span className='hidden sm:block'>•</span>
                    <p>A-Levels</p>
                  </div>
                </div>
                <p id='description' className='mt-2 text-gray-700'>
                  Currently I attend SJD, while there I&apos;ve become an active member of the student body from running a weekly Cyber Security Club to helping the lower years with homework assignments. My predicted grades are available below and I&apos;m on track to achieve these results during my exams which start in {exams} days.
                </p>
                <div id='results' className='flex flex-col gap-2 md:flex-row md:justify-between mt-2 text-gray-800'>
                  <p><span className='inline-block mr-1 md:hidden'>•</span> Computer Science, A*</p>
                  <p><span className='inline-block mr-1 md:hidden'>•</span> Electronics, A*</p>
                  <p><span className='inline-block mr-1 md:hidden'>•</span> Maths, A</p>
                </div>
              </div>
              <div id='sbs'>
                <div id='info' className='flex flex-col md:flex-row md:gap-2 text-lg'>
                  <p>Sandbach Boys School</p>
                  <div className='flex flex-col sm:flex-row sm:gap-2'>
                    <span className='hidden md:block'>•</span>
                    <p>Sep 2017 <span>→</span> Jul 2022</p>
                    <span className='hidden sm:block'>•</span>
                    <p>GCSEs</p>
                  </div>
                </div>
                <p id='description' className='mt-2 text-gray-700'>
                  I completed my secondary education at Sandbach Boys School, while there I studied a range of subjects and achieved a set of results I was proud of - see below. Other than my academic achievements, I was a member of my school&apos;s cadet force reaching the rank of Corporal. I even took a team from my Cadet Force to a national Cyber Security competition and won!
                </p>
                <div id='results' className='flex flex-col gap-2 md:flex-row md:justify-between mt-2 text-gray-800'>
                  <p><span className='inline-block mr-1 md:hidden'>•</span> Computer Science, 9</p>
                  <p><span className='inline-block mr-1 md:hidden'>•</span> Maths, 7</p>
                  <p><span className='inline-block mr-1 md:hidden'>•</span> Science, 7-6</p>
                  <p><span className='inline-block mr-1 md:hidden'>•</span> English Literature, 6</p>
                  <p><span className='inline-block mr-1 md:hidden'>•</span> English Language, 5</p>
                </div>
              </div>
            </div>
          </div>
          <div id='presentations' className='max-w-4xl'>
            <h1 className='text-2xl font-bold'>Presentations.</h1>
            <div className='flex flex-col gap-2'>
              <a href="https://www.youtube.com/watch?v=2mHbXl6R_p0" className='flex flex-row items-center hover:underline'>• Introduction to Gleam - FOSDEM 2023</a>
              <a href="https://www.youtube.com/watch?v=01o9aA5ezpg" className='flex flex-row items-center hover:underline'>• Building Secure Distributed Webhooks - EthCC [5]</a>
              <a href="https://www.youtube.com/watch?v=PlKMG9xSW-o" className='flex flex-row items-center hover:underline'>• Bringing Web2 Specifications into Web3 - EthPrague 2023</a>
              <a href="https://www.youtube.com/watch?v=clr9wIX9I5s" className='flex flex-row items-center hover:underline'>• Type Safe Queries with Gleam & GraphQL - FOSDEM 2024</a>
            </div>
          </div>
          <div id='research' className='max-w-4xl'>
            <h1 className='text-2xl font-bold'>Research.</h1>
            <div className='flex flex-col gap-4'>
              <a href="/papers/private-set-intersection.pdf" className='flex flex-row items-center hover:underline'>• Private Set Intersection for Privacy Preserving Comparisons</a>
              <a href="/papers/designing-distributed-systems-that-scale.pdf" className='flex flex-row items-center hover:underline'>• Designing Distributed Systems that Scale</a>
            </div>
          </div>
        </main>
        <footer className='w-full py-6 flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-between print:hidden'>
          <div className='flex flex-row space-x-6 text-gray-500'>
            <a href="https://github.com/harryet" className='hover:underline hover:cursor-pointer'>GitHub</a>
            <a href="https://twitter.com/theharryet" className='hover:underline hover:cursor-pointer'>Twitter</a>
            <a href="mailto:me@harryet.xyz" className='hover:underline hover:cursor-pointer'>Email</a>
          </div>
          <p>&copy; {year} Harry Bairstow</p>
        </footer>
      </div>
    </>
  )
}

export default Home
