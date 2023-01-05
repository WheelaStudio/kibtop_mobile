import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {FiltersScreen} from '@/screens/FiltersScreen'
import {CategoriesListScreen} from '@/screens/CategoriesListScreen'
import {TabNavigator} from './TabNavigator'
import {ListSelectListScreen} from '@/screens/ListSelectListScreen'

export type AppNavigatorParamsList = {
  MainScreen: undefined
  FiltersScreen: undefined
  CategoriesListScreen: {eventName: string}
  ListSelectListScreen: {title: string; data: string[]; eventName: string}
}

const MainStack = createNativeStackNavigator<AppNavigatorParamsList>()

export const AppNavigator: React.FC<{}> = () => {
  return (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
      <MainStack.Screen name="MainScreen" component={TabNavigator} />
      <MainStack.Screen name="FiltersScreen" component={FiltersScreen} />
      <MainStack.Screen
        name="CategoriesListScreen"
        component={CategoriesListScreen}
      />
      <MainStack.Screen
        name="ListSelectListScreen"
        component={ListSelectListScreen}
      />
    </MainStack.Navigator>
  )
}
