import Link from 'next/link';

export const Navbar: React.FC<{}> = () => {
    return (
        <div className='w-full border-b border-gray-300 dark:border-gray-800'>
            <div className="w-full mb-2 flex text-gray-600 dark:text-gray-300 flex-row space-x-6">
                <Link href="/">
                    <p className='hover:underline hover:text-gray-900 hover:dark:text-gray-200 hover:cursor-pointer'>
                        Home
                    </p>
                </Link>
                <Link href="/technologies">
                    <p className='hover:underline hover:text-gray-900 hover:dark:text-gray-200 hover:cursor-pointer'>
                        Technologies
                    </p>
                </Link>
                <Link href="/blog" >
                    <p className='hover:underline hover:text-gray-900 hover:dark:text-gray-200 hover:cursor-pointer'>
                        Blog
                    </p>
                </Link>
            </div>
        </div>
    );
};
