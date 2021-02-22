import React from 'react'
import DefaultLayout from './src/layouts/default-layout'

// ! see 'src/components/Theme/ThemeProvider.tsx' for usage details on the theme
const ThemeScript = () => {
  const calledFnc = `
  (function() {
    window.__onThemeChange = function () {}
    function setTheme(newTheme) {
      window.__theme = newTheme
      preferredTheme = newTheme
      document.body.className = newTheme
      window.__onThemeChange(newTheme)
    }
    var preferredTheme
    try {
      preferredTheme = localStorage.getItem('PREFERRED_THEME')
    } catch (err) {}
    window.__setPreferredTheme = function (newTheme) {
      setTheme(newTheme)
      try {
        localStorage.setItem('PREFERRED_THEME', newTheme)
      } catch (err) {}
    }
    var darkQuery = window.matchMedia('(prefers-color-scheme: dark)')
    darkQuery.addEventListener('change', function (e) {
      window.__setPreferredTheme(e.matches ? 'dark' : 'light')
    })
    setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'))
  })()
  `

  // eslint-disable-next-line react/no-danger
  return <script key='themeScript' dangerouslySetInnerHTML={{ __html: calledFnc }} />
}

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<ThemeScript key='themeScript' />)
}

/*  eslint-disable */
export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <DefaultLayout {...props}>{element}</DefaultLayout>
}
