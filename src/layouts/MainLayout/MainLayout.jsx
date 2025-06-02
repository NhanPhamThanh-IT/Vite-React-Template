import { Outlet } from 'react-router-dom'
import styles from './MainLayout.module.css'
import { ThemeToggle } from '@components'
import Navigation from '@components/Navigation'
import { APP_NAME } from '@constants'

export default function MainLayout() {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1>{APP_NAME}</h1>
          <div className={styles.themeToggleContainer}>
            <ThemeToggle />
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
