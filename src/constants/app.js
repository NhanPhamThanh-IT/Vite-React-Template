/**
 * Application Constants Module
 * 
 * @module constants/app
 * @description Application-wide constants including app name, storage keys, theme modes, and layout breakpoints
 */

/**
 * Application name displayed in the UI
 * 
 * @constant {string}
 * @default 'Vite React Template'
 */
export const APP_NAME = 'Vite React Template'

/**
 * Storage keys for localStorage to ensure consistent naming across the application
 * 
 * @constant {Object}
 * @property {string} THEME - Key for storing theme preference
 * @property {string} USER_SETTINGS - Key for storing user settings
 * @property {string} AUTH_TOKEN - Key for storing authentication token
 */
export const STORAGE_KEYS = {
  THEME: 'app-theme',
  USER_SETTINGS: 'user-settings',
  AUTH_TOKEN: 'auth-token'
}

/**
 * Available theme modes for the application's theme system
 * 
 * @constant {Object}
 * @property {string} LIGHT - Light theme mode
 * @property {string} DARK - Dark theme mode
 * @property {string} SYSTEM - System preference-based theme mode
 */
export const THEME_MODES = {
  LIGHT: 'light',
  DARK: 'dark',
  SYSTEM: 'system'
}

/**
 * Breakpoints for responsive design in pixels
 * Used for consistent media queries across the application
 * 
 * @constant {Object}
 * @property {number} SM - Small devices breakpoint (640px)
 * @property {number} MD - Medium devices breakpoint (768px)
 * @property {number} LG - Large devices breakpoint (1024px)
 * @property {number} XL - Extra large devices breakpoint (1280px)
 * @property {number} XXL - Extra extra large devices breakpoint (1536px)
 */
export const BREAKPOINTS = {
  XS: '480px',   // Extra small devices
  SM: '640px',   // Small devices
  MD: '768px',   // Medium devices
  LG: '1024px',  // Large devices
  XL: '1280px',  // Extra large devices
  XXL: '1536px'  // Extra extra large devices
}
