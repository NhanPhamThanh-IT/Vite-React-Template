/**
 * Formats a date according to the specified format
 * @param {Date|string|number} date - The date to format
 * @param {string} [format='default'] - The format to use ('default', 'short', 'long', 'relative')
 * @param {string} [locale='en-US'] - The locale to use for formatting
 * @returns {string} The formatted date string
 */
export function formatDate(date, format = 'default', locale = 'en-US') {
  const dateObj = date instanceof Date ? date : new Date(date)
  
  if (isNaN(dateObj.getTime())) {
    console.error('Invalid date provided to formatDate', date)
    return 'Invalid date'
  }
  
  switch (format) {
    case 'short':
      return new Intl.DateTimeFormat(locale, { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
      }).format(dateObj)
      
    case 'long':
      return new Intl.DateTimeFormat(locale, { 
        weekday: 'long',
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }).format(dateObj)
      
    case 'relative':
      return getRelativeTimeString(dateObj, locale)
      
    case 'default':
    default:
      return new Intl.DateTimeFormat(locale).format(dateObj)
  }
}

/**
 * Returns a relative time string (e.g., "2 hours ago", "in 3 days")
 * @param {Date} date - The date to compare against now
 * @param {string} [locale='en-US'] - The locale to use for formatting
 * @returns {string} The relative time string
 */
function getRelativeTimeString(date, locale = 'en-US') {
  // Calculate the time difference in seconds
  const now = new Date()
  const diffInSeconds = Math.floor((date - now) / 1000)
  const absoluteDiff = Math.abs(diffInSeconds)
  
  // Define time units in seconds
  const minute = 60
  const hour = minute * 60
  const day = hour * 24
  const week = day * 7
  const month = day * 30
  const year = day * 365
  
  // Determine the appropriate unit to use
  let unit, value
  
  if (absoluteDiff < minute) {
    unit = 'second'
    value = absoluteDiff
  } else if (absoluteDiff < hour) {
    unit = 'minute'
    value = Math.floor(absoluteDiff / minute)
  } else if (absoluteDiff < day) {
    unit = 'hour'
    value = Math.floor(absoluteDiff / hour)
  } else if (absoluteDiff < week) {
    unit = 'day'
    value = Math.floor(absoluteDiff / day)
  } else if (absoluteDiff < month) {
    unit = 'week'
    value = Math.floor(absoluteDiff / week)
  } else if (absoluteDiff < year) {
    unit = 'month'
    value = Math.floor(absoluteDiff / month)
  } else {
    unit = 'year'
    value = Math.floor(absoluteDiff / year)
  }
  
  // Create a relative time formatter
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' })
  
  // Return the relative time string, negating value if in the past
  return rtf.format(diffInSeconds < 0 ? -value : value, unit)
}
