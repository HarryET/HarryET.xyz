export const SpotifyBox: React.FC<SpotifyApi.CurrentlyPlayingObject> = ({
    item,
    is_playing,
    currently_playing_type,
    context
}) => {
    return (
        <div>
            {currently_playing_type == "track" && <SpotifyAlbumBoxContent track={item as SpotifyApi.TrackObjectFull} context={context} />}
            {currently_playing_type == "episode" && <SpotifyEpisodeBoxContent {...(item as SpotifyApi.EpisodeObject)} />}
            {currently_playing_type != "track" && currently_playing_type != "episode" && <SpotifyMiscBoxContent />}
        </div>
    )
}

const getSpotifyArt = (images: SpotifyApi.ImageObject[]): string | undefined => {
    return images?.sort()[0].url ?? undefined
}

const SpotifyAlbumBoxContent: React.FC<{
    track: SpotifyApi.TrackObjectFull,
    context?: SpotifyApi.ContextObject
}> = ({
    track: { name, artists, album },
    context
}) => {
        const names = artists.map((a) => a.name).join(", ")

        return (
            <div className="flex flex-row items-center">
                <div className="mr-2">
                    <img src={getSpotifyArt(album.images)} className="w-20 h-20 rounded-xl" />
                </div>
                <div className="flex flex-col">
                    <p className="font-bold text-gray-900">{name}</p>
                    <p className="text-sm text-gray-700">{names}</p>
                </div>
            </div>
        );
    }

const SpotifyEpisodeBoxContent: React.FC<SpotifyApi.EpisodeObject> = ({
    images,
    name,
    show
}) => {
    return (
        <div className="flex flex-row items-center">
            <div className="mr-2">
                <img src={getSpotifyArt(images)} className="w-20 h-20 rounded-xl" />
            </div>
            <div className="flex flex-col">
                <p className="font-bold text-gray-900">{name}</p>
                <p className="text-sm text-gray-700">{show?.name}</p>
            </div>
        </div>
    );
}

const SpotifyMiscBoxContent: React.FC = ({ }) => {
    return (
        <div className="flex flex-row items-center">
            <div className="mr-2">
                <img src={""} className="w-20 h-20 rounded-xl" />
            </div>
            <div className="flex flex-col">
                <p className="font-bold text-gray-900">Not playing</p>
                <p className="text-sm text-gray-700"></p>
            </div>
        </div>
    );
}