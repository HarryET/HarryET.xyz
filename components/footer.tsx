export const Footer: React.FC<{}> = () => {
    return (
        <div className='w-full border-t border-gray-300 dark:border-gray-800'>
            <div className="w-full mt-1 sm:mt-2 flex flex-col space-y-1 text-gray-400 dark:text-gray-600 sm:flex-row sm:space-y-0 sm:space-x-6">
                <a href="https://github.com/harryet" className='hover:underline hover:text-gray-900 hover:dark:text-gray-200 hover:cursor-pointer'>GitHub</a>
                <a href="https://twitter.com/theharryet" className='hover:underline hover:text-gray-900 hover:dark:text-gray-200 hover:cursor-pointer'>Twitter</a>
                <a href="mailto:me@harryet.xyz" className='hover:underline hover:text-gray-900 hover:dark:text-gray-200 hover:cursor-pointer'>Email</a>
            </div>
        </div>
    );
};
