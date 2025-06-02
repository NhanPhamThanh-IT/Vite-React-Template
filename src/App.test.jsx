// Test script for router setup
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from '@context';

// Helper function to render with router
const renderWithRouter = (ui, { route = '/' } = {}) => {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <ThemeProvider>
        {ui}
      </ThemeProvider>
    </MemoryRouter>
  );
}

describe('Router tests', () => {
  test('Home page renders correctly', async () => {
    renderWithRouter(<App />, { route: '/' });
    // Wait for lazy loaded component
    expect(await screen.findByText(/Welcome to Vite React Template/i)).toBeInTheDocument();
  });
  
  test('About page renders correctly', async () => {
    renderWithRouter(<App />, { route: '/about' });
    // Wait for lazy loaded component
    expect(await screen.findByText(/About Us/i)).toBeInTheDocument();
  });

  test('Contact page renders correctly', async () => {
    renderWithRouter(<App />, { route: '/contact' });
    // Wait for lazy loaded component
    expect(await screen.findByText(/Contact Us/i)).toBeInTheDocument();
  });

  test('NotFound page renders for invalid routes', async () => {
    renderWithRouter(<App />, { route: '/some-invalid-route' });
    // Wait for lazy loaded component
    expect(await screen.findByText(/404/i)).toBeInTheDocument();
    expect(await screen.findByText(/Page Not Found/i)).toBeInTheDocument();
  });
});
