import React, { useState } from 'react'

import styles from './gallery.module.css'
import type { ImageProps } from '../Image/Image'
import { NextImage as Image } from '../Image/Image'
import { Lightbox } from '../Lightbox/Lightbox'

export type GalleryProps = {
  images: Array<ImageProps>
}

export const Gallery: React.FC<GalleryProps> = (props: GalleryProps) => {
  const { images } = props

  const [currentImage, setCurrentImage] = useState(-1)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openLightbox = (imageId: number) => {
    if (document.documentElement) {
      document.documentElement.style.overflow = 'hidden'
    }

    setCurrentImage(imageId)
    setIsModalOpen(true)
  }

  const closeLightbox = () => {
    if (document.documentElement) {
      document.documentElement.style.overflow = 'scroll'
    }

    setCurrentImage(-1)
    setIsModalOpen(false)
  }

  const onClickImage = (imageId: number) => {
    openLightbox(imageId)
  }

  const onClickLightboxClose = () => {
    closeLightbox()
  }

  return (
    <React.Fragment>
      <div className={styles.Gallery} aria-label="image_gallery">
        {images.map((image: ImageProps, index) => (
          <span className={styles.ImageWrapper} key={index}>
            <Image
              id={index}
              layout="responsive"
              loading="lazy"
              onClick={onClickImage}
              src={image.src}
              alt={image.alt}
            />
          </span>
        ))}
      </div>
      {isModalOpen && (
        <Lightbox current={currentImage} images={images} onClose={onClickLightboxClose} />
      )}
    </React.Fragment>
  )
}
