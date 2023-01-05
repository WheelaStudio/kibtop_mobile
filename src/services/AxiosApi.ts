import axios, {AxiosError, AxiosInstance} from 'axios'
import Axios from 'axios'
import {BASE_URL} from '@/config'
import {createNavigationContainerRef} from '@react-navigation/native'
import StorageService from '@/services/storage/StorageService'
import AuthService from '@/services/AuthService'

const AxiosAPI: AxiosInstance = axios.create({
  baseURL: BASE_URL,
})

AxiosAPI.interceptors.request.use(
  async request => {
    // console.log(`${request.url}\n\n`);
    const {accessToken} = await StorageService.getToken()
    request.headers.Authorization = `Bearer ${accessToken}`
    return request
  },
  error => {
    return Promise.reject(error)
  },
)
export const navigationRef = createNavigationContainerRef()

const handleError = async (error: AxiosError): Promise<AxiosError> => {
  if (error.response?.status === 401) {
    await AuthService.logout()
    if (navigationRef.isReady()) {
      navigationRef.replace('Auth')
    }

    return Promise.reject(error)
  }
  return Promise.reject(error)
}

const refreshToken = async () => {
  const {refreshToken: oldRefreshToken} = await StorageService.getToken()
  try {
    const response = await Axios.post(`${BASE_URL}/auth/login/refresh-tokens`, {
      refreshToken: oldRefreshToken,
    })
    const {accessToken, refreshToken: newRefreshToken} = response.data
    await StorageService.setToken({
      accessToken,
      refreshToken: newRefreshToken,
    })
  } catch (e: any) {
    handleError(e)
    console.error('refreshToken error', e)
  }
}

// Response interceptor for API calls
AxiosAPI.interceptors.response.use(
  response => {
    return response
  },
  async error => {
    const originalRequest = error.config
    console.log('error response status', error.response)
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      await refreshToken()
      const {accessToken} = await StorageService.getToken()
      axios.defaults.headers.Authorization = `Bearer ${accessToken}`
      return AxiosAPI(originalRequest)
    }
    return Promise.reject(error)
  },
)

export default AxiosAPI
