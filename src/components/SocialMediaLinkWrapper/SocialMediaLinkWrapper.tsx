import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type React from 'react'

import { strings } from '@/utils/strings'

import styles from './socialMediaLinkWrapper.module.css'

export const SocialMediaLinkWrapper: React.FC = () => (
  <div aria-label={strings.navigation.socialNavigation}>
    <a
      className={styles.Link}
      href="https://www.facebook.com/Pilvilinnan-leipomo-1541890192566923/"
      target="_blank"
      aria-label="Facebook"
    >
      <FontAwesomeIcon icon={faFacebookSquare} size="2x" aria-label="Facebook"></FontAwesomeIcon>
    </a>
    <a
      className={styles.Link}
      href="https://www.instagram.com/pilvilinnan_anna/"
      target="_blank"
      aria-label="Instagram"
    >
      <FontAwesomeIcon icon={faInstagram} size="2x" aria-label="Instagram"></FontAwesomeIcon>
    </a>
  </div>
)
