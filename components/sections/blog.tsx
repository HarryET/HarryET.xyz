import { GetStaticProps } from "next"

export type Post = {
    name: string;
    title: string;
    day: string;
    month: string;
    year: string;
}

type Props = {
    posts: Post[]
}

export const BlogSection: React.FC<Props> = ({ posts }) => {
    return (
        <div className='w-full space-y-4'>
            <h1 className="text-lg font-bold sm:text-2xl">Recent Blog Posts</h1>
            {posts.map(({title, name, day, month, year}, i) => (
                <div key={i}>
                    <a href={`/blog/${year}-${month}-${day}-${name}`}>{title}</a>
                </div>
            ))}
        </div>
    )
}
