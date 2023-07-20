import { GetStaticProps } from "next"

export type Post = {
    name: string;
    title: string;
    date: string;
    image?: string;
    tags: string[];
    published: boolean;
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
    const sorted_posts = posts.sort((objA, objB) => new Date(objA.date).getTime() - new Date(objB.date).getTime());

    return (
        <div className='w-full h-full'>
            <h1 className="text-lg font-bold sm:text-2xl">Recent Blog Posts</h1>
            <div className="grid grid-cols-3 gap-6">
                {sorted_posts.filter(({ published }) => published).map(({ title, name, date, author, tags }, i) => (
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
