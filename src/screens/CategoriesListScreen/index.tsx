import React from 'react';
import { DeviceEventEmitter, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Header } from '@/components/Header';
import { List } from '@/components/List';

import { CategoriesList, IFilter } from '@/constants/categories';

import styles from './styles';

interface SubcategoriesParams {
  subcategories: IFilter[];
}

export const CategoriesListScreen: React.FC<{}> = () => {
  const navigation = useNavigation();

  const handleCategoryPress = (index: number) => {
    DeviceEventEmitter.emit('CategoryChanged', index);
    const category = CategoriesList[index];
    const params: SubcategoriesParams = { subcategories: category.filters };
    navigation.navigate("Subcategories", params);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Categories" />
      <List
        data={CategoriesList}
        onItemPress={(_, index) => handleCategoryPress(index)}
      />
    </SafeAreaView>
  );
};
