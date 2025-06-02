# Testing Documentation

This directory contains all tests for the Vite React Template project. Tests are organized to mirror the src folder structure for easy navigation and maintenance.

## Directory Structure

```
tests/
├── setup/              # Test setup files
│   ├── setupTests.js   # Global test setup (runs before all tests)
│   └── testHelpers.js  # Reusable test helper functions
│
└── unit/               # Unit tests organized by component type
    ├── components/     # Tests for UI components
    ├── context/        # Tests for React context providers
    ├── hooks/          # Tests for custom hooks
    ├── layouts/        # Tests for layout components
    ├── pages/          # Tests for page components
    ├── routes/         # Tests for routing functionality
    └── utils/          # Tests for utility functions
```

## Running Tests

### Run all tests:
```bash
npm test
```

### Run tests in watch mode (for development):
```bash
npm run test:watch
```

### Run tests with coverage report:
```bash
npm run test:coverage
```

### Run specific test suites:
```bash
# Test only components
npm run test:components

# Test only pages
npm run test:pages

# Test only hooks
npm run test:hooks

# Test only routes
npm run test:routes
```

## Writing Tests

### Testing Components

```jsx
// tests/unit/components/ExampleComponent.test.jsx
import { render, screen } from '@testing-library/react';
import ExampleComponent from '../../../src/components/ExampleComponent';

describe('ExampleComponent', () => {
  test('renders correctly', () => {
    render(<ExampleComponent />);
    expect(screen.getByText('Example')).toBeInTheDocument();
  });
});
```

### Using Test Helpers

Import helper functions from the setup directory:

```jsx
import { renderWithTheme, renderWithRouter } from '../../setup/testHelpers';
```

## Best Practices

1. **Naming Convention**: Name test files with `.test.js` or `.test.jsx` extension, matching the name of the file being tested.

2. **Directory Structure**: Match the src directory structure in the tests folder.

3. **Test Coverage**: Aim for high test coverage, especially for critical components and utility functions.

4. **Test Independence**: Each test should be independent of others and clean up after itself.

5. **Mock External Dependencies**: Use vitest's mocking capabilities to mock external dependencies like APIs.

6. **Testing User Interactions**: Use `userEvent` from @testing-library/user-event for simulating user interactions more realistically.
