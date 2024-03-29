import Image from "next/image";

export const Intro: React.FC = () => {
    return (
        <div className='w-full flex flex-row items-center space-x-4'>
            <div>
                <Image src="https://github.com/harryet.png" alt='My profile picture' width={72} height={72} className="shadow-md" />
            </div>
            <div>
                <h1 className="text-2xl font-bold sm:text-4xl">Harry Bairstow</h1>
                <p className='text-sm text-gray-600 sm:text-md dark:text-gray-400'>A-Level Computer Science Student</p>
            </div>
        </div>
    )
}
