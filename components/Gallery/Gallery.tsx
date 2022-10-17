import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import { NextImage as Image, IImageProps } from '../Image/Image';
import { Lightbox } from '../Lightbox/Lightbox';

export interface IGalleryProps {
  images: Array<IImageProps>;
}

const StyledGallery = styled.div`
  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 5px;
  padding: 10px;
`;

const ImageWrapper = styled.span`
  grid-area: span 1 / span 1;

  & > span {
    border-radius: 2px;
    cursor: pointer;
    filter: grayscale(0%);
    transition: all 0.5s ease;

    &:hover {
      filter: grayscale(80%);
    }
  }
`;

export const Gallery: React.FC<IGalleryProps> = (props: IGalleryProps) => {
  const { t } = useTranslation('component');

  const { images } = props;

  const [currentImage, setCurrentImage] = useState(-1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openLightbox = (imageId: number) => {
    if (document.documentElement) {
      document.documentElement.style.overflow = 'hidden';
    }

    setCurrentImage(imageId);
    setIsModalOpen(true);
  };

  const closeLightbox = () => {
    if (document.documentElement) {
      document.documentElement.style.overflow = 'scroll';
    }

    setCurrentImage(-1);
    setIsModalOpen(false);
  };

  const onClickImage = (imageId: number) => {
    openLightbox(imageId);
  };

  const onClickLightboxClose = () => {
    closeLightbox();
  };

  return (
    <React.Fragment>
      <StyledGallery aria-label={t('image_gallery')}>
        {images.map((image: IImageProps, index) => (
          <ImageWrapper key={index}>
            <Image
              id={index}
              layout="responsive"
              loading="lazy"
              onClick={onClickImage}
              src={image.src}
            />
          </ImageWrapper>
        ))}
      </StyledGallery>
      {isModalOpen && (
        <Lightbox
          current={currentImage}
          images={images}
          onClose={onClickLightboxClose}
        />
      )}
    </React.Fragment>
  );
};
