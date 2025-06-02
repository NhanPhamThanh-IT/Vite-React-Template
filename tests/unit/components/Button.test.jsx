import { render, fireEvent, screen } from '@testing-library/react';
import Button from '../../../src/components/Button';

describe('Button Component', () => {
  test('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
  test('applies primary style when variant is primary', () => {
    const { container } = render(<Button variant="primary">Primary Button</Button>);
    // Với CSS modules, class sẽ được hash, nên chúng ta chỉ kiểm tra một phần của class name
    expect(container.firstChild.className).toContain('primary');
  });

  test('applies outline style when variant is outline', () => {
    const { container } = render(<Button variant="outline">Outline Button</Button>);
    expect(container.firstChild.className).toContain('outline');
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  test('is disabled when disabled prop is true', () => {
    const { container } = render(<Button disabled>Disabled Button</Button>);
    // Thay vì kiểm tra text element, kiểm tra button element
    expect(container.firstChild).toHaveAttribute('disabled');
  });
});
