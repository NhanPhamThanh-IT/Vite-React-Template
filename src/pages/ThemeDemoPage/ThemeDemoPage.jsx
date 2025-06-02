import { useState } from 'react'
import { useTheme } from '@context'
import { Button, Spinner } from '@components'
import styles from './ThemeDemoPage.module.css'

export default function ThemeDemoPage() {
  const { theme, currentTheme } = useTheme()
  const [count, setCount] = useState(0)
  
  return (
    <div className={styles.container}>
      <h1>Theme Demo Page</h1>
      <p className={styles.description}>
        This page demonstrates all UI components with the current theme: 
        <strong> {theme}</strong> (active: <strong>{currentTheme}</strong>)
      </p>
      
      <section className={styles.section}>
        <h2>Surfaces</h2>
        <div className={styles.surfaces}>
          <div className={styles.surface}>
            <h3>Background</h3>
            <div className={styles.surfaceDemo + ' ' + styles.bgDemo}></div>
            <code>--bg-color</code>
          </div>
          
          <div className={styles.surface}>
            <h3>Card</h3>
            <div className={styles.surfaceDemo + ' ' + styles.cardDemo}></div>
            <code>--card-bg</code>
          </div>
          
          <div className={styles.surface}>
            <h3>Input</h3>
            <div className={styles.surfaceDemo + ' ' + styles.inputDemo}></div>
            <code>--input-bg</code>
          </div>
        </div>
      </section>
      
      <section className={styles.section}>
        <h2>Typography</h2>
        <div className={styles.typography}>
          <div className={styles.textSample}>
            <h3>Headings</h3>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
          </div>
          
          <div className={styles.textSample}>
            <h3>Text Colors</h3>
            <p className={styles.primaryText}>Primary text color</p>
            <p className={styles.secondaryText}>Secondary text color</p>
            <p><code>Code formatting</code></p>
          </div>
        </div>
      </section>
      
      <section className={styles.section}>
        <h2>Components</h2>
        
        <div className={styles.componentSection}>
          <h3>Buttons</h3>
          <div className={styles.buttons}>
            <Button>Default Button</Button>
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline">Outline Button</Button>
          </div>
        </div>
        
        <div className={styles.componentSection}>
          <h3>Cards</h3>
          <div className={styles.cards}>
            <div className={styles.card}>
              <h4>Simple Card</h4>
              <p>This is a basic card component.</p>
            </div>
            
            <div className={styles.card}>
              <h4>Counter Card</h4>
              <p>Count: {count}</p>
              <div className={styles.cardActions}>
                <button onClick={() => setCount(count - 1)}>-</button>
                <button onClick={() => setCount(count + 1)}>+</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.componentSection}>
          <h3>Form Elements</h3>
          <div className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Text Input</label>
              <input type="text" id="name" placeholder="Enter text..." />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="options">Select</label>
              <select id="options">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
            
            <div className={styles.formGroup}>
              <label>
                <input type="checkbox" /> Checkbox
              </label>
            </div>
          </div>
        </div>
        
        <div className={styles.componentSection}>
          <h3>Loaders</h3>
          <div className={styles.loaders}>
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
          </div>
        </div>
      </section>
      
      <section className={styles.section}>
        <h2>Shadows & Effects</h2>
        <div className={styles.effects}>
          <div className={styles.shadow}>Light shadow</div>
          <div className={styles.shadowMedium}>Medium shadow</div>
          <div className={styles.shadowLarge}>Large shadow</div>
        </div>
      </section>
    </div>
  )
}
