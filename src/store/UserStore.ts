import AxiosAPI from '@/services/AxiosApi'
import {applySnapshot, flow, types} from 'mobx-state-tree'
import {BASE_URL} from '@/config'
import {Alert} from 'react-native'
import AuthService from '@/services/AuthService'
import {validateEmail} from '@/utils/validation'
import StorageService from '@/services/storage/StorageService'

type LoginResponseType = {
  access: string
  refresh: string
}

export const User = types
  .model({
    username: types.optional(types.string, ''),
    firstName: types.optional(types.string, ''),
    lastName: types.optional(types.string, ''),
    middleName: types.optional(types.string, ''),
    email: types.optional(types.string, ''),
    password: types.optional(types.string, ''),
    password2: types.optional(types.string, ''),
    passwordError: types.optional(types.boolean, false),
    emailError: types.optional(types.boolean, false),
    avatarUri: types.optional(types.string, ''),
    address: types.optional(types.string, ''),
    isLoading: types.optional(types.boolean, false),
    isLoggedIn: types.optional(types.boolean, false),
  })
  .actions(self => {
    const signup = flow(function* () {
      try {
        self.isLoading = true
        AxiosAPI.defaults.baseURL = BASE_URL
        setUsername(self.email.replace('@', '_'))
        const data = {
          username: self.username,
          email: self.email,
          password: self.password,
          re_password: self.password2,
          addres: self.address,
          upload_user: self.avatarUri,
        }
        yield AuthService.signup(data)
        self.isLoggedIn = true
      } catch (error) {
        self.isLoggedIn = false
        console.log('error on signup', JSON.stringify(error))
        // Alert.alert('Error', error?.message)
      } finally {
        self.isLoading = false
      }
    })
    const login = flow(function* () {
      try {
        self.isLoading = true
        const data = {
          username: self.username,
          password: self.password,
        }
        const response = yield AuthService.login(data)
        const {access, refresh}: LoginResponseType = response.data
        yield StorageService.setToken({
          access,
          refresh,
        })
        self.isLoggedIn = true
      } catch (error) {
        self.isLoggedIn = false
        console.log('error on login', JSON.stringify(error))
        Alert.alert('Error', error?.message)
      } finally {
        self.isLoading = false
      }
    })

    // const me = flow(function* () {
    //   try {
    //     self.isLoading = true
    //     const {data} = yield AccountService.getUser()
    //     self.firstName = data.firstName
    //     self.lastName = data.lastName
    //     self.email = data.email
    //   } catch (error) {
    //     console.error('error on get user', error)
    //   } finally {
    //     self.isLoading = false
    //   }
    // })

    const setFirstName = (firstName: string) => {
      self.firstName = firstName
    }
    const setUsername = (username: string) => {
      self.username = username
    }
    const setLastName = (lastName: string) => {
      self.lastName = lastName
    }
    const setEmail = (email: string) => {
      self.email = email
      if (email.length > 0) {
        self.emailError = !validateEmail(email)
      }
    }
    const setAddress = (address: string) => {
      self.address = address
    }
    const setPassword = (password: string) => {
      self.password = password
    }
    const setPassword2 = (password: string) => {
      self.password2 = password
      if (self.password && self.password.length > 0) {
        self.passwordError = self.password !== self.password2
      }
    }
    const setAvatarUri = (uri: string) => {
      self.avatarUri = uri
    }
    // const update = flow(function* update() {
    //   try {
    //     self.isLoading = true
    //     const userData = {
    //       firstName: self.firstName,
    //       lastName: self.lastName,
    //       note: self.phoneNumber,
    //       logoUrl: self.logoUrl,
    //       settings: {
    //         id: self.settings?.id,
    //         categoryType: self.settings?.categoryType,
    //       },
    //     }
    //     yield AccountService.updateUser(userData)
    //     // console.log('res', JSON.stringify(res))
    //   } catch (error) {
    //   } finally {
    //     self.isLoading = false
    //   }
    // })

    const reset = flow(function* () {
      try {
        applySnapshot(self, {
          firstName: '',
          lastName: '',
          middleName: '',
          email: '',
          password: '',
          password2: '',
          address: '',
          emailError: false,
          passwordError: false,
          avatarUri: '',
        })
      } catch (error: any) {
        Alert.alert('Ошибка', error.response.data.message)
      }
    })

    return {
      signup,
      login,
      reset,
      setFirstName,
      setUsername,
      setLastName,
      setEmail,
      setAddress,
      setPassword,
      setPassword2,
      setAvatarUri,
    }
  })
