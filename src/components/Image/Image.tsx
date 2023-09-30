import Image from 'next/legacy/image'
import React from 'react'

export type Layout = 'intrinsic' | 'fill' | 'responsive'
export type Loading = 'eager' | 'lazy'

export interface IImageProps {
  id: number
  layout: Layout
  loading: Loading
  onClick?: (id: number) => void
  src: string
}

export const NextImage: React.FC<IImageProps> = (props: IImageProps) => {
  const { id, layout, loading, onClick, src } = props

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
        alt="image"
      />
    </React.Fragment>
  )
}
