import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.css'

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
