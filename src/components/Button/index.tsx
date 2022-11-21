import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

interface Props {
  children: string;
  ghost?: boolean;
  onPress: () => void;
  fullWidth?: boolean;
}

export const Button: React.FC<Props> = ({
  children,
  ghost,
  onPress,
  fullWidth = true,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        ghost && styles.ghostContainer,
        fullWidth && styles.fullWidth,
      ]}
      onPress={() => onPress()}
    >
      <Text style={[styles.title, ghost && styles.ghostTitle]}>{children}</Text>
    </TouchableOpacity>
  );
};
