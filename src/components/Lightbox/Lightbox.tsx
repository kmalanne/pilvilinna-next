import type React from 'react'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import { Icon } from '@/components/Icon/Icon'
import type { Asset } from '@/lib/types'

import styles from './lightbox.module.css'
import { GalleryImage as Image } from '../Gallery/GalleryImage/GalleryImage'

export type LightboxProps = {
  current: number
  images: Array<Asset>
  onClose: () => void
}

export const Lightbox = ({ current, images, onClose }: LightboxProps) => {
  const [currentImage, setCurrentImage] = useState(current)

  const closeLightbox = () => {
    onClose()
  }

  const prevImage = () => setCurrentImage(currentImage - 1)
  const nextImage = () => setCurrentImage(currentImage + 1)

  const handleKeyDown = (event: KeyboardEvent): boolean => {
    if (event) {
      event.preventDefault()
      event.stopPropagation()
    }

    switch (event.key) {
      case 'Enter':
      case 'Esc':
        closeLightbox()
        return true
      case 'ArrowLeft':
        prevImage()
        return true
      case 'ArrowRight':
        nextImage()
        return true
      default:
        return false
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, false)

    return () => {
      document.removeEventListener('keydown', handleKeyDown, false)
    }
  })

  const onClickClose = (
    event: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>,
  ): void => {
    event.preventDefault()

    closeLightbox()
  }

  const onClickBackdrop = (
    event: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>,
  ): void => {
    event.preventDefault()

    if ((event.target as HTMLElement).id === 'lightbox') {
      closeLightbox()
    }
  }

  const onClickImage = () => {
    if (currentImage === images.length - 1) {
      return
    }

    nextImage()
  }

  const onClickPrev = (event?: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>) => {
    if (currentImage === 0) {
      return
    }

    if (event) {
      event.preventDefault()
      event.stopPropagation()
    }

    prevImage()
  }

  const onClickNext = (event?: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>) => {
    if (currentImage === images.length - 1) {
      return
    }

    if (event) {
      event.preventDefault()
      event.stopPropagation()
    }

    nextImage()
  }

  const renderImage = () => {
    const image = images[currentImage]

    return (
      <Image
        id={currentImage}
        layout="intrinsic"
        loading="eager"
        onClick={onClickImage}
        src={image.url}
        alt={image.description}
      />
    )
  }

  const renderPrevArrow = () => {
    if (currentImage === 0) {
      return null
    }

    return (
      <button
        className={`${styles.Button} ${styles.PrevButton}`}
        aria-label="previous_button"
        onClick={onClickPrev}
      >
        <Icon name="chevron-left" size="2x" title="previous_button" />
      </button>
    )
  }

  const renderNextArrow = () => {
    if (currentImage === images.length - 1) {
      return null
    }

    return (
      <button
        className={`${styles.Button} ${styles.NextButton}`}
        aria-label="next_button"
        onClick={onClickNext}
      >
        <Icon name="chevron-right" size="2x" title="next_button" />
      </button>
    )
  }

  return createPortal(
    <div className={styles.Backdrop}>
      <div className={styles.Container} id="lightbox" onClick={onClickBackdrop}>
        <button
          className={`${styles.Button} ${styles.CloseButton}`}
          aria-label="close_modal_button"
          onClick={onClickClose}
        >
          <span className={styles.CloseText}>Close</span>
          <Icon name="xmark" size="2x" title="close_modal_button" />
        </button>
        <div className={styles.Content}>{renderImage()}</div>
        {renderPrevArrow()}
        {renderNextArrow()}
      </div>
    </div>,
    document.body,
  )
}
