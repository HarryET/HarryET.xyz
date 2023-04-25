import papers from '../../public/data/papers.json';
import Image from "next/image";

export const PapersSection: React.FC = () => {
    return (
        <div className='w-full space-y-4'>
            <h1 className="text-lg font-bold sm:text-2xl">Papers</h1>
            <div className="flex flex-col space-y-4 justify-start items-start">
                {papers.map(({ name, description, authors, download_url }, i) => (
                    <div key={i} className="flex flex-col space-y-1">
                        <a href={download_url} className={"text-md font-semibold sm:text-lg hover:underline hover:cursor-pointer"}>{name}</a>
                        <p className={"text-sm text-gray-300 sm:text-md"}>{description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
