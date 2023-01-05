import axios from 'axios'
import {BASE_URL} from '@/config'

interface SignupParams {
  username: string
  email: string
  phone?: string
  first_name?: string
  last_name?: string
  middle_name?: string
  addres?: string
  password: string
  re_password: string
  upload_user: string
}
interface LoginParams {
  username: string
  password: string
}

const AuthService = {
  signup(params: SignupParams) {
    try {
      const data = new FormData()
      if (params.upload_user.length > 0) {
        data.append('upload_user', {
          uri: params.upload_user,
          type: 'image/jpg',
          name: 'name.jpg',
        })
      }
      data.append('username', params.username)
      data.append('email', params.email)
      data.append('password', params.password)
      data.append('re_password', params.re_password)
      data.append('first_name', params.first_name)
      data.append('last_name', null)
      data.append('middle_name', null)
      data.append('addres', params.addres || null)
      console.log('form data', data)
      return axios.post(`${BASE_URL}/auth/users/`, data)
    } catch (e) {
      console.log('error login', e)
    }
  },
  login(loginData: LoginParams) {
    try {
      return axios.post(`${BASE_URL}/auth/jwt/create/`, loginData)
    } catch (e) {
      console.log('error login', e)
    }
  },
}

export default AuthService
