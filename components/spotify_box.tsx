type Args = {
    nowPlaying: SpotifyApi.CurrentlyPlayingObject,
    playlist?: SpotifyApi.SinglePlaylistResponse
};

export const SpotifyBox: React.FC<Args> = (args) => {
    const item = args.nowPlaying.item;

    return (
        <div className="bg-slate-800 p-4">
            {(item != null && item.type == "track" && args.nowPlaying.is_playing) ? <SpotifyAlbumBoxContent {...args} /> : <SpotifyMiscBoxContent />}
        </div>
    )
}

const getSpotifyArt = (images: SpotifyApi.ImageObject[]): string | undefined => {
    return images?.sort()[0].url ?? undefined
}

const getTimeString = (ms, sep = ':') => {
    const sign = ~~ms < 0 ? '-' : '';
    const absMs = Math.abs(~~ms);
    const [h, m, s] = [1000 * 60 * 60, 1000 * 60, 1000].map(calcMs => ('0' + ~~((absMs / calcMs) % 60)).substr(-2));
    return `${sign}${parseInt(h, 10) ? `${h}${sep}` : ''}${m}${sep}${s}`;
}

const SpotifyAlbumBoxContent: React.FC<Args> = ({
    nowPlaying: { item },
    playlist
}) => {
    const track = item as SpotifyApi.TrackObjectFull
    const { name, artists, album, duration_ms } = track;

    const names = artists.map((a) => a.name).join(", ")

    const playlistImages: SpotifyApi.ImageObject[] | null = playlist != null ? playlist.images : null

    return (
        <div className="flex flex-row items-center">
            <div className="mr-4">
                <span className="inline-block relative">
                    <img src={getSpotifyArt(album.images)} className="w-14 h-14 rounded-xl" alt={track.name} />
                    <span className="absolute bottom-0 right-0 transform translate-y-1.5 translate-x-1.5 block border-2 border-slate-800 rounded">
                        {playlistImages && <a href={playlist.external_urls.spotify} className="pointer-cursor"><img src={getSpotifyArt(playlistImages)} alt={playlist.name} className="w-6 h-6 rounded bg-red" /></a>}
                    </span>
                </span>
            </div>
            <div className="flex flex-col">
                <p className="font-bold text-gray-200">{name}</p>
                <p className="text-sm text-gray-500">{names}</p>
            </div>
        </div>
    );
}

const SpotifyMiscBoxContent: React.FC = ({ }) => {
    return (
        <div className="flex flex-row items-center">
            <div className="mr-4">
                <span className="inline-block relative">
                    <img src={"/assets/spotify_logo.png"} className="w-14 h-14 rounded-xl" />
                    <span className="absolute bottom-0 right-0 transform translate-y-1.5 translate-x-1.5 block border-2 border-slate-800 rounded">
                        <img src={"/profile_picture.png"} className="w-6 h-6 rounded bg-red" />
                    </span>
                </span>
            </div>
            <div className="flex flex-col">
                <p className="font-bold text-gray-200">Not playing</p>
                <p className="text-sm text-gray-500">Inspired by <a href="https://leerob.io" className="underline cursor-pointer">leerob</a></p>
            </div>
        </div>
    );
}