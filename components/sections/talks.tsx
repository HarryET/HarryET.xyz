import talks from '../../public/data/talks.json';

export const TalksSection: React.FC = () => {
    return (
        <div className='w-full space-y-4'>
            <h1 className="text-lg font-bold sm:text-2xl">Talks</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {talks.map(({ name, event, url, status, date: date_string  }, i) => (
                    <div key={i} className="flex flex-col space-y-1 justify-between">
                        {url ? (<a href={url} className={"text-md font-semibold sm:text-lg hover:underline hover:cursor-pointer"}>{name}</a>) : (<p className={"text-md font-semibold sm:text-lg"}>{name}</p>)}
                        <div className='flex flex-row justify-between items-center'>
                            <p className={"text-sm text-gray-300 sm:text-md"}>{event}</p>
                            { status === "UPLOADED" ? (
                                <span className="inline-flex items-center rounded-md bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20">Available</span>
                            ) : status === "UPCOMING" ? (
                                <span className="inline-flex items-center rounded-md bg-yellow-400/10 px-2 py-1 text-xs font-medium text-yellow-500 ring-1 ring-inset ring-yellow-400/20">Upcoming</span>
                            ) : (
                                <span className="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20">{status}</span>
                            ) }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
