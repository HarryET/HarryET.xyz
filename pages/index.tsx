import type { NextPage } from 'next'
import { JetBrains_Mono } from 'next/font/google'

import papers from "../public/data/papers.json"
import talks from "../public/data/talks.json"

const jb_mono = JetBrains_Mono({ subsets: ['latin'] })

let generics = [
  "/assets/generic/1.jpeg",
  "/assets/generic/2.jpeg",
  "/assets/generic/3.jpeg",
  "/assets/generic/4.jpeg",
  "/assets/generic/5.jpeg",
  "/assets/generic/6.jpeg",
];

// Get a random unique generic image, if we run out of images, reset the list
const randomGeneric = () => {
  if (generics.length === 0) {
    generics = [
      "/assets/generic/1.jpeg",
      "/assets/generic/2.jpeg",
      "/assets/generic/3.jpeg",
      "/assets/generic/4.jpeg",
      "/assets/generic/5.jpeg",
      "/assets/generic/6.jpeg",
    ];
  }

  const index = Math.floor(Math.random() * generics.length);
  const image = generics[index];
  generics.splice(index, 1);
  return image;
}

const Job: React.FC<{ img: string, link: string, company: string, title: string }> = ({ img, company, title, link }) => {
  return (
    <div className='flex flex-row space-x-4'>
      <img className="h-24 w-24" src={img} alt={`${company}'s logo`} />
      <div className='h-24 flex flex-col justify-center space-y-2'>
        <a href={link} className='text-lg font-semibold hover:cursor-pointer hover:underline'>{company}</a>
        <p className='text-gray-500'>{title}</p>
      </div>
    </div>
  )
}


const KindPill: React.FC<{ kind: "talk" | "blog" | "paper" }> = ({ kind }) => {
  switch (kind) {
    case "talk":
      return (
        <div className={`inline-flex items-center px-2 py-1 text-xs font-medium ring-1 ring-inset bg-green-500/10 text-green-500 ring-green-500/20`}>
          {kind.toUpperCase()}
        </div>
      )
    case "blog":
      return (
        <div className={`inline-flex items-center px-2 py-1 text-xs font-medium ring-1 ring-inset bg-blue-500/10 text-blue-500 ring-blue-500/20`}>
          {kind.toUpperCase()}
        </div>
      )

    case "paper":
      return (
        <div className={`inline-flex items-center px-2 py-1 text-xs font-medium ring-1 ring-inset bg-yellow-500/10 text-yellow-500 ring-yellow-500/20`}>
          {kind.toUpperCase()}
        </div>
      )
  }
}

const ContentEntry: React.FC<Content> = ({ image, title, author, link, kind }) => {
  return (
    <a className='flex flex-col max-w-xl hover:cursor-pointer hover:bg-gray-50' href={link}>
      <img className='w-full h-auto' src={image ?? randomGeneric()} />
      <div className='h-full flex flex-col justify-between pt-4 px-4'>
        <div>
          <h3>{title}</h3>
          <p className='text-gray-500'>{author}</p>
        </div>
        <div className='-translate-y-[24px] flex flex-row justify-between'>
          <div></div>
          <KindPill kind={kind} />
        </div>
      </div>
    </a>
  )
}

type Content = {
  image: string | undefined,
  title: string,
  author: string,
  link: string,
  kind: "talk" | "blog" | "paper"
}

const findContent = (): Content[] => {
  let content: Content[] = []

  for (const paper of papers) {
    content.push({
      image: paper.img_url,
      title: paper.name,
      author: "Harry Bairstow",
      link: paper.download_url,
      kind: "paper"
    })
  }

  for (const talk of talks) {
    content.push({
      image: talk.img_url,
      title: talk.name,
      author: "Harry Bairstow",
      link: talk.url,
      kind: "talk"
    })
  }

  // TODO blog posts

  return content;
}

const Home: NextPage = ({ }) => {
  return (
    <div className={`flex flex-col items-start p-12 space-y-12 text-gray-900 ${jb_mono.className}`}>
      <div id="intro" className='space-y-4'>
        <h1 className='text-4xl font-semibold'>Harry Bairstow</h1>
        <div className='text-gray-500 flex flex-col space-y-1 lg:flex-row lg:space-y-0 lg:space-x-4'>
          <p>16.</p>
          <p>Conference Speaker.</p>
          <p>Engineer @WalletConnect.</p>
          <p>Elixir & Rust enthusiast.</p>
        </div>
      </div>

      <div id="images" className='w-full flex flex-row gap-6 overflow-x-hidden'>
        <img className="h-48 md:h-52 lg:h-80 w-auto" src='/assets/prague_ens_booth.jpeg' />
        <img className="h-48 md:h-52 lg:h-80 w-auto" src='/assets/bru_plane.jpeg' />
        <img className="h-48 md:h-52 lg:h-80 w-auto" src='/assets/bru_airport.jpeg' />
        <img className="h-48 md:h-52 lg:h-80 w-auto" src='/assets/speaker_img.jpeg' />
        <img className="h-48 md:h-52 lg:h-80 w-auto" src='/assets/drone_northwhich.jpeg' />
      </div>

      <div id="jobs" className='w-full flex flex-col space-y-6 lg:space-y-0 lg:flex-row lg:justify-between'>
        <Job img="/assets/jobs/walletconnect.svg" link="https://walletconnect.com" company='WalletConnect' title="Distributed Systems Engineer" />
        <Job img="/assets/jobs/v3x.svg" link="https://v3x.company" company='V3X Labs' title="Research & Development" />
        <Job img="/assets/jobs/swift.svg" link="https://swift.eco" company='Swift.eco' title="Staff Software Engineer" />
      </div>

      <div id="content" className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {findContent().map((c, i) => <ContentEntry key={i} {...c} />)}
      </div>

      <footer className='w-full flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-between'>
        <div className='flex flex-row space-x-6 text-gray-500'>
          <a href="https://github.com/harryet" className='hover:underline hover:cursor-pointer'>GitHub</a>
          <a href="https://twitter.com/theharryet" className='hover:underline hover:cursor-pointer'>Twitter</a>
          <a href="mailto:me@harryet.xyz" className='hover:underline hover:cursor-pointer'>Email</a>
        </div>
        <p>&copy; 2023 Harry Bairstow</p>
      </footer>
    </div>
  )
}

export default Home
