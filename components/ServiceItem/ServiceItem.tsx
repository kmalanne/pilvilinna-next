import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface IServiceItemProps {
  title: string;
  text: string;
  icon: IconDefinition;
}

const Item = styled.div`
  @media (max-width: 575px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Title = styled.h3`
  font-size: 24px;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-size: 18px;
  line-height: 26px;
  padding-right: 40px;

  @media (max-width: 575px) {
    padding-right: 0px;
  }
`;

export const ServiceItem: React.FC<IServiceItemProps> = (
  props: IServiceItemProps
) => {
  const { icon, text, title } = props;

  return (
    <Item aria-label="Service" className="service-item">
      <FontAwesomeIcon icon={icon} size="4x"></FontAwesomeIcon>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Item>
  );
};
