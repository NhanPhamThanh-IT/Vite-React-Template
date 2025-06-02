/**
 * Button Component Module
 * 
 * @module Button
 * @description A reusable, customizable button component with multiple variants and sizes
 */
import { useState } from 'react'
import styles from './Button.module.css'

/**
 * Button component with customizable appearance and ripple effect on hover
 * 
 * This component provides a styled button with different variants and sizes.
 * It includes an interactive hover effect and properly forwards all HTML button attributes.
 * 
 * @param {Object} props - Component props
 * @param {string} [props.variant='primary'] - Button visual style variant
 *   - 'primary': Main action button with accent color
 *   - 'secondary': Alternative action with neutral styling
 *   - 'outline': Button with outline border and transparent background
 * @param {string} [props.size='md'] - Button size
 *   - 'sm': Small button with reduced padding
 *   - 'md': Medium-sized button (default)
 *   - 'lg': Large button with increased padding and font size
 * @param {React.ReactNode} props.children - Button content/label
 * @param {Function} [props.onClick] - Click handler function
 * @param {Object} props.rest - Any additional HTML button attributes (spread to the button element)
 * @returns {JSX.Element} Rendered button component
 * @example
 * // Primary button (default)
 * <Button onClick={handleSubmit}>Submit</Button>
 * 
 * // Secondary button, small size
 * <Button variant="secondary" size="sm">Cancel</Button>
 * 
 * // Outline button with custom type
 * <Button variant="outline" type="reset">Reset</Button>
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
