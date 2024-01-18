import fs from 'fs';
import sharp from 'sharp';
import { SUPPORTED_EXT } from './constants';
import { Image } from '../components/imageGrid';

export const getImagesForDir = async (dir: string): Promise<Image[]> => {
    const images = fs.readdirSync(dir)
        .map(path => ({ path, stats: fs.statSync(`${dir}/${path}`) }))
        .filter(({ path }) => SUPPORTED_EXT.includes((path.split('.').pop() || '').toLowerCase()))
        .map(({ path, stats }) => ({ path, stats, timestamp: stats.mtime.getTime() }));

    const imagesWithMeta = await Promise.all(images.map(async ({ path }) => {
        const { width, height } = await sharp(`${dir.replace("./", "")}/${path}`).metadata();
        return { path: `${dir.replace("./public", "")}/${path}`, width, height } as Image;
    }));

    return imagesWithMeta;
}
