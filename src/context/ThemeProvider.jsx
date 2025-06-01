// filepath: c:\Users\NhanPham\Desktop\Vite-React-Template\src\context\ThemeProvider.jsx
import { useState, useEffect } from 'react'
import { useLocalStorage } from '@hooks'
import { STORAGE_KEYS, THEME_MODES } from '@constants'
import { ThemeContext } from './ThemeContext'

/**
 * Theme Provider Component
 * 
 * Provides theme context and functionality to switch between light and dark modes
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
