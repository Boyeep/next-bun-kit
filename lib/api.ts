import axios from 'axios'

const configuredBaseUrl = process.env.NEXT_PUBLIC_API_URL?.trim()

export const baseURL = configuredBaseUrl || undefined

export const api = axios.create({
  baseURL,
  headers: {
    Accept: 'application/json',
  },
})

export default api
