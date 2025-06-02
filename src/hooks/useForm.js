/**
 * Form Management Hook Module
 * 
 * @module useForm
 * @description A custom React hook that provides comprehensive form state management
 * with validation, error tracking, and submission handling
 */
import { useState, useCallback } from 'react'

/**
 * Custom hook for advanced form state management with validation and submission handling
 * 
 * This hook provides a complete solution for managing form state, including:
 * - Field value tracking
 * - Field-level validation on blur
 * - Form-level validation on submit
 * - Tracking touched fields for validation display
 * - Submission state tracking
 * - Error state management
 * 
 * @param {Object} initialValues - Initial values for form fields
 * @param {Function} validateFn - Validation function that accepts values and returns an error object
 * @param {Function} onSubmit - Async function to handle form submission when validation passes
 * @returns {Object} Form utilities object with the following properties:
 * @returns {Object} .values - Current form values
 * @returns {Object} .errors - Current validation errors
 * @returns {Object} .touched - Object tracking which fields have been touched
 * @returns {Function} .handleChange - Change handler for form controls
 * @returns {Function} .handleBlur - Blur handler for form controls
 * @returns {Function} .handleSubmit - Submit handler that validates and calls onSubmit
 * @returns {Function} .resetForm - Function to reset form to initial values
 * @returns {boolean} .isSubmitting - Flag indicating if form is currently submitting
 * @returns {boolean} .submitted - Flag indicating if form was successfully submitted
 * @returns {Function} .setValues - Function to directly update form values
 * @example
 * // Basic usage
 * const { values, handleChange, handleSubmit } = useForm(
 *   { email: '', password: '' },
 *   values => {
 *     const errors = {};
 *     if (!values.email) errors.email = 'Email is required';
 *     return errors;
 *   },
 *   async (values) => {
 *     await api.login(values);
 *   }
 * );
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
