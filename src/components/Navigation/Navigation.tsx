'use client'

import Image from 'next/legacy/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import type React from 'react'
import { Container as BSContainer, Nav as BSNav, Navbar as BSNavbar } from 'react-bootstrap'

import { strings } from '@/utils/strings'

import styles from './navigation.module.css'
import { AppRoute } from '../../utils/route'

const activeLink = (url: string, pathname: string) => (pathname === url ? 'active' : '')

export const Navigation: React.FC = () => {
  const pathname = usePathname()
  const [isExpanded, setExpanded] = useState(false)
  const containerRef = useRef<HTMLDivElement>()

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

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

  const onToggle = () => {
    if (window.innerWidth <= 999) {
      setExpanded(!isExpanded)
    }
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
    <nav className={styles.Nav} ref={containerRef as any}>
      <BSContainer className={styles.Container}>
        <BSNavbar
          className={styles.Navbar}
          collapseOnSelect
          expanded={isExpanded}
          onToggle={onToggle}
          expand="lg"
        >
          <BSNavbar.Brand className={styles.Brand}>
            <div className={styles.ImageWrapper}>
              <Image layout="fill" src="/images/logo.jpg" alt={strings.navigation.logo} />
            </div>
          </BSNavbar.Brand>
          <BSNavbar.Toggle className={styles.Toggle} aria-controls="responsive-navbar-nav" />
          <BSNavbar.Collapse className={styles.Collapse} id="responsive-navbar-nav">
            <BSNav className={`${styles.NavLeft} mr-auto`}>
              <div className={`${styles.Link} ${activeLink(AppRoute.Home, pathname)}`}>
                <Link href={AppRoute.Home} onClick={onToggle}>
                  {strings.navigation.home}
                </Link>
              </div>
              <div className={`${styles.Link} ${activeLink(AppRoute.Assortment, pathname)}`}>
                <Link href={AppRoute.Assortment} onClick={onToggle}>
                  {strings.navigation.assortment}
                </Link>
              </div>
            </BSNav>
            <BSNav className={styles.NavRight}>
              <div className={`${styles.Link} ${activeLink(AppRoute.Ordering, pathname)}`}>
                <Link href={AppRoute.Ordering} onClick={onToggle}>
                  {strings.navigation.ordering}
                </Link>
              </div>
              <div className={`${styles.Link} ${activeLink(AppRoute.Contact, pathname)}`}>
                <Link href={AppRoute.Contact} onClick={onToggle}>
                  {strings.navigation.contact}
                </Link>
              </div>
              <div className={styles.Link}>
                <Link href="http://annaj-sukkiajasuklaata.blogspot.com/">
                  {strings.navigation.blog}
                </Link>
              </div>
            </BSNav>
          </BSNavbar.Collapse>
        </BSNavbar>
      </BSContainer>
    </nav>
  )
}
