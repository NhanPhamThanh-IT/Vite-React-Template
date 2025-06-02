# Vite React Template with React Router

A modern, feature-rich template for multi-page React applications built with Vite and React Router.

## Features

- ⚡️ **Fast Development & Building** - Powered by [Vite](https://vitejs.dev/)
- 🔄 **Hot Module Replacement** - Edit code and see changes instantly
- ⚛️ **React 19** - The latest React features
- 🧭 **React Router v7** - Modern routing for multi-page applications
- 📦 **Code Splitting** - Lazy-loaded components for better performance
- 🧩 **Component Structure** - Organized component architecture
- 📄 **Page Structure** - Clean separation of page components
- 🏗️ **Layout System** - Reusable layouts with nested routes
- 🎨 **CSS Modules** - Scoped CSS for components
- 🌗 **Theme System** - Light/dark mode with system preference detection
- 🧰 **Path Aliases** - Import using `@components`, `@pages`, etc.
- 📝 **ESLint** - Modern linting setup
- 🛠️ **Utility Functions** - Common helpers for dates and more
- 🚀 **Ready-to-use Hooks** - Custom hooks like `useLocalStorage`
- 📊 **API Services** - Example API service structure

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone this repository:
   ```bash
   # Using template repository feature
   # Click "Use this template" on the GitHub repository page

   # Or clone directly
   git clone https://github.com/yourusername/vite-react-template.git my-project
   cd my-project
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   # or
   pnpm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

## Project Structure

```
vite-react-template/
├── public/             # Static public assets
│   └── favicon.svg
├── src/
│   ├── api/            # API clients and request helpers
│   ├── assets/         # Images, fonts and other assets
│   ├── components/     # Reusable UI components
│   │   └── Button/
│   │       ├── Button.jsx
│   │       ├── Button.module.css
│   │       └── index.js
│   ├── constants/      # Application constants
│   ├── context/        # React Context providers
│   │   └── ThemeContext.jsx
│   ├── hooks/          # Custom React hooks
│   │   └── useLocalStorage.js
│   ├── pages/          # Page components
│   │   └── HomePage/
│   │       ├── HomePage.jsx
│   │       └── HomePage.module.css
│   ├── services/       # API services
│   │   └── userService.js
│   ├── store/          # State management (for Redux/Zustand)
│   ├── styles/         # Global styles
│   │   └── global.css
│   ├── utils/          # Utility functions
│   │   └── dateUtils.js
│   ├── App.jsx         # Main App component
│   └── main.jsx        # Entry point
├── eslint.config.js    # ESLint configuration
├── index.html          # HTML template
├── package.json        # Project dependencies and scripts
└── vite.config.js      # Vite configuration
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for issues

## Customization

### Adding Dependencies

```bash
npm install package-name
# or
yarn add package-name
```

### Modifying Vite Config

Edit the `vite.config.js` file to customize your build process.

## Routing System

The template uses React Router v7 for routing with a clean, maintainable structure:

### Routes Configuration

Routes are defined in `src/routes.js` for better organization:

```jsx
// src/routes.js
import { lazy } from 'react'
import { MainLayout } from '@layouts'

const HomePage = lazy(() => import('@pages/HomePage'))
const AboutPage = lazy(() => import('@pages/AboutPage'))
// ...

const routes = [
  {
    path: '/',
    element: MainLayout,
    children: [
      { index: true, element: HomePage },
      { path: 'about', element: AboutPage },
      // ...
    ]
  }
]

export default routes
```

### Code Splitting

Pages are lazy-loaded for better performance:

```jsx
// src/App.jsx
const renderRoute = (Component) => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Component />
    </Suspense>
  )
}
```

### Layout System

The template uses a layout system with React Router's Outlet component:

```jsx
// src/layouts/MainLayout/MainLayout.jsx
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div className={styles.layout}>
      <header>
        {/* Header content */}
        <Navigation />
      </header>
      
      <main>
        <Outlet /> {/* Page content renders here */}
      </main>
      
      <footer>{/* Footer content */}</footer>
    </div>
  )
}
```

### Adding New Pages

1. Create a new page component in `src/pages/YourNewPage/`
2. Add the route to `src/routes.js`:

```jsx
// In routes.js
const YourNewPage = lazy(() => import('@pages/YourNewPage'))

const routes = [
  {
    path: '/',
    element: MainLayout,
    children: [
      // Existing routes...
      { path: 'your-new-path', element: YourNewPage },
    ]
  }
]
```
