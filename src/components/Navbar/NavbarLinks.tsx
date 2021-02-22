import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const menuItems: MenuItem[] = [
  {
    label: 'Blog',
    value: '/blog'
  },
  {
    label: 'Projects',
    value: '/projects'
  },
  {
    label: 'About',
    value: '/about'
  }
]

interface MenuItem {
  label: string
  value: string
}

export const NavbarLink = ({ label, value }: MenuItem) => {
  return (
    <StyledLink key={value} activeStyle={activeLinkStyles} partiallyActive={true} to={value}>
      {label}
    </StyledLink>
  )
}

export const NavbarLinksMobile = () => {
  const links = menuItems.map(NavbarLink)
  return <>{links}</>
}
export const NavbarLinksDesktop = () => {
  const links = menuItems.map(NavbarLink)
  return <Container>{links}</Container>
}

export default NavbarLinksDesktop

const Container = styled.div`
  width: 100%;
  margin-left: 2rem;
`

const StyledLink = styled(Link)`
  margin: 1rem 2rem;
  font-size: 120%;
`

const activeLinkStyles = { color: 'var(--links-active)' }
