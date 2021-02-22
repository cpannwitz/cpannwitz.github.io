import React from 'react'
import styled from 'styled-components'

import Logo from '../Logo/Logo'
import MobileMenu from '../MobileMenu/MobileMenu'
import ThemeToggle from '../Theme/ThemeToggle'
import RssLink from '../RssLink/RssLink'
import useIsMobile from '../useIsMobile'
import { NavbarLinksDesktop } from './NavbarLinks'
import Box from '../Box/Box'

interface NavbarProps {}

const Navbar = ({}: NavbarProps) => {
  const isMobile = useIsMobile()
  return (
    <StyledNavbar>
      <Logo />
      {isMobile ? <MobileMenu /> : <NavbarLinksDesktop />}
      <Box horizontal>
        <RssLink />
        <ThemeToggle />
      </Box>
    </StyledNavbar>
  )
}

export default Navbar

const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: var(--background-body);
  padding: 0 1rem;
  z-index: 3;
`
