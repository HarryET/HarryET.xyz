import type { NextPage } from 'next'
import { Intro } from '../components/intro';
import { Footer } from '../components/footer';
import { TechnologySection } from '../components/sections/technologies';

const Home: NextPage = ({ }) => {
    return (
        <>
            <Intro />
            <div className='w-full grid grid-cols-2 md:grid-cols-5 gap-6'>
                <div className="col-span-2">
                    <TechnologySection />
                </div>
            </div>
        </>
    )
}

export default Home
