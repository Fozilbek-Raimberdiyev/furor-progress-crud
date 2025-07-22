import router from '@/router'
import { getLocalStorage, removeLocalStorage } from '@/utils'
import { showErrorToast } from '@/utils'
import axios from 'axios'
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  },
})
export const useGet = <TResponse>(url: string, query?: Record<string, string>) => {
  return api.get<TResponse>(url, { params: query })
}
export const usePost = <TResponse>(url: string, data?: unknown) => {
  return api.post<TResponse>(url, data)
}
export const useMultipartPost = <TResponse>(
  url: string,
  data?: unknown,
  config?: Record<string, unknown>,
) => {
  return api.post<TResponse>(url, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    ...config,
  })
}
export const usePut = <TResponse>(url: string, data?: unknown) => {
  return api.put<TResponse>(url, data)
}

export const useDelete = <TResponse>(url: string) => {
  return api.delete<TResponse>(url)
}

export const usePatch = <TResponse>(url: string, data?: unknown) => {
  return api.patch<TResponse>(url, data)
}

// Add a request interceptor to attach the access token to every request
api.interceptors.request.use((config) => {
  const token = getLocalStorage('accessToken')
  config.headers['Authorization'] = `Bearer ${token}`
  return config
})

// Add a response interceptor to handle token refresh

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    showErrorToast(error.message)
    if (error.response?.status === 401 && !error.config.url.includes('/v1/auth/login')) {
      const redirectFrom = window.location.pathname || '/dashboard'
      removeLocalStorage('accessToken')
      router.push(`/auth/login?redirectFrom=${redirectFrom}`)
    }
    return Promise.reject(error)
  },
)

export default api
