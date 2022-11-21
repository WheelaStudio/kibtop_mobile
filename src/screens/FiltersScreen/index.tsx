import React, { useEffect, useRef, useState } from 'react';
import {
  SafeAreaView,
  View,
  DeviceEventEmitter,
  EventSubscription,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Header } from '@/components/Header';
import { Button } from '@/components/Button';
import { Divider } from '@/components/Divider';
import { SelectButton, RadioSelect, LocationSelect } from '@/components/Select';
import { FiltersScreenFiltersList } from './components/FiltersList';

import { CategoriesList } from '@/constants/categories';

import styles from './styles';

export const FiltersScreen: React.FC<{}> = ({}) => {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState<number>(0);
  const subscriptionRef = useRef<EventSubscription>();

  const navigation = useNavigation();

  useEffect(() => {
    subscriptionRef.current = DeviceEventEmitter.addListener(
      'CategoryChanged',
      handleCategoryChanged
    );

    return () => subscriptionRef.current?.remove();
  }, []);

  function handleCategoryChanged(value: number) {
    setCurrentCategoryIndex(value);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Filters" />
      <SelectButton
        title={CategoriesList[currentCategoryIndex].title}
        onPress={() => navigation.navigate('CategoriesListScreen')}
      />
      <View style={styles.categoryFiltersContainer}>
        <FiltersScreenFiltersList categoryIndex={currentCategoryIndex} />
      </View>
      <Divider />
      <LocationSelect title="Location" />
      <RadioSelect
        title="Sorting"
        options={['Default', 'Cheaper', 'Expensive']}
      />
      <Button onPress={() => null}>Show ads</Button>
      <Button ghost onPress={() => null}>
        Reset filter
      </Button>
    </SafeAreaView>
  );
};