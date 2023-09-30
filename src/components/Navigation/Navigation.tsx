'use client'

import Image from 'next/legacy/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import type React from 'react'
import { Container as BSContainer, Nav as BSNav, Navbar as BSNavbar } from 'react-bootstrap'
import styled from 'styled-components'

import { AppRoute } from '../../utils/route'

const Nav = styled.nav`
  background-color: #ffffff;
  z-index: 10;

  ${(props) =>
    props.className === 'sticky'
      ? `
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 0 2px 2px -2px grey;
  `
      : ''};
`

const Container = styled(BSContainer)`
  @media (max-width: 1000px) {
    padding-left: 0px;
    padding-right: 0px;
  }

  @media (min-width: 576px) {
    max-width: 100%;
  }
`

const Navbar = styled(BSNavbar)`
  height: 85px;
  padding: 0;
`

const Brand = styled(BSNavbar.Brand)`
  position: absolute;
  left: 50%;
  top: 0px;
  transform: translateX(-50%);
  margin-right: 0px;
  z-index: 30;

  @media (max-width: 1000px) {
    position: relative;
    left: 0%;
    top: 0px;
    transform: translateX(-0%);
    padding-left: 15px;
  }
`

const ImageWrapper = styled.div`
  position: relative;
  width: 160px;
  height: 160px;

  & > span {
    border-radius: 50%;
    box-shadow: 0 5px 2px -2px grey;
  }

  @media (max-width: 1000px) {
    width: 60px;
    height: 60px;

    & > span {
      border-radius: 50%;
    }
  }
`

const Toggle = styled(BSNavbar.Toggle)`
  margin: 0px;
  padding: 0px;
  margin-top: 28px;
  margin-bottom: 28px;
  border: none;
  outline: none;

  @media (max-width: 1000px) {
    margin-right: 15px;
  }
`

const Collapse = styled(BSNavbar.Collapse)`
  background-color: #ffffff;
  z-index: 20;

  @media (max-width: 1000px) {
    margin-top: -1px;
  }
`

const NavLeft = styled(BSNav)`
  > div {
    margin-right: 30px;

    &:last-child {
      margin-right: 0px;
    }
  }

  @media (max-width: 1000px) {
    padding-left: 15px;

    > div {
      margin-right: 15px;

      &:last-child {
        margin-right: 15px;
      }
    }
  }
`

const NavRight = styled(BSNav)`
  margin-left: auto;

  > div {
    margin-left: 30px;

    &:first-child {
      margin-left: 0px;
    }
  }

  @media (max-width: 1000px) {
    > div {
      margin-left: 15px;
      margin-right: 15px;

      &:first-child {
        margin-left: 15px;
      }

      &:last-child {
        border-bottom: none;
      }
    }
  }
`

const StyledLink = styled.div`
  position: relative;

  > a {
    font-size: 18px;
    font-weight: 600;
    text-decoration: none;
    color: ${(props) => (props.className === 'active' ? '#5e5185' : '#454545')};
    transition: all 400ms linear 0s;

    &:after {
      content: '';
      display: block;
      width: ${(props) => (props.className === 'active' ? '24px' : '0px')};
      height: 2px;
      background: #5e5185;
      transition: all 400ms linear 0s;
    }

    &:hover {
      color: #5e5185;

      &:after {
        width: 24px;
      }
    }

    @media (max-width: 1000px) {
      line-height: 44px;
      border-bottom: 1px solid #dcdcdc;
    }
  }
`

const activeLink = (url: string, pathname: string) => (pathname === url ? 'active' : '')

export const Navigation: React.FC = () => {
  const pathname = usePathname()
  const [isExpanded, setExpanded] = useState(false)
  const [isSticky, setSticky] = useState(false)
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

    setSticky(window.pageYOffset > element.offsetTop)
  }

  const onToggle = () => {
    if (window.innerWidth <= 999) {
      setExpanded(!isExpanded)
    }
  }

  const renderNavContent = () => (
    <Container>
      <Navbar collapseOnSelect expanded={isExpanded} onToggle={onToggle} expand="lg">
        <Brand>
          <ImageWrapper>
            <Image layout="fill" src="/images/logo.jpg" alt="logo" />
          </ImageWrapper>
        </Brand>
        <Toggle aria-controls="responsive-navbar-nav" />
        <Collapse id="responsive-navbar-nav">
          <NavLeft className="mr-auto">
            <StyledLink className={activeLink(AppRoute.Home, pathname)}>
              <Link href={AppRoute.Home} onClick={onToggle}>
                home
              </Link>
            </StyledLink>
            <StyledLink className={activeLink(AppRoute.Assortment, pathname)}>
              <Link href={AppRoute.Assortment} onClick={onToggle}>
                assortment
              </Link>
            </StyledLink>
          </NavLeft>
          <NavRight>
            <StyledLink className={activeLink(AppRoute.Ordering, pathname)}>
              <Link href={AppRoute.Ordering} onClick={onToggle}>
                ordering
              </Link>
            </StyledLink>
            <StyledLink className={activeLink(AppRoute.Contact, pathname)}>
              <Link href={AppRoute.Contact} onClick={onToggle}>
                contact
              </Link>
            </StyledLink>
            <StyledLink>
              <Link href="http://annaj-sukkiajasuklaata.blogspot.com/">blog</Link>
            </StyledLink>
          </NavRight>
        </Collapse>
      </Navbar>
    </Container>
  )

  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
    <Nav ref={containerRef as any} className={isSticky ? 'sticky' : ''}>
      {renderNavContent()}
    </Nav>
  )
}
