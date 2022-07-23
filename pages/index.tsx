import type { NextPage } from 'next'
import { Intro } from '../components/intro';
import { ExperienceSection } from '../components/sections/experience';
import { Footer } from '../components/footer';

const Home: NextPage = ({ }) => {
  return (
    <>
      <Intro />
      <div className='w-full grid grid-cols-2 md:grid-cols-5 gap-6'>
        <div className="col-span-2">
          <ExperienceSection />
        </div>
      </div>
    </>
  )
}

export default Home
