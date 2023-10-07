import { faChevronLeft, faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type React from 'react'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import type { Asset } from '@/lib/types'

import styles from './lightbox.module.css'
import { GalleryImage as Image } from '../Gallery/GalleryImage'

export type LightboxProps = {
  current: number
  images: Array<Asset>
  onClose: () => void
}

export const Lightbox: React.FC<LightboxProps> = ({ current, images, onClose }: LightboxProps) => {
  const [currentImage, setCurrentImage] = useState(current)

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, false)

    return () => {
      document.removeEventListener('keydown', handleKeyDown, false)
    }
  })

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

  const closeLightbox = () => {
    onClose()
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

  const prevImage = () => setCurrentImage(currentImage - 1)
  const nextImage = () => setCurrentImage(currentImage + 1)

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
        <FontAwesomeIcon icon={faChevronLeft} size="2x" title="previous_button"></FontAwesomeIcon>
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
        <FontAwesomeIcon icon={faChevronRight} size="2x" title="next_button"></FontAwesomeIcon>
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
          <FontAwesomeIcon
            icon={faTimes}
            size="2x"
            inverse
            title="close_modal_button"
          ></FontAwesomeIcon>
        </button>
        <div className={styles.Content}>{renderImage()}</div>
        {renderPrevArrow()}
        {renderNextArrow()}
      </div>
    </div>,
    document.body,
  )
}
