import { GetStaticProps } from "next"

export type Post = {
    name: string;
    title: string;
    date: string;
    banner: string;
    tags: string[];
    author?: {
        name: string;
        avatar: string;
        title: string;
    }
}

type Props = {
    posts: Post[]
}

export const BlogSection: React.FC<Props> = ({ posts }) => {
    const sorted_posts = posts.sort((objA, objB) => new Date(objB.date).getTime() - new Date(objA.date).getTime()).filter((v, _index) => new Date(v.date).getTime() > Date.now());

    return (
        <div className='w-full h-full'>
            <h1 className="text-lg font-bold sm:text-2xl">Recent Blog Posts</h1>
            <div className="grid grid-cols-3 gap-6">
                {sorted_posts.map(({ title, name, date, author, tags }, i) => (
                    <a key={i} href={`/blog/${name}`} className="rounded-md w-full h-full">
                        <div className="flex flex-col">
                            <h1>{title}</h1>
                            <p>{new Intl.DateTimeFormat('en-GB').format(new Date(date))}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}
