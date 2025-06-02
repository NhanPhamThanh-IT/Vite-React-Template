/**
 * Theme Hook Module
 * 
 * @module useTheme
 * @description Custom React hook to access theme context values and functions
 */
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

/**
 * Custom hook to access and use the theme context
 * 
 * This hook provides a convenient way to access theme-related state and functions
 * from any component in the application. It verifies that the component using
 * this hook is inside a ThemeProvider before returning the context.
 * 
 * @returns {Object} Theme context object with the following properties:
 * @returns {string} .theme - Current theme setting ('light', 'dark', or 'system')
 * @returns {string} .currentTheme - Actual applied theme ('light' or 'dark')
 * @returns {Function} .toggleTheme - Function to cycle through theme options
 * @returns {Function} .setTheme - Function to directly set the theme
 * @throws {Error} If used outside of a ThemeProvider component
 */
export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
