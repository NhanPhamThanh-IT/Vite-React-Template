import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../../src/context';
import HomePage from '../../../src/pages/HomePage';

describe('HomePage Component', () => {
  beforeEach(() => {
    render(
      <ThemeProvider>
        <HomePage />
      </ThemeProvider>
    );
  });

  test('renders welcome message', () => {
    expect(screen.getByText(/Welcome to Vite React Template/i)).toBeInTheDocument();
  });

  test('renders sample text', () => {
    expect(screen.getByText(/This is a sample home page component/i)).toBeInTheDocument();
  });
});
