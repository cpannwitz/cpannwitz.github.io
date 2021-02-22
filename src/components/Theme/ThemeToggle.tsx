import React, { useCallback, useContext } from 'react'
import styled from 'styled-components'
import { Sun, Moon } from 'react-feather'
import ThemeContext from './ThemeContext'

interface ThemeToggleProps {}

const ThemeToggle = ({}: ThemeToggleProps) => {
  const { isDark, toggleTheme } = useContext(ThemeContext)
  const toggleOnEnter = useCallback(e => e.key === 'Enter' && toggleTheme(), [isDark, toggleTheme])
  return (
    <StyledThemeToggle tabIndex={0} onKeyDown={toggleOnEnter}>
      <input id='toggle' hidden type='checkbox' onChange={toggleTheme} checked={isDark} />
      <StyledLabel htmlFor='toggle'>{!isDark ? <Moon /> : <Sun />}</StyledLabel>
    </StyledThemeToggle>
  )
}

export default ThemeToggle

const StyledThemeToggle = styled.div`
  /* apply link cursor  */
  cursor: pointer;

  /* on hover rotate icon, color, bgcolor */
  svg {
    color: #ccc;
    transition: 0.25s ease-in;
    transform-origin: 50% 50%;
    border-radius: 50%;
    padding: 0.5rem;
    &:hover {
      /* color: white; */
      transform: rotate(60deg) scale(1.1);
      background-color: var(--background);
    }
  }
`

const StyledLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
