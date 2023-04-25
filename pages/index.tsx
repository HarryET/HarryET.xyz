import type { NextPage } from 'next'
import { Intro } from '../components/intro';
import { ExperienceSection } from '../components/sections/experience';
import { TechnologySection } from '../components/sections/technologies';
import { PapersSection } from '../components/sections/papers';
import { TalksSection } from '../components/sections/talks';

const Home: NextPage = ({ }) => {
  return (
    <>
      <Intro />
      <div className='w-full grid grid-cols-2 md:grid-cols-5'>
        <div className="col-span-2 md:col-span-4 flex flex-col space-y-6">
          <ExperienceSection />
          <TalksSection />
          <PapersSection />
          <TechnologySection />
        </div>
      </div>
    </>
  )
}

export default Home
