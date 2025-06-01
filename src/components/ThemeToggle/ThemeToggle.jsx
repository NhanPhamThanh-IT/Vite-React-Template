import { useTheme } from '@context'
import styles from './ThemeToggle.module.css'

/**
 * ThemeToggle component for switching between light, dark, and system themes
 * @returns {JSX.Element}
 */
export default function ThemeToggle() {
  const { theme, toggleTheme, currentTheme } = useTheme()
  
  const getIcon = () => {
    switch (theme) {
      case 'light': 
        return (
          <svg className={styles.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 2V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M12 20V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M4 12L2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M22 12L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M19.7778 4.22266L17.5558 6.25424" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M4.22217 4.22266L6.44418 6.25424" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M6.44434 17.5557L4.22211 19.7779" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M19.7778 19.7773L17.5558 17.5551" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )
      case 'dark': 
        return (
          <svg className={styles.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.9548 13.9599C21.3145 14.0732 20.657 14.1307 19.9937 14.1307C14.5376 14.1307 10.1189 9.71196 10.1189 4.25588C10.1189 3.59255 10.1764 2.93506 10.2896 2.29474C6.29389 3.64803 3.44971 7.46478 3.44971 11.9751C3.44971 17.4311 7.86848 21.8499 13.3246 21.8499C17.8349 21.8499 21.6516 19.0057 23.0049 15.01C23.003 15.0041 22.8735 14.4046 21.9548 13.9599Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
          </svg>
        )
      case 'system': 
        return (
          <svg className={styles.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
            <path d="M11 4H13V7H11V4Z" fill="currentColor"/>
            <path d="M11 17H13V20H11V17Z" fill="currentColor"/>
            <rect x="6" y="9" width="12" height="6" rx="1" stroke="currentColor" strokeWidth="2"/>
          </svg>
        )
    }
  }

  return (
    <button 
      className={styles.toggle} 
      onClick={toggleTheme}
      title={`Current theme: ${theme} (${currentTheme}). Click to toggle.`}
      aria-label="Toggle theme"
    >
      {getIcon()}
      <span className={styles.label}>{theme}</span>
    </button>
  )
}
