/**
 * Error Boundary Component Module
 * 
 * @module ErrorBoundary
 * @description A class component that catches JavaScript errors in child component trees
 */
import { Component } from 'react'
import styles from './ErrorBoundary.module.css'

/**
 * Error Boundary component that catches rendering errors in its child component tree
 * 
 * This component implements the React error boundary pattern using class component
 * lifecycle methods to catch errors during rendering, in lifecycle methods, and in
 * constructors of the whole tree below it. When an error occurs, it displays a fallback
 * UI instead of crashing the entire application.
 * 
 * Features:
 * - Catches and displays JavaScript errors in the component tree
 * - Shows detailed error information that can be expanded/collapsed
 * - Provides options to reload the page or retry rendering
 * - Prevents the entire application from crashing
 * 
 * @extends {Component}
 * @example
 * // Wrap your application or a section with the ErrorBoundary
 * <ErrorBoundary>
 *   <App />
 * </ErrorBoundary>
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }
  /**
   * Static lifecycle method called when an error is thrown in a descendant component
   * 
   * This method is called during the render phase, so side-effects are not permitted.
   * It should return an object to update state, causing a re-render with the fallback UI.
   * 
   * @static
   * @param {Error} error - The error that was thrown
   * @returns {Object} New state to trigger fallback UI rendering
   */
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error }
  }
  /**
   * Lifecycle method called after an error has been thrown by a descendant component
   * 
   * This method is called during the commit phase, so side-effects are permitted.
   * It's the ideal place to log error information to an error reporting service.
   * 
   * @param {Error} error - The thrown error
   * @param {Object} errorInfo - Contains componentStack with component trace information
   */
  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service
    this.setState({ errorInfo })
    console.error('ErrorBoundary caught an error', error, errorInfo)
  }
  /**
   * Resets the error state allowing the component to attempt rendering children again
   * 
   * This method clears all error-related state, which causes the component to re-render
   * and attempt to render its children again instead of the fallback UI.
   * 
   * @memberof ErrorBoundary
   */
  resetError = () => {
    this.setState({ hasError: false, error: null, errorInfo: null })
  }
  /**
   * Renders either the error UI or the children components
   * 
   * When an error is detected, renders a fallback UI with error details and recovery options.
   * Otherwise, renders the children as normal.
   * 
   * @returns {React.ReactNode} The fallback UI when an error occurs, or the children components
   */
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
