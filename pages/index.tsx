import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="p-4 sm:p-16 w-full h-full flex flex-col justify-between bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50">
      <div className='w-full flex flex-col'>
        <div>
          <Image src="https://github.com/harryet.png" alt='My profile picture' width={72} height={72} className="shadow-md" />
        </div>
        <h1 className="text-2xl font-bold sm:text-4xl">Harry Bairstow</h1>
        <p className='text-sm text-gray-600 sm:text-md dark:text-gray-400'>A-Level Computer Science Student</p>
      </div>
      <div className='w-full border-t border-gray-300 dark:border-gray-800'>
        <div className="w-full mt-1 sm:mt-2 flex flex-col space-y-1 text-gray-400 dark:text-gray-600 sm:flex-row sm:space-y-0 sm:space-x-6">
          <a href="https://github.com/harryet" className='hover:underline hover:text-gray-900 hover:dark:text-gray-200 hover:cursor-pointer'>GitHub</a>
          <a href="https://twitter.com/theharryet" className='hover:underline hover:text-gray-900 hover:dark:text-gray-200 hover:cursor-pointer'>Twitter</a>
          <a href="mailto:h.bairstow22@gmail.com" className='hover:underline hover:text-gray-900 hover:dark:text-gray-200 hover:cursor-pointer'>Email</a>
        </div>
      </div>
    </div>
  )
}

export default Home
