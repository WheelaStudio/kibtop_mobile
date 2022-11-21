import React from 'react';
import { View } from 'react-native';

import styles from './styles';

interface Props {}

export const Divider: React.FC<Props> = ({}) => {
  return <View style={styles.divider} />;
};
