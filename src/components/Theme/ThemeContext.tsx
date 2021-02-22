import { createContext } from 'react'

interface ThemeContextProps {
  isDark: boolean
  toggleTheme: () => void
}
export const defaultContextValue: ThemeContextProps = {
  isDark: true,
  toggleTheme: () => {}
}
export const ThemeContext = createContext(defaultContextValue)

export default ThemeContext
