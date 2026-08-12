'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import { strings } from '@/utils/strings'

import styles from './navigation.module.css'
import { AppRoute } from '../../utils/route'

const activeLink = (url: string, pathname: string) => (pathname === url ? 'link-active' : '')

export const Navigation = () => {
  const pathname = usePathname()
  const [isExpanded, setExpanded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    const element = containerRef ? containerRef.current : undefined

    if (!element) {
      return
    }

    if (window.scrollY > element.offsetTop) {
      element.classList.add('sticky')
    } else {
      element.classList.remove('sticky')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  const onToggle = () => {
    if (window.innerWidth <= 999) {
      setExpanded(!isExpanded)
    }
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <nav className={styles.Nav} ref={containerRef as any}>
      <div className={styles.Container}>
        <div className={styles.Navbar}>
          <div className={styles.Brand}>
            <Link href={AppRoute.Home} className={styles.ImageWrapper} onClick={() => setExpanded(false)}>
              <Image
                fill={true}
                sizes="(max-width: 1000px) 60px, 160px"
                src="/images/logo2.jpg"
                alt={strings.navigation.logo}
              />
            </Link>
          </div>
          <button
            className={styles.Toggle}
            aria-controls="responsive-navbar-nav"
            aria-expanded={isExpanded}
            aria-label={strings.navigation.menu}
            onClick={onToggle}
          >
            <span className={styles.ToggleIcon}></span>
            <span className={styles.ToggleIcon}></span>
            <span className={styles.ToggleIcon}></span>
          </button>
          <div className={`${styles.Collapse} ${isExpanded ? styles.Show : ''}`} id="responsive-navbar-nav">
            <div className={styles.NavLeft}>
              <Link
                className={`${styles.Link} ${activeLink(AppRoute.Home, pathname)}`}
                href={AppRoute.Home}
                onClick={onToggle}
              >
                {strings.navigation.home}
              </Link>
              <Link
                className={`${styles.Link} ${activeLink(AppRoute.Assortment, pathname)}`}
                href={AppRoute.Assortment}
                onClick={onToggle}
              >
                {strings.navigation.assortment}
              </Link>
            </div>
            <div className={styles.NavRight}>
              <Link
                className={`${styles.Link} ${activeLink(AppRoute.Ordering, pathname)}`}
                href={AppRoute.Ordering}
                onClick={onToggle}
              >
                {strings.navigation.ordering}
              </Link>
              <Link
                className={`${styles.Link} ${activeLink(AppRoute.Contact, pathname)}`}
                href={AppRoute.Contact}
                onClick={onToggle}
              >
                {strings.navigation.contact}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
