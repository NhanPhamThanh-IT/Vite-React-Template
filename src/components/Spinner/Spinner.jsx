import styles from './Spinner.module.css'

/**
 * Spinner component for loading states
 * @param {Object} props - Component props
 * @param {string} [props.size='md'] - Size of the spinner (sm, md, lg)
 * @param {string} [props.color] - Custom color (defaults to primary color)
 * @returns {JSX.Element}
 */
export default function Spinner({ size = 'md', color }) {
  const spinnerClass = `${styles.spinner} ${styles[size] || ''}`
  
  const style = color ? { borderTopColor: color } : {}
  
  return <div className={spinnerClass} style={style} aria-label="Loading" />
}
