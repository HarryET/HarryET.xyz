import { GetStaticProps } from 'next';
import Link from 'next/link';
import { SpotifyBox } from '../components/spotify_box';
import { getNowPlaying } from '../lib/spotify';

export const getStaticProps: GetStaticProps = async () => {
  const nowPlaying = await getNowPlaying()

  return {
    props: {
      nowPlaying: nowPlaying.statusCode !== 204 ? nowPlaying.body : false
    },
    revalidate: 30
  }
}

const IndexPage = ({ nowPlaying }: { nowPlaying: SpotifyApi.CurrentlyPlayingResponse | false }) => (
  <div>
    {nowPlaying && <div>
      <SpotifyBox {...nowPlaying} />
    </div>}
  </div>
)

export default IndexPage
