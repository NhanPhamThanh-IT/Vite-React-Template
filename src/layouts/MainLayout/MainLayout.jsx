/**
 * Main Layout Component Module
 * 
 * @module MainLayout
 * @description Primary layout component that structures the application's UI
 */
import { Outlet } from 'react-router-dom'
import styles from './MainLayout.module.css'
import { ThemeToggle, ThemeIndicator } from '@components'
import Navigation from '@components/Navigation'
import { APP_NAME } from '@constants'

/**
 * Main layout component that provides the application's UI structure
 * 
 * This component serves as the primary layout for the application, providing a consistent
 * UI structure across different pages. It includes:
 * - Header with application name and theme controls
 * - Navigation menu for routing
 * - Main content area where page components are rendered via Outlet
 * - Footer with copyright information
 * 
 * Used with React Router's nested routes to maintain consistent layout while
 * allowing page content to change dynamically.
 * 
 * @returns {JSX.Element} The layout component with header, navigation, content area, and footer
 */
export default function MainLayout() {
  return (
    <div className={styles.layout}>      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1>{APP_NAME}</h1>
          <div className={styles.themeToggleContainer} data-testid="theme-toggle-container">
            <div className={styles.themeControls}>
              <ThemeIndicator />
              <ThemeToggle />
            </div>
          </div>
        </div>
        <Navigation />
      </header>
      
      <main className={styles.main}>
        <Outlet />
      </main>
      
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} - Vite React Template</p>
      </footer>
    </div>
  )
}
