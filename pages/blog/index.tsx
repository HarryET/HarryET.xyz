import type { GetStaticProps, NextPage } from 'next'
import { Intro } from '../../components/intro';
import { BlogSection, Post } from '../../components/sections/blog';
import * as fs from 'fs';
import { Footer } from '../../components/footer';

type Props = {
    posts: Post[];
}

const BlogHome: NextPage<Props> = ({ posts }) => {
    return (
        <>
            <Intro />
            <div className='w-full grid grid-cols-2 md:grid-cols-5 gap-6'>
                <div className="col-span-2 md:col-span-3">
                    <BlogSection posts={posts} />
                </div>
            </div>
        </>
    )
}

export const getStaticProps: GetStaticProps<Props> = (context) => {
    const posts = fs.readdirSync("./posts")

    return {
        props: {
            posts: posts.map((p) => p.replace(".md", "")).map((post) => {
                const split = post.split("-")
                const name = split.slice(3, split.length).join("-")

                return {
                    name,
                    title: name.replace("-", " "),
                    day: split[2],
                    month: split[1],
                    year: split[0]
                }
            })
        }
    }
}

export default BlogHome
