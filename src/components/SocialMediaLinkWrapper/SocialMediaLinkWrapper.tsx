import { Icon } from '@/components/Icon/Icon'
import { strings } from '@/utils/strings'

import styles from './socialMediaLinkWrapper.module.css'

export const SocialMediaLinkWrapper = () => (
  <div aria-label={strings.navigation.socialNavigation}>
    <a
      className={styles.Link}
      href="https://www.facebook.com/Pilvilinnan-leipomo-1541890192566923/"
      target="_blank"
      aria-label="Facebook"
    >
      <Icon name="facebook" size="2x" />
    </a>
    <a
      className={styles.Link}
      href="https://www.instagram.com/pilvilinnan_anna/"
      target="_blank"
      aria-label="Instagram"
    >
      <Icon name="instagram" size="2x" />
    </a>
  </div>
)
