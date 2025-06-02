/**
 * Application entry point responsible for rendering the React application
 * 
 * This file sets up the React application's root rendering with necessary providers:
 * - StrictMode for highlighting potential problems
 * - ErrorBoundary for graceful error handling
 * - BrowserRouter for routing functionality
 * - ThemeProvider for theme context and management
 * 
 * @module main
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@context'
import ErrorBoundary from '@components/ErrorBoundary'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
)
