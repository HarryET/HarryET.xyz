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
            <div className='w-full h-full'>
                <BlogSection posts={posts} />
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
                    ...meta
                }
            })
        }
    }
}

export default BlogHome
