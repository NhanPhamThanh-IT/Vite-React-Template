import { useEffect, useState } from 'react'
import styles from './HomePage.module.css'
import Button from '@components/Button'
import { useLocalStorage } from '@hooks'

export default function HomePage() {
  const [count, setCount] = useLocalStorage('home-page-count', 0)
  const [message, setMessage] = useState('')

  useEffect(() => {
    setMessage(`You've clicked the button ${count} times!`)
  }, [count])

  const handleIncrement = () => {
    setCount(prev => prev + 1)
  }

  const handleReset = () => {
    setCount(0)
  }

  return (
    <div className={styles.container}>
      <h1>Welcome to Vite React Template</h1>
      <p>This is a sample home page component</p>
      
      <div className={styles.counter}>
        <p>{message}</p>
        <div className={styles.buttons}>
          <Button variant="primary" onClick={handleIncrement}>Increment</Button>
          <Button variant="outline" onClick={handleReset}>Reset</Button>
        </div>
      </div>
      
      <section className={styles.section}>
        <h2>Features</h2>
        <ul>
          <li>Fast development with Vite</li>
          <li>React with modern features</li>
          <li>Folder structure ready for scaling</li>
          <li>ESLint configuration</li>
          <li>Path aliases for better imports</li>
        </ul>
      </section>
    </div>
  )
}
