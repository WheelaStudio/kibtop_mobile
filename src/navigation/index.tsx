import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TabNavigator } from './TabNavigator';

const MainStack = createNativeStackNavigator();

export const AppNavigator: React.FC<{}> = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="MainScreen" component={TabNavigator} />
    </MainStack.Navigator>
  );
};
