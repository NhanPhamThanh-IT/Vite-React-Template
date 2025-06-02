/**
 * Navigation Component Module
 * 
 * @module Navigation
 * @description Main navigation component for the application
 */
import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.css'

/**
 * Navigation component for the main application menu
 * 
 * Renders the primary navigation links for the application. Uses React Router's
 * NavLink component to handle active states for the current route. The navigation
 * adjusts styling based on the active route.
 * 
 * @returns {JSX.Element} Navigation component with links to main application pages
 */
export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? styles.activeLink : undefined}
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? styles.activeLink : undefined}
          >
            About
          </NavLink>
        </li>        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? styles.activeLink : undefined}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/theme-demo" 
            className={({ isActive }) => isActive ? styles.activeLink : undefined}
          >
            Theme Demo
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
