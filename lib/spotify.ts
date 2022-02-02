/* 
 * Credit to leerob: https://github.com/leerob/leerob.io/blob/06c7b7a44a9960b224e2b7f574babb3e57d40868/lib/spotify.ts
 */

import SpotifyWebApi from "spotify-web-api-node";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token
    })
  });

  return response.json();
};

const getApiClient = async (): Promise<SpotifyWebApi> => {
  const { access_token } = await getAccessToken();

  return new SpotifyWebApi({
    accessToken: access_token
  });
}

export const getNowPlaying = async () => {
  const api = await getApiClient();

  return await api.getMyCurrentPlayingTrack();
};

export const getPlaylist = async (id: string) => {
  const api = await getApiClient();

  return await api.getPlaylist(id);
}

export const getTopTracks = async () => {
  const api = await getApiClient();

  return await api.getMyTopTracks();
};