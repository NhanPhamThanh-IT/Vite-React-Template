import { useState, useCallback } from 'react'

/**
 * Custom hook for managing form state and validation
 * @param {Object} initialValues - Initial form values
 * @param {function} validateFn - Validation function that returns errors object
 * @param {function} onSubmit - Function to call on successful form submission
 * @returns {Object} Form state and handlers
 */
export default function useForm(initialValues = {}, validateFn = () => ({}), onSubmit = () => {}) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // Handle field changes
  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target
    const fieldValue = type === 'checkbox' ? checked : value
    
    setValues(prev => ({
      ...prev,
      [name]: fieldValue
    }))
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }, [errors])

  // Handle field blur (mark as touched)
  const handleBlur = useCallback((e) => {
    const { name } = e.target
    
    setTouched(prev => ({
      ...prev,
      [name]: true
    }))
    
    // Validate individual field on blur
    const fieldErrors = validateFn({ [name]: values[name] })
    if (fieldErrors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: fieldErrors[name]
      }))
    }
  }, [values, validateFn])

  // Reset the form
  const resetForm = useCallback(() => {
    setValues(initialValues)
    setErrors({})
    setTouched({})
    setSubmitted(false)
  }, [initialValues])

  // Submit the form
  const handleSubmit = useCallback(async (e) => {
    if (e) e.preventDefault()
    
    // Validate all fields
    const formErrors = validateFn(values)
    setErrors(formErrors)
    
    // Mark all fields as touched
    const touchedFields = Object.keys(values).reduce(
      (acc, key) => ({ ...acc, [key]: true }),
      {}
    )
    setTouched(touchedFields)
    
    // If there are no errors, submit the form
    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true)
      try {
        await onSubmit(values)
        setSubmitted(true)
      } catch (error) {
        console.error('Form submission error:', error)
      } finally {
        setIsSubmitting(false)
      }
    }
  }, [values, validateFn, onSubmit])

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    isSubmitting,
    submitted,
    setValues
  }
}
