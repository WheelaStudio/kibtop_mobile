import React from 'react'
import {LogBox, Platform, StatusBar} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet'
import {AppNavigator} from '@/navigation'
import {colors} from '@/constants/colors'
import {Provider, rootStore} from '@/store/RootStore'

LogBox.ignoreAllLogs() //Ignore all log notifications
const App = () => {
  StatusBar.setBarStyle('dark-content')

  if (Platform.OS === 'android') {
    StatusBar.setBackgroundColor(colors.white)
  }

  return (
    <Provider value={rootStore}>
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer>
          <BottomSheetModalProvider>
            <AppNavigator />
          </BottomSheetModalProvider>
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  )
}

export default App
