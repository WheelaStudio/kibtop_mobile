import React from 'react';
import { View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';

import HeaderSettingsIcon from '@/assets/icons/headerSettingsIcon.svg';
import AllCategoriesIcon from '@/assets/icons/allCategoriesIcon.svg';
import RealEstateCategoryIcon from '@/assets/icons/realEstateCategoryIcon.svg';
import AutoCategoryIcon from '@/assets/icons/autoCategoryIcon.svg';
import JobCategoryIcon from '@/assets/icons/jobCategoryIcon.svg';
import ServicesCategoryIcon from '@/assets/icons/servicesCategoryIcon.svg';
import KidsCategoryIcon from '@/assets/icons/kidsCategoryIcon.svg';
import ElectronicsCategoryIcon from '@/assets/icons/electronicsCategoryIcon.svg';
import HouseAndGardenCategoryIcon from '@/assets/icons/houseAndGardenCategoryIcon.svg';

import { MainScreenHeaderCategoryButton } from './components/CategoryButton';
import { MainScreenHeaderDivider } from './components/Divider';
import { MainScreenHeaderSearchInput } from './components/SearchInput';

import styles from './styles';

interface Props {}

export const MainScreenHeader: React.FC<Props> = ({}) => {
  return (
    <>
      <SafeAreaView style={styles.safeAreaView} />
      <View style={styles.container}>
        <View style={styles.searchLineContainer}>
          <MainScreenHeaderSearchInput />
          <TouchableOpacity style={styles.settingsButtonContainer}>
            <HeaderSettingsIcon />
          </TouchableOpacity>
        </View>
        <View style={styles.categoriesButtonsRow}>
          <MainScreenHeaderCategoryButton
            title="All categories"
            onPress={() => null}
            IconComponent={AllCategoriesIcon}
            singleButton
          />
          <MainScreenHeaderDivider />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollViewContainer}
          >
            <MainScreenHeaderCategoryButton
              title="Real estate"
              onPress={() => null}
              IconComponent={RealEstateCategoryIcon}
            />
            <MainScreenHeaderCategoryButton
              title="Auto"
              onPress={() => null}
              IconComponent={AutoCategoryIcon}
            />
            <MainScreenHeaderCategoryButton
              title="Job"
              onPress={() => null}
              IconComponent={JobCategoryIcon}
            />
            <MainScreenHeaderCategoryButton
              title="Services"
              onPress={() => null}
              IconComponent={ServicesCategoryIcon}
            />
            <MainScreenHeaderCategoryButton
              title="For kids"
              onPress={() => null}
              IconComponent={KidsCategoryIcon}
            />
            <MainScreenHeaderCategoryButton
              title="Electronics"
              onPress={() => null}
              IconComponent={ElectronicsCategoryIcon}
            />
            <MainScreenHeaderCategoryButton
              title="House and garden"
              onPress={() => null}
              IconComponent={HouseAndGardenCategoryIcon}
            />
          </ScrollView>
        </View>
      </View>
    </>
  );
};
