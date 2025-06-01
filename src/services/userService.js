// filepath: userService.js
import { API_BASE_URL, API_ENDPOINTS } from '../constants/api'

/**
 * Example API service for user-related operations
 */
export default {
  /**
   * Get all users
   * @returns {Promise} Promise resolving to users data
   */
  getUsers: async () => {
    try {
      // In a real app, you would use axios or fetch here
      // const response = await axios.get(`${API_BASE_URL}${API_ENDPOINTS.USERS}`)
      // return response.data
      
      // Simulate API response for template
      return {
        success: true,
        data: [
          { id: 1, name: "John Doe", email: "john@example.com" },
          { id: 2, name: "Jane Smith", email: "jane@example.com" },
        ]
      }
    } catch (error) {
      console.error("Failed to fetch users:", error)
      return { 
        success: false, 
        error: error.message || "Failed to fetch users"
      }
    }
  },
  
  /**
   * Get user by ID
   * @param {number} userId - User ID
   * @returns {Promise} Promise resolving to user data
   */
  getUserById: async (userId) => {
    try {
      // In a real app, you would use axios or fetch here
      // const response = await axios.get(`${API_BASE_URL}${API_ENDPOINTS.USERS}/${userId}`)
      // return response.data
      
      // Simulate API response for template
      return {
        success: true,
        data: { id: userId, name: "John Doe", email: "john@example.com" }
      }
    } catch (error) {
      console.error(`Failed to fetch user ${userId}:`, error)
      return { 
        success: false, 
        error: error.message || "Failed to fetch user"
      }
    }
  },
  
  /**
   * Create user
   * @param {Object} userData - User data
   * @returns {Promise} Promise resolving to created user data
   */
  createUser: async (userData) => {
    try {
      // In a real app, you would use axios or fetch here
      // const response = await axios.post(`${API_BASE_URL}${API_ENDPOINTS.USERS}`, userData)
      // return response.data
      
      // Simulate API response for template
      return {
        success: true,
        data: { id: 3, ...userData }
      }
    } catch (error) {
      console.error("Failed to create user:", error)
      return { 
        success: false, 
        error: error.message || "Failed to create user"
      }
    }
  }
}
