import Image from 'next/image'
import React from 'react'

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

export const GalleryImage: React.FC<GalleryImageProps> = (props: GalleryImageProps) => {
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

  return (
    <React.Fragment>
      <Image
        src={src}
        width={1843}
        height={1382}
        layout={layout}
        loading={loading}
        onClick={onImageClick}
        alt={alt}
      />
    </React.Fragment>
  )
}
