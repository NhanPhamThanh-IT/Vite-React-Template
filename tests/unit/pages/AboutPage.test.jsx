import { render, screen } from '@testing-library/react';
import { renderWithRouter } from '../../setup/testHelpers.jsx';
import AboutPage from '../../../src/pages/AboutPage';

describe('AboutPage Component', () => {
  test('renders about page with correct title', () => {
    renderWithRouter(<AboutPage />);
    
    const titleElement = screen.getByRole('heading', { level: 1 });
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent('About Us');
  });

  test('displays all key features', () => {
    renderWithRouter(<AboutPage />);
    
    expect(screen.getByText('React Router for multi-page navigation')).toBeInTheDocument();
    expect(screen.getByText('Code splitting with lazy loading')).toBeInTheDocument();
    expect(screen.getByText('Theme toggle with context API')).toBeInTheDocument();
    expect(screen.getByText('Error boundary for graceful error handling')).toBeInTheDocument();
    expect(screen.getByText('Clean folder structure')).toBeInTheDocument();
    expect(screen.getByText('ESLint configuration')).toBeInTheDocument();
  });

  test('renders purpose section', () => {
    renderWithRouter(<AboutPage />);
    
    const headingElement = screen.getByRole('heading', { name: 'Our Purpose' });
    expect(headingElement).toBeInTheDocument();
    
    const purposeParagraph = screen.getByText(/This template serves as a starting point/);
    expect(purposeParagraph).toBeInTheDocument();
  });
});
