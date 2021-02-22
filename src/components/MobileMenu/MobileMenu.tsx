import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import MobileMenuToggle from './MobileMenuToggle'
import { NavbarLinksMobile } from '../Navbar/NavbarLinks'

interface MobileMenuProps {
  children?: React.ReactNode
}

const MobileMenu = ({ children = <NavbarLinksMobile /> }: MobileMenuProps) => {
  const [menuOpen, setMenuOpen] = useState(false)
  function toggleMenu() {
    setMenuOpen(state => !state)
  }

  const onBackdropClick = useCallback(() => {
    toggleMenu()
  }, [])
  return (
    <>
      {menuOpen && (
        <Container>
          <Backdrop onClick={onBackdropClick}>
            <Menu>{children}</Menu>
          </Backdrop>
        </Container>
      )}
      <MobileMenuToggle active={menuOpen} onClick={toggleMenu} />
    </>
  )
}

export default MobileMenu

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`
const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000000dd;
  @supports (backdrop-filter: blur(5px)) {
    & {
      background-color: unset;
      backdrop-filter: blur(5px) brightness(0.15);
    }
  }
`

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  height: 82%;

  & > * {
    font-size: 160%;
  }
`
