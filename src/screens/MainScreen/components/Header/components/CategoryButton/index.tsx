import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { SvgProps } from 'react-native-svg';

import styles from './styles';

interface Props {
  title: string;
  onPress: () => void;
  IconComponent: React.FC<SvgProps>;
  singleButton?: boolean;
}

export const MainScreenHeaderCategoryButton: React.FC<Props> = ({
  title,
  onPress,
  IconComponent,
  singleButton,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, singleButton && styles.singleButton]}
      onPress={onPress}
    >
      <IconComponent width={30} height={30} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
