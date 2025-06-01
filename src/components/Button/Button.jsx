import { useState } from 'react'
import styles from './Button.module.css'

/**
 * Button component with customizable appearance
 * @param {Object} props - Component props
 * @param {string} [props.variant='primary'] - Button variant (primary, secondary, outline)
 * @param {string} [props.size='md'] - Button size (sm, md, lg)
 * @param {React.ReactNode} props.children - Button content
 * @param {Function} props.onClick - Click handler
 * @returns {JSX.Element}
 */
export default function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  onClick, 
  ...props 
}) {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)

  const className = `${styles.button} ${styles[variant]} ${styles[size]}`
  
  return (
    <button 
      className={className}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <span className={styles.content}>
        {children}
      </span>
      {isHovered && <span className={styles.hoverEffect} />}
    </button>
  )
}
