import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { NextImage as Image, IImageProps } from '../Image/Image';

export interface ILightboxProps {
  current: number;
  images: Array<IImageProps>;
  onClose: () => void;
}

const Backdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  max-width: 1024px;
`;

const Button = styled.button`
  z-index: 1000;
  background: 0 0;
  border: 0;
  cursor: pointer;
  outline: none;
  overflow: hidden;

  &:focus {
    outline: none;
  }
`;

const PrevButton = styled(Button)`
  position: absolute;
  top: 48%;
  left: 10px;
  color: #ffffff;
`;

const NextButton = styled(Button)`
  position: absolute;
  top: 48%;
  right: 10px;
  color: #ffffff;
`;

const CloseButton = styled(Button)`
  position: absolute;
  right: 0;
  top: 5px;
`;

const CloseText = styled.span`
  position: absolute;
  width: 1px;
  overflow: hidden;
`;

export const Lightbox: React.FC<ILightboxProps> = (props: ILightboxProps) => {
  const {
    current,
    images,
    onClose,
  } = props;

  const { t } = useTranslation('component');

  const [currentImage, setCurrentImage] = useState(current);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, false);

    return () => {
      document.removeEventListener('keydown', handleKeyDown, false);
    };
  });

  const handleKeyDown = (event: KeyboardEvent): boolean => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    switch (event.key) {
      case "Enter":
      case "Esc":
        closeLightbox();
        return true;
      case "ArrowLeft":
        prevImage();
        return true;
      case "ArrowRight":
        nextImage();
        return true;
      default:
        return false;
    }
  };

  const onClickClose = (
    event: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>
  ): void => {
    event.preventDefault();

    closeLightbox();
  };

  const onClickBackdrop = (
    event: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>
  ): void => {
    event.preventDefault();

    if ((event.target as HTMLElement).id === 'lightbox') {
      closeLightbox();
    }
  };

  const onClickImage = () => {
    if (currentImage === images.length - 1) {
      return;
    }

    nextImage();
  };

  const closeLightbox = () => {
    onClose();
  };

  const onClickPrev = (
    event?: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>
  ) => {
    if (currentImage === 0) {
      return;
    }

    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    prevImage();
  };

  const onClickNext = (
    event?: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>
  ) => {
    if (currentImage === images.length - 1) {
      return;
    }

    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    nextImage();
  };

  const prevImage = () => setCurrentImage(currentImage - 1);
  const nextImage = () => setCurrentImage(currentImage + 1);

  const renderImage = () => {
    const image = images[currentImage];

    return (
      <Image
        id={currentImage}
        layout="intrinsic"
        loading="eager"
        onClick={onClickImage}
        src={image.src}
      />
    );
  };

  const renderPrevArrow = () => {
    if (currentImage === 0) {
      return null;
    }

    return (
      <PrevButton aria-label={t('previous_button')} onClick={onClickPrev}>
        <FontAwesomeIcon
          icon={faChevronLeft}
          size="2x"
          title={t('previous_button')}
        ></FontAwesomeIcon>
      </PrevButton>
    );
  };

  const renderNextArrow = () => {
    if (currentImage === images.length - 1) {
      return null;
    }

    return (
      <NextButton aria-label={t('next_button')} onClick={onClickNext}>
        <FontAwesomeIcon
          icon={faChevronRight}
          size="2x"
          title={t('next_button')}
        ></FontAwesomeIcon>
      </NextButton>
    );
  };

  return ReactDOM.createPortal(
    <Backdrop>
      <Container id="lightbox" onClick={onClickBackdrop}>
        <CloseButton
          aria-label={t('close_modal_button')}
          onClick={onClickClose}
        >
          <CloseText>Close</CloseText>
          <FontAwesomeIcon
            icon={faTimes}
            size="2x"
            inverse
            title={t('close_modal_button')}
          ></FontAwesomeIcon>
        </CloseButton>
        <Content>{renderImage()}</Content>
        {renderPrevArrow()}
        {renderNextArrow()}
      </Container>
    </Backdrop>,
    document.body
  );
};
