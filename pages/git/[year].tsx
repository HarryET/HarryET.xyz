import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import * as fs from 'fs';

type StaticParams = { year: string; }

export const getStaticPaths: GetStaticPaths<StaticParams> = () => {
    const posts = fs.readdirSync("./git")

    return {
        paths: posts.map((path) => {
            return {
                params: {
                    year: path.replace(".json", ""),
                }
            }
        }),
        fallback: false
    }
}

type Params = { year: string; }

export const getStaticProps: GetStaticProps = async (context) => {
    if (!context.params) {
        throw new Error("No params, cannot render git data.")
    }

    const { year } = context.params

    return {
        props: {
            year
        }
    }
}

const GitYear: NextPage<Params> = ({ year }) => {
    return (
        <div>
            <h1 className='text-2xl font-bold'>{year}&apos;s Git Statistics</h1>
            <p className='text-sm text-gray-300'>This is still todo: I&apos;ll work on this when I get chance.</p>
        </div>
    );
}

export default GitYear
