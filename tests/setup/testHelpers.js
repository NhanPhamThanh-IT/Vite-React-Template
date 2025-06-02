import { render } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '../../src/context';

/**
 * Hàm trợ giúp để render component với ThemeProvider
 */
export function renderWithTheme(ui, options = {}) {
  const Wrapper = ({ children }) => (
    <ThemeProvider>{children}</ThemeProvider>
  );
  return render(ui, { wrapper: Wrapper, ...options });
}

/**
 * Hàm trợ giúp để render component với BrowserRouter và ThemeProvider
 */
export function renderWithRouter(ui, options = {}) {
  const Wrapper = ({ children }) => (
    <BrowserRouter>
      <ThemeProvider>{children}</ThemeProvider>
    </BrowserRouter>
  );
  return render(ui, { wrapper: Wrapper, ...options });
}

/**
 * Hàm trợ giúp để render component với MemoryRouter và ThemeProvider
 * để kiểm tra các route cụ thể
 */
export function renderWithMemoryRouter(ui, { route = '/', ...options } = {}) {
  const Wrapper = ({ children }) => (
    <MemoryRouter initialEntries={[route]}>
      <ThemeProvider>{children}</ThemeProvider>
    </MemoryRouter>
  );
  return render(ui, { wrapper: Wrapper, ...options });
}

/**
 * Hàm trợ giúp cho việc delay trong tests
 */
export function waitFor(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
