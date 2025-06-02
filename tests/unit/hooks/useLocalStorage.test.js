import { renderHook, act } from '@testing-library/react';
import { useLocalStorage } from '../../../src/hooks';

describe('useLocalStorage Hook', () => {
  beforeEach(() => {
    // Mock localStorage
    const localStorageMock = {
      getItem: vi.fn(),
      setItem: vi.fn(),
      removeItem: vi.fn(),
      clear: vi.fn(),
    };
    Object.defineProperty(window, 'localStorage', { value: localStorageMock });
  });

  test('returns initial value and setter function', () => {
    const { result } = renderHook(() => useLocalStorage('test-key', 'initial value'));
    expect(result.current[0]).toBe('initial value');
    expect(typeof result.current[1]).toBe('function');
  });

  test('updates value when setter is called', () => {
    const { result } = renderHook(() => useLocalStorage('test-key', 'initial value'));
    
    act(() => {
      result.current[1]('new value');
    });
    
    expect(result.current[0]).toBe('new value');
    expect(window.localStorage.setItem).toHaveBeenCalledWith('test-key', JSON.stringify('new value'));
  });

  test('handles function updates', () => {
    const { result } = renderHook(() => useLocalStorage('counter', 0));
    
    act(() => {
      result.current[1](prev => prev + 1);
    });
    
    expect(result.current[0]).toBe(1);
  });
});
