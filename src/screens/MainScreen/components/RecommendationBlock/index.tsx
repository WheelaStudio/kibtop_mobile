import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import { ProductItem } from '@/components/ProductItem';
import { EstateItem } from '@/components/EstateItem';

import styles from './styles';
import { useFetchData } from '@/hooks/use-fetch-data';

interface Props {}

export const MainScreenRecommendationBlock: React.FC<Props> = ({}) => {
  const recommended = useFetchData('http://api.kibtop.com/v1/recommend/');


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
