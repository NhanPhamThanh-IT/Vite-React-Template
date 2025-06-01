# Vite React Template

A modern, feature-rich template for React applications built with Vite.

## Features

- ⚡️ **Fast Development & Building** - Powered by [Vite](https://vitejs.dev/)
- 🔄 **Hot Module Replacement** - Edit code and see changes instantly
- ⚛️ **React 19** - The latest React features
- 🧩 **Component Structure** - Organized component architecture
- 🎨 **CSS Modules** - Scoped CSS for components
- 🌗 **Theme System** - Light/dark mode with system preference detection
- 🧰 **Path Aliases** - Import using `@components`, `@hooks`, etc.
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
