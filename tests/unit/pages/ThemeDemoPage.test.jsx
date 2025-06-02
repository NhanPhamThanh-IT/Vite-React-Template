import { render, screen } from '@testing-library/react';
import { renderWithRouter } from '../../setup/testHelpers.jsx';
import ThemeDemoPage from '../../../src/pages/ThemeDemoPage';

describe('ThemeDemoPage Component', () => {  test('renders theme demo page title', () => {
    renderWithRouter(<ThemeDemoPage />);
    
    const titleElement = screen.getByRole('heading', { level: 1, name: 'Theme Demo Page' });
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent('Theme Demo Page');
  });

  test('displays surfaces section', () => {
    renderWithRouter(<ThemeDemoPage />);
    
    expect(screen.getByText('Surfaces')).toBeInTheDocument();
    expect(screen.getByText('Background')).toBeInTheDocument();
    expect(screen.getByText('Card')).toBeInTheDocument();
    expect(screen.getByText('Input')).toBeInTheDocument();
  });

  test('displays component samples', () => {
    renderWithRouter(<ThemeDemoPage />);
    
    expect(screen.getByText('Components')).toBeInTheDocument();
    expect(screen.getByText('Buttons')).toBeInTheDocument();
    expect(screen.getByText('Cards')).toBeInTheDocument();
    expect(screen.getByText('Form Elements')).toBeInTheDocument();
    expect(screen.getByText('Loaders')).toBeInTheDocument();
  });
});
