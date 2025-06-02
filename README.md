# Vite React Template with React Router

A modern, feature-rich template for multi-page React applications built with Vite and React Router. This template provides a comprehensive starter kit with all the essential components and configurations for building professional React applications.

## Features

- ⚡️ **Fast Development & Building** - Powered by [Vite](https://vitejs.dev/) for lightning-fast HMR and optimized builds
- ⚛️ **React 19** - Utilizing the latest React features and improvements
- 🧭 **React Router v7** - Modern routing with the latest React Router DOM
- 🔄 **Hot Module Replacement** - Edit code and see changes instantly without losing state
- 📦 **Code Splitting** - Automatic code splitting with lazy-loaded components for better performance
- 🧩 **Component Architecture** - Well-organized component structure with clear separation of concerns
- 📄 **Page Structure** - Clean organization of page components with proper routing
- 🏗️ **Layout System** - Flexible, reusable layouts with nested routes
- 🎨 **CSS Modules** - Locally scoped CSS for components to avoid style conflicts
- 🌗 **Theme System** - Built-in light/dark mode with system preference detection
- 🧰 **Path Aliases** - Import using `@components`, `@pages`, etc. for cleaner imports
- 📝 **Modern ESLint** - Latest linting configuration with ES module support
- 🛠️ **Utility Functions** - Ready-to-use utility functions for common operations
- 🧪 **Testing Infrastructure** - Comprehensive testing setup with Vitest and Testing Library
- 🚀 **Custom Hooks** - Reusable hooks like `useLocalStorage` and `useForm`
- 📊 **API Service Layer** - Structured API service pattern for data fetching

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
├── public/                # Static public assets
│   └── favicon.svg
├── src/
│   ├── api/               # API clients and request helpers
│   ├── assets/            # Images, fonts and other assets
│   ├── components/        # Reusable UI components
│   │   ├── Button/
│   │   ├── ErrorBoundary/
│   │   ├── Navigation/
│   │   ├── Spinner/
│   │   ├── ThemeIndicator/
│   │   ├── ThemeToggle/
│   │   └── index.js
│   ├── constants/         # Application constants
│   │   ├── api.js
│   │   ├── app.js
│   │   └── index.js
│   ├── context/           # React Context providers
│   │   ├── ThemeContext/
│   │   ├── ThemeContext.jsx
│   │   ├── ThemeProvider.jsx
│   │   ├── useTheme.js
│   │   └── index.js
│   ├── hooks/             # Custom React hooks
│   │   ├── useForm.js
│   │   ├── useLocalStorage.js
│   │   └── index.js
│   ├── layouts/           # Layout components
│   │   ├── MainLayout/
│   │   └── index.js
│   ├── pages/             # Page components
│   │   ├── AboutPage/
│   │   ├── ContactPage/
│   │   ├── HomePage/
│   │   ├── NotFoundPage/
│   │   ├── ThemeDemoPage/
│   │   └── index.js
│   ├── services/          # API services
│   │   ├── userService.js
│   │   └── index.js
│   ├── store/             # State management (if needed)
│   ├── styles/            # Global styles
│   │   └── global.css
│   ├── utils/             # Utility functions
│   │   ├── dateUtils.js
│   │   └── index.js
│   ├── App.jsx            # Main App component
│   ├── main.jsx           # Entry point
│   └── routes.js          # Routes configuration
├── tests/
│   ├── setup/             # Test setup files
│   │   ├── setupTests.js
│   │   ├── testHelpers.js
│   │   └── __mocks__/
│   ├── unit/              # Unit tests
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── routes/
│   │   └── utils/
│   ├── README.md          # Testing documentation
│   └── vitest.config.js   # Vitest configuration
├── eslint.config.js       # ESLint configuration
├── index.html             # HTML template
├── jsconfig.json          # JavaScript configuration
├── package.json           # Project dependencies and scripts
└── vite.config.js         # Vite configuration
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for issues
- `npm test` - Run all tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Generate test coverage report
- `npm run test:components` - Run component tests only
- `npm run test:pages` - Run page tests only
- `npm run test:hooks` - Run hook tests only
- `npm run test:routes` - Run routing tests only

## Customization

### Adding Dependencies

```bash
npm install package-name
# or
yarn add package-name
# or 
pnpm add package-name
```

### Modifying Vite Config

Edit the `vite.config.js` file to customize your build process. The template comes with pre-configured path aliases for cleaner imports.

```javascript
// vite.config.js
export default defineConfig({
  // ...
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      // ...more aliases
    },
  },
})
```

## Routing System

The template uses React Router v7 for routing with a clean, maintainable structure:

### Routes Configuration

Routes are defined in `src/routes.js` for better organization:

```jsx
// src/routes.js
import { lazy } from 'react'
import { MainLayout } from '@layouts'

// Lazy load pages for better performance
const HomePage = lazy(() => import('@pages/HomePage'))
const AboutPage = lazy(() => import('@pages/AboutPage'))
const ContactPage = lazy(() => import('@pages/ContactPage'))
const NotFoundPage = lazy(() => import('@pages/NotFoundPage'))
const ThemeDemoPage = lazy(() => import('@pages/ThemeDemoPage'))

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
```

### Layout System

The template uses a layout system with React Router's Outlet component:

```jsx
// src/layouts/MainLayout/MainLayout.jsx
import { Outlet } from 'react-router-dom'
import { Navigation } from '@components'

export default function MainLayout() {
  return (
    <div className={styles.layout}>
      <header>
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

1. Create a new page component in `src/pages/YourNewPage/`:

```jsx
// src/pages/YourNewPage/YourNewPage.jsx
import styles from './YourNewPage.module.css'

export default function YourNewPage() {
  return (
    <div className={styles.page}>
      <h1>Your New Page</h1>
      <p>This is a new page in the application.</p>
    </div>
  )
}
```

2. Create an index.js file for easy imports:

```jsx
// src/pages/YourNewPage/index.js
export { default } from './YourNewPage'
```

3. Add the route to `src/routes.js`:

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

## Theme System

The template includes a complete theme system with light, dark, and system preference modes:

```jsx
// Using the theme
import { useTheme } from '@context'

function YourComponent() {
  const { currentTheme, toggleTheme } = useTheme()
  
  return (
    <div>
      <p>Current theme: {currentTheme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}
```

## Testing

The project uses Vitest and React Testing Library for testing. Test files are organized to mirror the source code structure.

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch 

# Generate coverage report
npm run test:coverage
```

### Writing Tests

```jsx
// Example component test
import { render, screen } from '@testing-library/react'
import { Button } from '@components'

describe('Button', () => {
  test('renders correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })
})
```

## License

This project is open source and available under the [MIT License](LICENSE).
