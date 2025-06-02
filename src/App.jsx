import { Suspense } from 'react'
import './styles/global.css'
import { Spinner } from '@components'
import { useRoutes } from 'react-router-dom'
import routes from './routes'

// Loading component
const PageLoader = () => (
  <div className="loading-container">
    <Spinner size="lg" />
  </div>
)

/**
 * Render a route with its element wrapped in Suspense
 */
const renderRoute = (Component) => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Component />
    </Suspense>
  )
}

/**
 * Create routes from configuration
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

function App() {
  const routeElements = useRoutes(createRoutesFromConfig(routes))
  return routeElements
}

export default App
