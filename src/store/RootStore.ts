import {createContext, useContext} from 'react'
import {Instance, types} from 'mobx-state-tree'
import {User} from '@/store/UserStore'
import persist from 'mst-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

const RootStore = types.model({
  user: User,
})

let initialState = RootStore.create({
  user: {},
})

export const rootStore = initialState

persist('user', initialState.user, {
  storage: AsyncStorage,
  jsonify: true,
}).then(async () => {
  console.log('someStore has been hydrated')
})
export type RootInstance = Instance<typeof RootStore>
const RootStoreContext = createContext<null | RootInstance>(null)

export const Provider = RootStoreContext.Provider

export function useMst() {
  const store = useContext(RootStoreContext)
  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider')
  }
  return store
}
