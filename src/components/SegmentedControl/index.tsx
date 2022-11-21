import React, { useState } from 'react';
import { View } from 'react-native';

import { BaseSegmentedControl } from './components/BaseSegmentedControl';

import styles from './styles';

interface Props {
  options: string[];
}

export const SegmentedControl: React.FC<Props> = ({ options }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <View style={styles.container}>
      <BaseSegmentedControl
        segments={options}
        currentIndex={currentIndex}
        onChange={setCurrentIndex}
        containerMargin={15}
        tileStyle={styles.tile}
        activeTextStyle={styles.title}
        inactiveTextStyle={styles.title}
      />
    </View>
  );
};
