import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type React from 'react'
import styled from 'styled-components'

const Link = styled.a`
  margin-left: 5px;
  margin-right: 5px;
  color: #454545;
  text-decoration: none;

  &:hover {
    color: #000000;
  }
`

export const SocialMediaLinkGroup: React.FC = () => (
  <div aria-label="social_navigation">
    <Link
      href="https://www.facebook.com/Pilvilinnan-leipomo-1541890192566923/"
      target="_blank"
      aria-label="Facebook"
    >
      <FontAwesomeIcon icon={faFacebookSquare} size="2x" aria-label="Facebook"></FontAwesomeIcon>
    </Link>
    <Link href="https://www.instagram.com/pilvilinnan_anna/" target="_blank" aria-label="Instagram">
      <FontAwesomeIcon icon={faInstagram} size="2x" aria-label="Instagram"></FontAwesomeIcon>
    </Link>
  </div>
)
