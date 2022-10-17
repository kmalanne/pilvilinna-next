import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { SocialMediaLinkGroup } from '../SocialMediaLinkGroup/SocialMediaLinkGroup';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';

const phoneNumber = process.env.NEXT_PUBLIC__PHONE_NUMBER;
const phoneNumberDisplay = process.env.NEXT_PUBLIC__PHONE_NUMBER_DISPLAY;

const StyledHeader = styled.header`
  background-color: #f0f0f0;
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;

  @media (max-width: 768px) {
    height: 100px;
  }

  @media (max-width: 500px) {
    height: 130px;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  margin-right: 0px;
  margin-left: 0px;
  max-width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Link = styled.a`
  position: relative;
  top: 3px;
  color: #454545;
  text-decoration: none;

  &:hover {
    color: #000000;
    text-decoration: underline;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;

const LeftContainer = styled.div`
  > a:last-child {
    margin-left: 30px;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 5px;

    > a {
      margin-top: 5px;
      margin-bottom: 5px;
    }
  }
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 0px;
  }

  @media (max-width: 500px) {
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;

export const Header: React.FC = () => {
  return (
    <StyledHeader className="header">
      <StyledContainer>
        <LeftContainer>
          <Link href={`tel:${phoneNumber}`}>
            <Icon icon={faPhoneAlt} size="lg"></Icon>
            {phoneNumberDisplay}
          </Link>
          <Link href="mailto:&#105;&#110;&#102;&#111;&#064;&#112;&#105;&#108;&#118;&#105;&#108;&#105;&#110;&#110;&#097;&#110;&#108;&#101;&#105;&#112;&#111;&#109;&#111;&#046;&#102;&#105;">
            <Icon icon={faEnvelope} size="lg"></Icon>
            &#105;&#110;&#102;&#111;&#064;&#112;&#105;&#108;&#118;&#105;&#108;&#105;&#110;&#110;&#097;&#110;&#108;&#101;&#105;&#112;&#111;&#109;&#111;&#046;&#102;&#105;
          </Link>
        </LeftContainer>
        <RightContainer>
          <SocialMediaLinkGroup />
          <LanguageSwitcher />
        </RightContainer>
      </StyledContainer>
    </StyledHeader>
  );
};
