import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const Switcher = styled.button`
  margin-right: 4px;
  margin-left: 4px;
  color: #454545;
  border: none;
  cursor: pointer;

  &:hover {
    color: #000000;
    font-weight: bold;
  }
`;

export const LanguageSwitcher: React.FC = () => {
  const router = useRouter();

  const changeLanguage = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  const changeTo = router.locale === 'fi' ? 'en' : 'fi';

  return (
    <Switcher
      className="switcher"
      aria-label="Kielivalinta language change"
      onClick={() => changeLanguage(changeTo)}
    >
      {changeTo}
    </Switcher>
  );
};
