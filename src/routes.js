/**
 * Application routing configuration
 * 
 * This module defines the route structure for the entire application using
 * React Router v7 conventions. It uses React.lazy for code splitting and
 * lazy loading of page components to improve initial load performance.
 * 
 * Routes are organized hierarchically with the MainLayout as the parent
 * route container, allowing child routes to be rendered inside the layout.
 * 
 * @module routes
 */
import { lazy } from 'react'

// Layouts
import { MainLayout } from '@layouts'

// Lazy load pages for better performance
const HomePage = lazy(() => import('@pages/HomePage'))
const AboutPage = lazy(() => import('@pages/AboutPage'))
const ContactPage = lazy(() => import('@pages/ContactPage'))
const NotFoundPage = lazy(() => import('@pages/NotFoundPage'))
const ThemeDemoPage = lazy(() => import('@pages/ThemeDemoPage'))

/**
 * Main application routes configuration
 * 
 * The routes array defines all application routes in a nested structure:
 * - Root route ('/') uses MainLayout as the container
 * - Child routes define paths relative to their parent
 * - Each route specifies which component to render for that path
 * - The wildcard route ('*') renders the NotFoundPage for undefined routes
 */
const routes = [
  {
    path: '/',
    element: MainLayout,
    children: [
      { index: true, element: HomePage },
      { path: 'about', element: AboutPage },
      { path: 'contact', element: ContactPage },
      { path: 'theme-demo', element: ThemeDemoPage },
      { path: '*', element: NotFoundPage }
    ]
  }
]

export default routes
