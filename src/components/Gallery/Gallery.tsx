import React, { useState } from 'react'

import type { Asset } from '@/lib/types'

import styles from './gallery.module.css'
import { GalleryImage as Image } from './GalleryImage'
import { Lightbox } from '../Lightbox'

export type GalleryProps = {
  images?: Array<Asset>
}

export const Gallery: React.FC<GalleryProps> = ({ images }: GalleryProps) => {
  const [currentImage, setCurrentImage] = useState(-1)
  const [isModalOpen, setIsModalOpen] = useState(false)

  if (!images) {
    return null
  }

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
        {images.map((image: Asset, index) => (
          <span className={styles.ImageWrapper} key={index}>
            <Image
              id={index}
              layout="responsive"
              loading="lazy"
              onClick={onClickImage}
              src={image.url}
              alt={image.description}
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
