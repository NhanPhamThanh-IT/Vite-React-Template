/**
 * Theme Provider Component Module
 * 
 * @module ThemeProvider
 * @description Provides theme context and state management for the entire application,
 * enabling dark mode, light mode, and system preference theme options.
 */
import { useState, useEffect } from 'react'
import { useLocalStorage } from '@hooks'
import { STORAGE_KEYS, THEME_MODES } from '@constants'
import { ThemeContext } from './ThemeContext'

/**
 * Theme Provider Component
 * 
 * Manages application theming by:
 * - Storing theme preference in localStorage for persistence across sessions
 * - Detecting system color scheme preference
 * - Applying the appropriate theme to the document
 * - Providing theme state and controls to the entire component tree
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components that will have access to the theme context
 * @returns {JSX.Element} ThemeContext Provider with children
 */
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useLocalStorage(STORAGE_KEYS.THEME, THEME_MODES.SYSTEM)
  const [systemTheme, setSystemTheme] = useState(THEME_MODES.LIGHT)
  
  // Detect system theme preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e) => setSystemTheme(e.matches ? 'dark' : 'light')
    
    // Set initial value
    setSystemTheme(mediaQuery.matches ? 'dark' : 'light')
    
    // Listen for changes
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])
  
  // Apply theme to document
  useEffect(() => {
    const activeTheme = theme === 'system' ? systemTheme : theme
    document.documentElement.setAttribute('data-theme', activeTheme)
  }, [theme, systemTheme])
  
  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(prevTheme => {
      if (prevTheme === THEME_MODES.LIGHT) return THEME_MODES.DARK
      if (prevTheme === THEME_MODES.DARK) return THEME_MODES.SYSTEM
      return THEME_MODES.LIGHT
    })
  }
  
  // Get current active theme (accounting for system preference)
  const currentTheme = theme === THEME_MODES.SYSTEM ? systemTheme : theme
  
  const value = {
    theme,
    currentTheme,
    toggleTheme,
    setTheme,
  }
  
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}
