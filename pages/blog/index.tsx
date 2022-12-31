import type { GetStaticProps, NextPage } from 'next'
import { Intro } from '../../components/intro';
import { BlogSection, Post } from '../../components/sections/blog';
import * as fs from 'fs';
import { Footer } from '../../components/footer';
import yaml from 'js-yaml'
import { PostMeta } from './[...post]';

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
            posts: posts.map((p) => [p.replace(".md", ""), fs.readFileSync(`./posts/${p}`, "utf8")]).map(([name, rawContents]) => {
                const rawMeta = rawContents.split("---")[0];
                const meta = yaml.load(rawMeta) as PostMeta;
                const contents = rawContents.split("---")[1];

                return {
                    name: name,
                    title: meta.title,
                    date: meta.date
                }
            })
        }
    }
}

export default BlogHome
