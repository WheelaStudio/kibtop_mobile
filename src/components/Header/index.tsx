import React, { ReactNode } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ViewComponent,
  ViewProps,
  ViewStyle,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import HeaderArrowLeftIcon from '@/assets/icons/headerArrowLeftIcon.svg';

import styles from './styles';

export const Header = ({
  title,
  content,
}: {
  title: string;
  content?: ReactNode;
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.row}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.goBack()}
        >
          <HeaderArrowLeftIcon />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View>{content}</View>
    </View>
  );
};
