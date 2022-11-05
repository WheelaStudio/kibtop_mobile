import React from 'react';
import { Text, View } from 'react-native';

import ArrowRightIcon from '@/assets/icons/arrowRightIcon.svg';

import styles from './styles';

interface Props {}

export const MainScreenPromoBlockListItem: React.FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Promo Slider</Text>
      <Text style={styles.description}>
        Detailed description of the promotion
      </Text>
      <View style={styles.moreButtonContainer}>
        <Text style={styles.moreButtonTitle}>MORE</Text>
        <ArrowRightIcon />
      </View>
    </View>
  );
};
