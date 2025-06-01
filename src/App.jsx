import { Suspense, lazy } from 'react'
import './styles/global.css'
import { ThemeToggle, Spinner } from '@components'
import { APP_NAME } from '@constants'

// Lazy load HomePage for better performance
const HomePage = lazy(() => import('@pages/HomePage'))

function App() {
  return (
    <div className="app">
      <header>
        <h1>{APP_NAME}</h1>
        <div className="theme-toggle-container">
          <ThemeToggle />
        </div>
      </header>
      <main>
        <Suspense fallback={<div className="loading-container"><Spinner size="lg" /></div>}>
          <HomePage />
        </Suspense>
      </main>
      <footer>
        <p>© {new Date().getFullYear()} - Vite React Template</p>
      </footer>
    </div>
  )
}

export default App
