import React from 'react'
import styled from 'styled-components'
import { Menu as MenuIcon, X as XIcon } from 'react-feather'

interface MobileMenuToggleProps {
  active?: boolean
  onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined
}

const MobileMenuToggle = ({ active = false, onClick = () => {} }: MobileMenuToggleProps) => {
  return <StyledButton onClick={onClick}>{active ? <XIcon /> : <MenuIcon />}</StyledButton>
}

export default MobileMenuToggle

const StyledButton = styled.button`
  position: absolute;
  top: 84vh;
  right: 5vw;
  padding: 1rem;
  margin: 0;
  border-radius: 100%;
  box-shadow: 0 0 10px 0 #33333355;
  background-color: var(--background-alt);
`
