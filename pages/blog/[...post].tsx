import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import * as fs from 'fs';
import ReactMarkdown from 'react-markdown'
import yaml from 'js-yaml'
import rehypeRaw from "rehype-raw";
import { Post } from '../../components/sections/blog';
import { JetBrains_Mono, Inter } from 'next/font/google';
import { ReportView } from '../../components/trackView';
import { Redis } from '@upstash/redis';

const jb_mono = JetBrains_Mono({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

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

type Params = { post: string; contents: string; meta: PostMeta; view_count: number; }
export type PostMeta = Omit<Post, "name">

const redis = Redis.fromEnv();

export const getStaticProps: GetStaticProps = async (context) => {
    if (!context.params) {
        throw new Error("No params, cannot render blog post.")
    }

    const { post } = context.params

    const rawContents = fs.readFileSync(`./posts/${post}.md`, "utf8")
    const rawMeta = rawContents.split("---")[0];
    const meta = yaml.load(rawMeta) as PostMeta;
    const contents = rawContents.split("---")[1];

    const val = await redis.get(`pageviews:${process.env.NODE_ENV}:${post}`);

    return {
        props: {
            post,
            contents,
            meta,
            view_count: val ?? 0
        },
        revalidate: 60
    }
}

const BlogPost: NextPage<Params> = ({ post, contents, meta, view_count }) => {
    return (
        <div className={'w-full h-full flex flex-col justify-between'}>
            <ReportView slug={post} />
            <div className={`px-12 pt-12 flex flex-col items-start space-y-12 text-gray-900 ${jb_mono.className}`}>
                <div id="intro" className='space-y-4'>
                    <h1 className='text-4xl font-semibold'>Harry Bairstow</h1>
                    <div className='text-gray-500 flex flex-col space-y-1 lg:flex-row lg:space-y-0 lg:space-x-4'>
                        <p>16.</p>
                        <p>Conference Speaker.</p>
                        <p>Engineer @WalletConnect.</p>
                        <p>Elixir & Rust enthusiast.</p>
                    </div>
                </div>
                <div className='w-full flex flex-row justify-between'>
                    {meta.author ? (
                        <div className='flex flex-row space-x-3 bg-gray-100 p-4'>
                            <img className='w-20 h-20' src={meta.author.avatar} />
                            <div>
                                <p className='font-semibold text-xl'>{meta.author.name}</p>
                                <p className='text-gray-500'>{meta.author.title}</p>
                            </div>
                        </div>
                    ) : (
                        <div className='flex flex-row space-x-6 bg-gray-50'>
                            <div className='w-20 h-20 bg-gray-600'/>
                            <div>
                                <p className='font-semibold text-xl'>Unknown Author</p>
                                <p className='text-gray-500'>Unknown Role</p>
                            </div>
                        </div>
                    )}
                    <div className='flex flex-col h-full justify-center gap-2 items-end'>
                        <p className='text-gray-500'>Published on {new Date(meta.date).toLocaleDateString('en-GB')}</p>
                        <p className='text-gray-500'>{view_count.toLocaleString('en-GB')} views</p>
                        <div id='share-button' className='text-gray-500 flex flex-row items-center gap-2 hover:underline hover:cursor-pointer' onClick={() => navigator.share({ url: window.location.href, title: meta.title })}>
                            Share
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                            </svg>
                        </div>
                        <script dangerouslySetInnerHTML={{ __html: `if (!navigator.share) {
                                document.getElementById('share-button').style.display = 'none';
                            }`}}>
                        </script>
                    </div>
                </div>
                <ReactMarkdown
                    rehypePlugins={[rehypeRaw]}
                    className={`prose max-w-none ${inter.className}`}>
                    {contents}
                </ReactMarkdown>
            </div>
            <footer className='w-full flex flex-col p-12 space-y-4 md:space-y-0 md:flex-row md:justify-between'>
                <div className='flex flex-row space-x-6 text-gray-500'>
                    <a href="https://github.com/harryet" className='hover:underline hover:cursor-pointer'>GitHub</a>
                    <a href="https://twitter.com/theharryet" className='hover:underline hover:cursor-pointer'>Twitter</a>
                    <a href="mailto:me@harryet.xyz" className='hover:underline hover:cursor-pointer'>Email</a>
                </div>
                <p>&copy; 2023 Harry Bairstow</p>
            </footer>
        </div>
    );
}

export default BlogPost
