import experiences from '../../data/experience.json';
import Image from "next/image";

export const ExperienceSection: React.FC = () => {
    return (
        <div className='w-full space-y-4'>
            <h1 className="text-lg font-bold sm:text-2xl">Experience</h1>
            <div className="flex flex-col space-y-4 justify-start items-start">
                {experiences.map(({ company, url, img, title, from, to }, i) => (
                    <div key={i} className="flex flex-row justify-center items-center space-x-4">
                        <Image src={img} alt={`${company}'s icon`} width={48} height={48} className="rounded-full" />
                        <div className="flex flex-col justify-center items-start">
                            <a href={url} className="text-lg font-semibold hover:underline">
                                {company}
                            </a>
                            <p className="text-md text-gray-600 dark:text-gray-400">{title}</p>
                            <div className="flex flex-row space-x-1 text-gray-800 text-sm dark:text-gray-200">
                                <p>{from}</p>
                                <p>-</p>
                                <p className={to.toLowerCase() == "now" ? "font-bold" : ""}>{to}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
