import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import { Container, Col, Row } from 'react-bootstrap';
import { SocialMediaLinkGroup } from '../SocialMediaLinkGroup/SocialMediaLinkGroup';

const phoneNumber = process.env.NEXT_PUBLIC__PHONE_NUMBER;
const phoneNumberDisplay = process.env.NEXT_PUBLIC__PHONE_NUMBER_DISPLAY;

const StyledContainer = styled(Container)`
  padding: 30px 50px;
`;

const StyledCol = styled(Col)`
  text-align: center;

  @media (max-width: 576px) {
    margin-bottom: 15px;
  }
`;

const ColHeading = styled.div`
  font-weight: 600;
`;

const ColText = styled.p`
  margin-bottom: 0px;
`;

const Link = styled.a`
  color: #454545;
  text-decoration: none;

  &:hover {
    color: #000000;
    text-decoration: underline;
  }
`;

const SocialMediaCol = styled(Col)`
  text-align: center;

  a {
    margin-left: 10px;
    line-height: 24px;
  }
`;

export const Footer: React.FC = () => {
  const { t } = useTranslation('contact');

  return (
    <footer>
      <StyledContainer>
        <Row>
          <StyledCol sm>
            <ColHeading>{t('email')}:</ColHeading>
            <Link href="mailto:&#105;&#110;&#102;&#111;&#064;&#112;&#105;&#108;&#118;&#105;&#108;&#105;&#110;&#110;&#097;&#110;&#108;&#101;&#105;&#112;&#111;&#109;&#111;&#046;&#102;&#105;">
              &#105;&#110;&#102;&#111;&#064;&#112;&#105;&#108;&#118;&#105;&#108;&#105;&#110;&#110;&#097;&#110;&#108;&#101;&#105;&#112;&#111;&#109;&#111;&#046;&#102;&#105;
            </Link>
          </StyledCol>
          <StyledCol sm>
            <ColHeading>{t('phone')}:</ColHeading>
            <Link href={`tel:${phoneNumber}`}>{phoneNumberDisplay}</Link>
          </StyledCol>
          <StyledCol sm>
            <ColHeading>{t('company')}:</ColHeading>
            <ColText>Pilvilinnan leipomo (2507048-6), Nokia</ColText>
            <Link href="https://www.oivahymy.fi/" target="_blank">
              oivahymy.fi
            </Link>
          </StyledCol>
        </Row>
        <Row>
          <SocialMediaCol>
            <SocialMediaLinkGroup />
          </SocialMediaCol>
        </Row>
      </StyledContainer>
    </footer>
  );
};
