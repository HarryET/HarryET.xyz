import langs from '../../public/data/langs.json';
import Image from "next/image";

export const TechnologySection: React.FC = () => {
    return (
        <div className='w-full space-y-2'>
            <h1 className="text-lg font-bold sm:text-2xl">Technologies</h1>
            <div className="flex flex-row flex-wrap gap-2 justify-start items-center">
                {langs.map(({ name, image, url, bg }, i) => (
                    <a key={i} href={url}>
                        <Image src={image} alt={`${name}'s icon`} width={48} height={48} style={{ backgroundColor: bg }} />
                    </a>
                ))}
            </div>
        </div>
    );
}
