import DeviceStorage from './DeviceStorage'
import {DS_ACCESS_TOKEN, DS_REFRESH_TOKEN} from './constants'

type TokenType = {
  access: string
  refresh: string
}

class StorageService {
  async setToken({access, refresh}: TokenType) {
    await DeviceStorage.multiSet([
      [DS_ACCESS_TOKEN, access],
      [DS_REFRESH_TOKEN, refresh],
    ])
  }

  async getToken() {
    const token = await DeviceStorage.multiGet([
      DS_ACCESS_TOKEN,
      DS_REFRESH_TOKEN,
    ])

    return {
      accessToken: (token && token[0][1]) || '',
      refreshToken: (token && token[1][1]) || '',
    }
  }
}

export default new StorageService()
