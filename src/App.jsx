import { Suspense } from 'react'
import './styles/global.css'
import { Spinner } from '@components'
import { useRoutes } from 'react-router-dom'
import routes from './routes'

/**
 * PageLoader component that displays a loading spinner
 * 
 * Used as a fallback UI when routes are being loaded asynchronously
 * through React.Suspense. Provides visual feedback during code-splitting
 * lazy-loading operations.
 * 
 * @returns {JSX.Element} A spinner inside a container for loading indication
 */
const PageLoader = () => (
  <div className="loading-container">
    <Spinner size="lg" />
  </div>
)

/**
 * Renders a route component wrapped in React.Suspense
 * 
 * This function wraps each route component with Suspense to enable code-splitting
 * and lazy-loading. When the component is loading, it displays the PageLoader
 * as a fallback UI.
 *
 * @param {React.ComponentType} Component - The component to render for this route
 * @returns {JSX.Element} The component wrapped in Suspense with loading fallback
 */
const renderRoute = (Component) => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Component />
    </Suspense>
  )
}

/**
 * Creates React Router route objects from the application's route configuration
 * 
 * This function transforms the route configuration into the format expected by
 * React Router's useRoutes hook. It processes parent routes and their children,
 * applying the Suspense wrapper to each child route element.
 *
 * @param {Array<Object>} routes - The application's route configuration
 * @param {string} routes[].path - The URL path for this route
 * @param {React.ComponentType} routes[].element - The component to render for this route
 * @param {Array<Object>} [routes[].children] - Child routes for nested routing
 * @returns {Array<Object>} Route objects ready for React Router's useRoutes
 */
const createRoutesFromConfig = (routes) => {
  return routes.map((route) => {
    // Create the route element
    const RouteElement = route.element
    const routeElement = route.element
      ? <RouteElement />
      : null

    // Return the route configuration
    return {
      path: route.path,
      element: routeElement,
      children: route.children?.map((childRoute) => ({
        index: childRoute.index || false,
        path: childRoute.path,
        element: renderRoute(childRoute.element)
      }))
    }
  })
}

/**
 * Main App component that serves as the application's root component
 * 
 * This component uses React Router's useRoutes hook to render routes from the configuration.
 * The routes are created from the routes configuration object and transformed into
 * route objects that React Router can understand.
 * 
 * @returns {JSX.Element|null} The rendered route elements or null if no routes match
 */
function App() {
  const routeElements = useRoutes(createRoutesFromConfig(routes))
  return routeElements
}

export default App
