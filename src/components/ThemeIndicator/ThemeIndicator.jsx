import { useTheme } from '@context'
import styles from './ThemeIndicator.module.css'

/**
 * ThemeIndicator component - displays the current theme mode
 * @returns {JSX.Element}
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
