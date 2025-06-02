import styles from './AboutPage.module.css'

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <h1>About Us</h1>
      <p>This is a sample About page for the Vite React Template using React Router.</p>
      
      <section className={styles.section}>
        <h2>Our Purpose</h2>
        <p>
          This template serves as a starting point for building multi-page React applications 
          with clean code organization and a reusable structure. It includes essential 
          features like routing, theming, error boundaries, and more.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Key Features</h2>
        <ul>
          <li>React Router for multi-page navigation</li>
          <li>Code splitting with lazy loading</li>
          <li>Theme toggle with context API</li>
          <li>Error boundary for graceful error handling</li>
          <li>Clean folder structure</li>
          <li>ESLint configuration</li>
        </ul>
      </section>
    </div>
  )
}
