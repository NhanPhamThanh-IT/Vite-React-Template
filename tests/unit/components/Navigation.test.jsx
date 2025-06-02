import { screen } from '@testing-library/react';
import { renderWithMemoryRouter } from '../../setup/testHelpers.jsx';
import Navigation from '../../../src/components/Navigation';

describe('Navigation Component', () => {
  test('renders all navigation links', () => {
    renderWithMemoryRouter(<Navigation />);
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });
    test('home link has active class when on home route', () => {
    const { container } = renderWithMemoryRouter(<Navigation />, { route: '/' });
    
    // Find link element by text, then check if it has the active class
    const homeLink = screen.getByText('Home').closest('a');
    expect(homeLink.className).toContain('activeLink');
    
    // Other links should not be active
    const aboutLink = screen.getByText('About').closest('a');
    const contactLink = screen.getByText('Contact').closest('a');
    expect(aboutLink.className).not.toContain('activeLink');
    expect(contactLink.className).not.toContain('activeLink');
  });
    test('about link has active class when on about route', () => {
    const { container } = renderWithMemoryRouter(<Navigation />, { route: '/about' });
    
    const aboutLink = screen.getByText('About').closest('a');
    expect(aboutLink.className).toContain('activeLink');
    
    const homeLink = screen.getByText('Home').closest('a');
    const contactLink = screen.getByText('Contact').closest('a');
    expect(homeLink.className).not.toContain('activeLink');
    expect(contactLink.className).not.toContain('activeLink');
  });
    test('contact link has active class when on contact route', () => {
    const { container } = renderWithMemoryRouter(<Navigation />, { route: '/contact' });
    
    const contactLink = screen.getByText('Contact').closest('a');
    expect(contactLink.className).toContain('activeLink');
    
    const homeLink = screen.getByText('Home').closest('a');
    const aboutLink = screen.getByText('About').closest('a');
    expect(homeLink.className).not.toContain('activeLink');
    expect(aboutLink.className).not.toContain('activeLink');
  });
});
