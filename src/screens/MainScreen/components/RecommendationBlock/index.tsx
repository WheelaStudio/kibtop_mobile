import React from 'react';
import { Text, View } from 'react-native';

import { ProductItem } from '@/components/ProductItem';
import { EstateItem } from '@/components/EstateItem';

import styles from './styles';

interface Props {}

export const MainScreenRecommendationBlock: React.FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommended</Text>
      <View style={styles.itemsContainer}>
        <ProductItem />
        <ProductItem />
        <ProductItem hasPriceInterval />
        <ProductItem />
        <EstateItem />
        <ProductItem />
        <ProductItem />
        <EstateItem isRentItem />
      </View>
    </View>
  );
};
