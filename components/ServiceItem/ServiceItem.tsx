import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
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
  const { t } = useTranslation('component');

  const { icon, text, title } = props;

  return (
    <Item aria-label={t('service')}>
      <FontAwesomeIcon icon={icon} size="4x"></FontAwesomeIcon>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Item>
  );
};
