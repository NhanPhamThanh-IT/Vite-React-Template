/**
 * Spinner Component Module
 * 
 * @module Spinner
 * @description A loading spinner component with customizable size and color
 */
import styles from './Spinner.module.css'

/**
 * Spinner component for indicating loading states
 * 
 * This component renders an animated spinner with CSS animations to indicate
 * a loading state. It can be customized with different sizes and colors
 * to fit various UI contexts.
 * 
 * @param {Object} props - Component props
 * @param {string} [props.size='md'] - Size of the spinner
 *   - 'sm': Small spinner (16px)
 *   - 'md': Medium spinner (24px)
 *   - 'lg': Large spinner (48px)
 * @param {string} [props.color] - Custom color in any valid CSS color format
 *   When not specified, uses the application's primary color from CSS variables
 * @returns {JSX.Element} A spinner element with proper accessibility attributes
 * @example
 * // Default medium spinner
 * <Spinner />
 * 
 * // Large red spinner
 * <Spinner size="lg" color="#ff0000" />
 */
export default function Spinner({ size = 'md', color }) {
  const spinnerClass = `${styles.spinner} ${styles[size] || ''}`
  
  const style = color ? { borderTopColor: color } : {}
  
  return <div className={spinnerClass} style={style} aria-label="Loading" />
}
