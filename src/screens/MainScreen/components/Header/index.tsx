import React from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import HeaderSettingsIcon from '@/assets/icons/headerSettingsIcon.svg';
import AllCategoriesIcon from '@/assets/icons/allCategoriesIcon.svg';
import HeaderSearchIcon from '@/assets/icons/headerSearchIcon.svg';

import { MainScreenHeaderCategoryButton } from './components/CategoryButton';
import { MainScreenHeaderDivider } from './components/Divider';
import { SearchInput } from '@/components/SearchInput';

import styles from './styles';

interface Props {}

export const MainScreenHeader: React.FC<Props> = ({}) => {
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView style={styles.safeAreaView} />
      <View style={styles.container}>
        <View style={styles.searchLineContainer}>
          <SearchInput Icon={HeaderSearchIcon} placeholder="Search Product" />
          <TouchableOpacity
            style={styles.settingsButtonContainer}
            onPress={() => navigation.navigate('FiltersScreen')}
          >
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
              IconComponent={() => (
                <Image
                  source={require('@/assets/icons/realEstateCategoryIcon.png')}
                  style={styles.categoryButtonImage}
                />
              )}
            />
            <MainScreenHeaderCategoryButton
              title="Auto"
              onPress={() => null}
              IconComponent={() => (
                <Image
                  source={require('@/assets/icons/autoCategoryIcon.png')}
                  style={styles.categoryButtonImage}
                />
              )}
            />
            <MainScreenHeaderCategoryButton
              title="Job"
              onPress={() => null}
              IconComponent={() => (
                <Image
                  source={require('@/assets/icons/jobCategoryIcon.png')}
                  style={styles.categoryButtonImage}
                />
              )}
            />
            <MainScreenHeaderCategoryButton
              title="Services"
              onPress={() => null}
              IconComponent={() => (
                <Image
                  source={require('@/assets/icons/servicesCategoryIcon.png')}
                  style={styles.categoryButtonImage}
                />
              )}
            />
            <MainScreenHeaderCategoryButton
              title="For kids"
              onPress={() => null}
              IconComponent={() => (
                <Image
                  source={require('@/assets/icons/kidsCategoryIcon.png')}
                  style={styles.categoryButtonImage}
                />
              )}
            />
            <MainScreenHeaderCategoryButton
              title="Electronics"
              onPress={() => null}
              IconComponent={() => (
                <Image
                  source={require('@/assets/icons/electronicsCategoryIcon.png')}
                  style={styles.categoryButtonImage}
                />
              )}
            />
            <MainScreenHeaderCategoryButton
              title={'Fashion\nand style'}
              onPress={() => null}
              IconComponent={() => (
                <Image
                  source={require('@/assets/icons/fashionAndStyleCategoryIcon.png')}
                  style={styles.categoryButtonImage}
                />
              )}
            />
            <MainScreenHeaderCategoryButton
              title={'House and\ngarden'}
              onPress={() => null}
              IconComponent={() => (
                <Image
                  source={require('@/assets/icons/houseAndGardenCategoryIcon.png')}
                  style={styles.categoryButtonImage}
                />
              )}
            />
            <View style={{width: 15}} />
          </ScrollView>
        </View>
      </View>
    </>
  );
};
