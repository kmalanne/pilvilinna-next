import Image from 'next/legacy/image'
import type React from 'react'
import styled from 'styled-components'

export interface IBannerProps {
  text: string
  imgSrc: string
}

const Container = styled.div`
  position: relative;
  padding: 8rem 2rem;
  margin-bottom: 0px;
  border-radius: 0px;
  opacity: 0.8;

  > span {
    z-index: -10;
  }
`

const Title = styled.h1`
  text-align: center;
  font-size: 3.5rem;
  font-weight: bold;
  color: #000000;
  opacity: 1;
  z-index: 1;
`

export const Banner: React.FC<IBannerProps> = (props: IBannerProps) => {
  const { imgSrc, text } = props

  return (
    <Container aria-labelledby="title">
      <Image
        src={imgSrc}
        alt={text}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority={true}
      ></Image>
      <Title id="title">{text}</Title>
    </Container>
  )
}
