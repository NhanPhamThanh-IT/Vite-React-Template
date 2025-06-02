/**
 * API Constants Module
 * 
 * @module constants/api
 * @description Constants for API configuration including base URL, endpoints, and HTTP methods
 */

/**
 * Base URL for API requests
 * 
 * @constant {string}
 * @default 'https://api.example.com'
 */
export const API_BASE_URL = 'https://api.example.com'

/**
 * API endpoint paths relative to the base URL
 * 
 * @constant {Object}
 * @property {string} USERS - Users endpoint
 * @property {string} POSTS - Posts endpoint
 * @property {string} COMMENTS - Comments endpoint
 */
export const API_ENDPOINTS = {
  USERS: '/users',
  POSTS: '/posts',
  COMMENTS: '/comments'
}

/**
 * Standard HTTP request methods for API calls
 * 
 * @constant {Object}
 * @property {string} GET - HTTP GET method
 * @property {string} POST - HTTP POST method
 * @property {string} PUT - HTTP PUT method
 * @property {string} PATCH - HTTP PATCH method
 * @property {string} DELETE - HTTP DELETE method
 */
export const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE'
}
