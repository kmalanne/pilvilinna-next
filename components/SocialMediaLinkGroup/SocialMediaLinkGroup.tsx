import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const Link = styled.a`
  margin-left: 5px;
  margin-right: 5px;
  color: #454545;
  text-decoration: none;

  &:hover {
    color: #000000;
  }
`;

export const SocialMediaLinkGroup: React.FC = () => {
  const { t } = useTranslation('navigation');

  return (
    <div aria-label={t('social_navigation')}>
      <Link
        href="https://www.facebook.com/Pilvilinnan-leipomo-1541890192566923/"
        target={'_blank'}
        aria-label="Facebook"
      >
        <FontAwesomeIcon
          icon={faFacebookSquare}
          size="2x"
          aria-label="Facebook"
        ></FontAwesomeIcon>
      </Link>
      <Link
        href="https://www.instagram.com/pilvilinnan_anna/"
        target={'_blank'}
        aria-label="Instagram"
      >
        <FontAwesomeIcon
          icon={faInstagram}
          size="2x"
          aria-label="Instagram"
        ></FontAwesomeIcon>
      </Link>
    </div>
  );
};
