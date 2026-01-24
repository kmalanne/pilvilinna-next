import Image from 'next/image'
import { Fragment } from 'react'

export type Layout = 'intrinsic' | 'fill' | 'responsive'
export type Loading = 'eager' | 'lazy'

export type GalleryImageProps = {
  id: number
  layout: Layout
  loading: Loading
  onClick?: (id: number) => void
  src: string
  alt?: string
}

export const GalleryImage = (props: GalleryImageProps) => {
  const { id, layout, loading, onClick, src, alt = 'image' } = props

  const onImageClick = (event: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>) => {
    if (event) {
      event.preventDefault()
      event.stopPropagation()
    }

    if (onClick) {
      onClick(id)
    }
  }

  const imageProps = layout === 'fill' 
    ? { fill: true, style: { objectFit: 'contain' as const } }
    : layout === 'responsive'
    ? { width: 1843, height: 1382, style: { width: '100%', height: 'auto' } }
    : { width: 1843, height: 1382 }

  return (
    <Fragment>
      <Image
        src={src}
        {...imageProps}
        loading={loading}
        onClick={onImageClick}
        alt={alt}
      />
    </Fragment>
  )
}
