import React, { useEffect, useState } from 'react'
import ThemeContext from './ThemeContext'
import GlobalStyles from './GlobalStyles'

interface ThemeProviderProps {
  children?: React.ReactNode
}

// ! see 'gatsby-ssr.js' for the window implementation and persistence techniques
// inspired by: https://github.com/gaearon/overreacted.io

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // set default context state theme value (dark mode)
  const [theme, setTheme] = useState('dark')
  // define a function to change the theme from light/dark to dark/light
  const toggleTheme = () => {
    // revert the theme
    const newTheme = theme === 'light' ? 'dark' : 'light'
    // set the context state with the reverted theme
    setTheme(newTheme)
    // persist the new theme state on 'window'
    ;(window as any).__setPreferredTheme(newTheme)
  }

  useEffect(() => {
    // when this context provider is mounted,
    // set the context state to any existing theme value
    setTheme((window as any).__theme)
    // provide an 'onchange' function, when any existing theme values change
    ;(window as any).__onThemeChange = () => {
      setTheme((window as any).__theme)
    }
  }, [])

  const isDark = theme === 'dark'
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme: toggleTheme }}>
      <GlobalStyles isDark={isDark} />
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
