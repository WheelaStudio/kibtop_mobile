import React from 'react';
import { TextInput, View } from 'react-native';

import HeaderSearchIcon from '@/assets/icons/headerSearchIcon.svg';
import { colors } from '@/constants/colors';

import styles from './styles';

interface Props {}

export const MainScreenHeaderSearchInput: React.FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <HeaderSearchIcon />
      <TextInput
        style={styles.input}
        placeholder="Search product"
        placeholderTextColor={colors.grayText}
      />
    </View>
  );
};
