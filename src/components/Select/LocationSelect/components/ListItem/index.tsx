import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

interface Props {
  title: string;
  noBorder?: boolean;
}

export const LocationSelectListItem: React.FC<Props> = ({
  title,
  noBorder,
}) => {
  return (
    <TouchableOpacity style={[styles.container, noBorder && styles.noBorder]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
