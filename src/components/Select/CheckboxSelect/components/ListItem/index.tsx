import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { Checkbox } from '@/components/Checkbox';

import styles from './styles';

interface Props {
  title: string;
}

export const CheckboxSelectListItem: React.FC<Props> = ({ title }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setIsChecked((state) => !state)}
    >
      <Checkbox isChecked={isChecked} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
