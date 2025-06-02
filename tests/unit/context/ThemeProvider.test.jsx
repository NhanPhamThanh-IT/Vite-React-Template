import { render, screen, fireEvent, act } from '@testing-library/react';
import { vi } from 'vitest';
import { ThemeProvider, useTheme } from '../../../src/context';

// Test component that uses the theme context
const TestComponent = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <div data-testid="theme-value">{theme}</div>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

describe('ThemeProvider', () => {
  beforeEach(() => {
    // Reset localStorage mock before each test
    localStorage.clear();
    // Set default theme to light for testing
    localStorage.setItem('app-theme', JSON.stringify('light'));
  });

  test('provides default theme value', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
    
    // Default should be 'light' if we set it in localStorage
    expect(screen.getByTestId('theme-value')).toHaveTextContent('light');
  });
  test('toggles theme when toggleTheme is called', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
    
    // Default theme
    expect(screen.getByTestId('theme-value')).toHaveTextContent('light');
    
    // Click to toggle theme
    fireEvent.click(screen.getByText('Toggle Theme'));
    
    // Theme should now be 'dark'
    expect(screen.getByTestId('theme-value')).toHaveTextContent('dark');
    
    // Toggle again
    fireEvent.click(screen.getByText('Toggle Theme'));
    
    // Theme should be back to 'system'
    expect(screen.getByTestId('theme-value')).toHaveTextContent('system');
  });
  test('persists theme change to localStorage', () => {
    // Use a more direct approach to test localStorage
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
    
    // Initial theme should be light (from beforeEach)
    expect(localStorage.getItem('app-theme')).toBe(JSON.stringify('light'));
    
    // Toggle theme
    fireEvent.click(screen.getByText('Toggle Theme'));
    
    // Check if localStorage has been updated with the new theme
    expect(localStorage.getItem('app-theme')).toBe(JSON.stringify('dark'));
  });
});
