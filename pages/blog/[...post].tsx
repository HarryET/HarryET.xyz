import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import * as fs from 'fs';
import ReactMarkdown from 'react-markdown'
import yaml from 'js-yaml'
import rehypeRaw from "rehype-raw";

type StaticParams = { post: string[]; }

export const getStaticPaths: GetStaticPaths<StaticParams> = () => {
    const posts = fs.readdirSync("./posts")

    return {
        paths: posts.map((path) => {
            return {
                params: {
                    post: [path.replace(".md", "")],
                    local: "en"
                }
            }
        }),
        fallback: false
    }
}

type Params = { post: string; contents: string; meta: PostMeta; }
export type PostMeta = { title: string; tags: string[]; date: string; }

export const getStaticProps: GetStaticProps = async (context) => {
    if (!context.params) {
        throw new Error("No params, cannot render blog post.")
    }

    const { post } = context.params

    const rawContents = fs.readFileSync(`./posts/${post}.md`, "utf8")
    const rawMeta = rawContents.split("---")[0];
    const meta = yaml.load(rawMeta) as PostMeta;
    const contents = rawContents.split("---")[1];

    return {
        props: {
            post,
            contents,
            meta
        }
    }
}

const BlogPost: NextPage<Params> = ({ contents }) => {
    return (
        // TODO add title and date
        <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            className="prose max-w-none dark:prose-invert">
            {contents}
        </ReactMarkdown>
    );
}

export default BlogPost
