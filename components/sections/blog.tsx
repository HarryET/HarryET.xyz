import { GetStaticProps } from "next"

export type Post = {
    name: string;
    title: string;
    date: string;
}

type Props = {
    posts: Post[]
}

export const BlogSection: React.FC<Props> = ({ posts }) => {
    return (
        <div className='w-full space-y-4'>
            <h1 className="text-lg font-bold sm:text-2xl">Recent Blog Posts</h1>
            <ul className="list-disc">
                {posts.sort((objA, objB) => new Date(objB.date).getTime() - new Date(objA.date).getTime(),).map(({ title, name, date }, i) => (
                    <li key={i} className="hover:underline hover:cursor-pointer">
                        <a href={`/blog/${name}`}>{title}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
