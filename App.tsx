import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { AppNavigator } from '@/navigation';
import { colors } from '@/constants/colors';

const App = () => {
  StatusBar.setBarStyle('dark-content');
  StatusBar.setBackgroundColor(colors.white);

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
