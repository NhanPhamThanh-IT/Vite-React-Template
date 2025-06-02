/**
 * Theme Context Module
 * 
 * @module ThemeContext
 * @description Creates and exports a React context for theme management
 */
import { createContext } from 'react'

/**
 * React Context for theme management
 * 
 * This context provides theme-related state and functions to components throughout the application.
 * When used with ThemeProvider, it offers the following values:
 * 
 * @typedef {Object} ThemeContextValue
 * @property {string} theme - Current theme setting ('light', 'dark', or 'system')
 * @property {string} currentTheme - Actual applied theme ('light' or 'dark'), accounting for system preferences
 * @property {Function} toggleTheme - Function to cycle through theme options (light → dark → system → light)
 * @property {Function} setTheme - Function to directly set the theme to a specific value
 * 
 * @type {React.Context<ThemeContextValue>}
 */
export const ThemeContext = createContext()
