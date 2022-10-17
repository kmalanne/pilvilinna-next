import React from 'react';
import styled from 'styled-components';

export interface IBannerProps {
  text: string;
  imgUrl: string;
}

const Container = styled.div`
  background-size: cover;
  background-position: center top;
  padding: 8rem 2rem;
  margin-bottom: 0px;
  border-radius: 0px;
  opacity: 0.8;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 3.5rem;
  font-weight: bold;
  color: #000000;
  opacity: 1;
`;

export const Banner: React.FC<IBannerProps> = (props: IBannerProps) => {
  const { imgUrl, text } = props;

  const style = {
    backgroundImage: `url(${imgUrl})`,
  };

  return (
    <Container
      aria-labelledby="title"
      className={`container-fluid`}
      style={style}
    >
      <Title id="title">{text}</Title>
    </Container>
  );
};
