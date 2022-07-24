import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import * as fs from 'fs';
import Markdoc from '@markdoc/markdoc';
import { Fence, markdocFence } from '../../components/markdoc/codeFence';

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
    return {
        props: {
            post,
            contents
        }
    }
}

const BlogPost: NextPage<Params> = ({ post, contents }) => {
    const ast = Markdoc.parse(contents);
    const content = Markdoc.transform(ast, {
        nodes: {
            fence: markdocFence
        }
    });

    return (
        <>
            <div className="prose max-w-none dark:prose-invert">
                {Markdoc.renderers.react(content, React, {
                    components: {
                        Fence
                    }
                })}
            </div>
        </>
    );
}

export default BlogPost
