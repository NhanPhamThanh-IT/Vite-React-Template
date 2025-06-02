/**
 * Local Storage Hook Module
 * 
 * @module useLocalStorage
 * @description A custom React hook that provides state synchronized with localStorage
 */
import { useState, useEffect } from 'react'

/**
 * Custom hook for handling state that persists in localStorage
 * 
 * This hook works like React's useState but automatically stores and retrieves
 * values from localStorage, providing persistence across page reloads and browser sessions.
 * It handles serialization/deserialization of values via JSON and includes error handling
 * for localStorage access issues.
 * 
 * @template T
 * @param {string} key - The localStorage key to store/retrieve the value
 * @param {T} initialValue - Initial value to use if no value exists in localStorage
 * @returns {[T, React.Dispatch<React.SetStateAction<T>>]} A stateful value and a function to update it
 * @example
 * // Usage example
 * const [user, setUser] = useLocalStorage('user', { name: 'Guest' });
 * // Later: setUser({ name: 'John' }) - will update state and localStorage
 */
export default function useLocalStorage(key, initialValue) {
  // Get stored value from localStorage or use initialValue
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error)
      return initialValue
    }
  })

  // Update localStorage when storedValue changes
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue))
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error)
    }
  }, [key, storedValue])

  return [storedValue, setStoredValue]
}
