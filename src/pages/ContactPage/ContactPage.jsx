/**
 * Contact Page Component Module
 * 
 * @module ContactPage
 * @description Contact form page component with form state management
 */
import { useState } from 'react'
import styles from './ContactPage.module.css'
import Button from '@components/Button'

/**
 * Contact page component with a functional contact form
 * 
 * This page provides a contact form with basic validation and submission handling.
 * It demonstrates form state management, field validation, and simulated form submission
 * with loading and success states. In a production environment, you would replace
 * the setTimeout with an actual API call to your backend service.
 * 
 * Form features:
 * - Field validation with HTML5 constraints
 * - Form state management with React hooks
 * - Loading state during submission
 * - Success message after submission
 * - Form reset after successful submission
 * 
 * @returns {JSX.Element} The rendered contact page with form
 */
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you would send the form data to your backend
    console.log('Form submitted:', formData)
    
    // Simulate form submission
    setStatus('submitting')
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    }, 1500)
  }

  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <p>Have questions or feedback? Reach out to us using the form below.</p>
      
      {status === 'success' && (
        <div className={styles.successMessage}>
          Thank you for your message! We'll get back to you soon.
        </div>
      )}
      
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={status === 'submitting'}
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={status === 'submitting'}
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
            disabled={status === 'submitting'}
          />
        </div>
        
        <Button 
          type="submit" 
          variant="primary" 
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </div>
  )
}
