/**
 * Theme Indicator Component Module
 * 
 * @module ThemeIndicator
 * @description A component that displays the current theme mode with visual indicators
 */
import { useTheme } from '@context'
import styles from './ThemeIndicator.module.css'

/**
 * Theme indicator component that displays the current active theme
 * 
 * This component shows the current theme setting (light, dark, or system) and 
 * the actual active theme when system preference is being used. It includes
 * a visual indicator (sun/moon icon) to represent the current theme state.
 * 
 * Features:
 * - Displays capitalized theme name
 * - Shows current effective theme when in system mode
 * - Provides visual indicator with appropriate icon
 * - Includes tooltip with detailed theme information
 * 
 * @returns {JSX.Element} Theme indicator component with icon and text
 */
export default function ThemeIndicator() {
  const { theme, currentTheme } = useTheme()
  
  const getThemeName = () => {
    if (theme === 'system') {
      return `System (${currentTheme})`
    }
    return theme.charAt(0).toUpperCase() + theme.slice(1)
  }
  
  const getThemeIcon = () => {
    const activeTheme = currentTheme === 'dark' ? 'dark' : 'light'
    
    return (
      <span className={`${styles.icon} ${styles[activeTheme]}`}>
        {activeTheme === 'dark' ? '🌙' : '☀️'}
      </span>
    )
  }
  
  return (
    <div className={styles.indicator} title={`Current theme: ${theme} (${currentTheme})`}>
      {getThemeIcon()}
      <span className={styles.text}>
        Theme: {getThemeName()}
      </span>
    </div>
  )
}
