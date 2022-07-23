import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import * as fs from 'fs';
import Markdoc from '@markdoc/markdoc';
import { Footer } from '../../components/footer';

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

type Params = { post: string; contents: string; }

export const getStaticProps: GetStaticProps = async (context) => {
    if (!context.params) {
        throw new Error("No params, cannot render blog post.")
    }

    const { post } = context.params

    const contents = fs.readFileSync(`./posts/${post}.md`, "utf8")
    const ast = Markdoc.parse(contents);
    const content = Markdoc.transform(ast, /* config */);
    const html = Markdoc.renderers.html(content);

    return {
        props: {
            post,
            contents: html
        }
    }
}

const BlogPost: NextPage<Params> = ({ post, contents }) => {
    return (
        <>
            <div className="pb-6 sm:pb-16 space-y-12">
                <div className="prose max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: contents }}></div>
                <Footer />
            </div>
        </>
    );
}

export default BlogPost
