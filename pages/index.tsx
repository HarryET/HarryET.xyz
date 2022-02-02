import { GetStaticProps } from 'next';
import Link from 'next/link';
import { SpotifyBox } from '../components/spotify_box';
import { getNowPlaying, getPlaylist } from '../lib/spotify';

export const getStaticProps: GetStaticProps = async () => {
  const nowPlaying = await getNowPlaying()

  // TODO optimise!
  let playlist: SpotifyApi.SinglePlaylistResponse | null = null;
  if (nowPlaying.statusCode !== 204) {
    if (nowPlaying.body.context.type == "playlist") {
      const playlistResponse = await getPlaylist(nowPlaying.body.context.uri.replace("spotify:playlist:", ""));
      if (playlistResponse.statusCode === 200) {
        playlist = playlistResponse.body
      }
    }
  }

  return {
    props: {
      nowPlaying: nowPlaying.statusCode !== 204 ? nowPlaying.body : false,
      playlist
    },
    revalidate: 60
  }
}

const IndexPage = ({ nowPlaying, playlist }: { nowPlaying: SpotifyApi.CurrentlyPlayingResponse | false, playlist: SpotifyApi.SinglePlaylistResponse | null }) => (
  <div className='w-full h-full bg-slate-700 flex flex-col justify-center items-center'>
    {nowPlaying && <div className='bg-slate-900 p-2'>
      <p className='text-white uppercase font-bold mb-2'>Now Listening To</p>
      <SpotifyBox nowPlaying={nowPlaying} playlist={playlist} />
    </div>}
    <p className='text-gray-500 mt-6 text-sm'>This is a WIP portfolio website by <a href="https://twitter.com/TheHarryET" className='underline'>Harry Bairstow</a></p>
  </div>
)

export default IndexPage
