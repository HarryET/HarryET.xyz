export type Image = { path: string, width: number, height: number }

export type Props = {
    images: Image[]
}

export const ImagesGrid: React.FC<Props> = ({ images }) => {
    return (
        <div className="flex justify-center flex-wrap gap-4">
            {images.map((image, index) => (
                <img key={index} src={image.path} alt={image.path} className='max-w-1/4 max-h-96 md:max-h-56' />
            ))}
        </div>
    )
}
