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
 * This makes it easier to add new routes and organize them
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
