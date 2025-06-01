import { Component } from 'react'
import styles from './ErrorBoundary.module.css'

/**
 * ErrorBoundary component to catch JavaScript errors anywhere in the component tree
 * and display a fallback UI instead of crashing the whole app
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service
    this.setState({ errorInfo })
    console.error('ErrorBoundary caught an error', error, errorInfo)
  }

  resetError = () => {
    this.setState({ hasError: false, error: null, errorInfo: null })
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className={styles.errorContainer}>
          <h1>Something went wrong</h1>
          <details className={styles.errorDetails}>
            <summary>Show error details</summary>
            <pre>{this.state.error && this.state.error.toString()}</pre>
            {this.state.errorInfo && (
              <pre className={styles.componentStack}>
                {this.state.errorInfo.componentStack}
              </pre>
            )}
          </details>
          <div className={styles.actions}>
            <button
              onClick={() => window.location.reload()}
              className={styles.button}
            >
              Reload Page
            </button>
            <button
              onClick={this.resetError}
              className={styles.button}
            >
              Try Again
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
