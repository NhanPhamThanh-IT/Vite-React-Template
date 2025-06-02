import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '../../../src/context';
import MainLayout from '../../../src/layouts/MainLayout';
import { APP_NAME } from '../../../src/constants';

// Mock the Outlet component since we can't render it directly
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    Outlet: () => <div data-testid="outlet-content">Page content goes here</div>
  };
});

describe('MainLayout Component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <ThemeProvider>
          <MainLayout />
        </ThemeProvider>
      </BrowserRouter>
    );
  });

  test('renders application name in header', () => {
    expect(screen.getByText(APP_NAME)).toBeInTheDocument();
  });

  test('renders navigation component', () => {
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('renders outlet content area', () => {
    expect(screen.getByTestId('outlet-content')).toBeInTheDocument();
    expect(screen.getByTestId('outlet-content')).toHaveTextContent('Page content goes here');
  });

  test('renders footer with current year', () => {
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`© ${currentYear}`))).toBeInTheDocument();
  });  test('renders theme toggle container', () => {
    // Kiểm tra xem container của theme toggle có tồn tại hay không
    expect(screen.getByTestId('theme-toggle-container')).toBeInTheDocument();
  });
});
