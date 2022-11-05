import React from 'react';
import { ScrollView, View } from 'react-native';

import { MainScreenHeader } from './components/Header';
import { MainScreenPromoBlock } from './components/PromoBlock';
import { MainScreenRecommendationBlock } from './components/RecommendationBlock';

import styles from './styles';

export const MainScreen: React.FC<{}> = () => {
  return (
    <View style={styles.container}>
      <MainScreenHeader />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollViewContainer}
      >
        <MainScreenPromoBlock />
        <MainScreenRecommendationBlock />
      </ScrollView>
    </View>
  );
};
