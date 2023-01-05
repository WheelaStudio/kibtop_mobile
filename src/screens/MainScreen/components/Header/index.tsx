import React from 'react'
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import HeaderSettingsIcon from '@/assets/icons/headerSettingsIcon.svg'
import AllCategoriesIcon from '@/assets/icons/allCategoriesIcon.svg'
import HeaderSearchIcon from '@/assets/icons/headerSearchIcon.svg'

import {MainScreenHeaderCategoryButton} from './components/CategoryButton'
import {MainScreenHeaderDivider} from './components/Divider'
import {CustomInput} from '@/components/CustomInput'

import styles from './styles'
import {CategoriesList} from '@/constants/categories'
import LinearGradient from 'react-native-linear-gradient'
import {colors} from '@/constants/colors'

interface Props {}

export const MainScreenHeader: React.FC<Props> = ({}) => {
  const navigation = useNavigation()

  return (
    <>
      <SafeAreaView style={styles.safeAreaView} />
      <View style={styles.container}>
        <View style={styles.searchLineContainer}>
          <CustomInput Icon={HeaderSearchIcon} placeholder="Search Product" />
          <TouchableOpacity
            style={styles.settingsButtonContainer}
            onPress={() => navigation.navigate('FiltersScreen')}>
            <HeaderSettingsIcon />
          </TouchableOpacity>
        </View>
        <View style={styles.categoriesButtonsRow}>
          <MainScreenHeaderCategoryButton
            title="All categories"
            onPress={() =>
              navigation.navigate('CategoryScreen', {
                categoryId: 0,
              })
            }
            IconComponent={AllCategoriesIcon}
            singleButton
          />
          <MainScreenHeaderDivider />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollViewContainer}>
            {CategoriesList.filter(
              category => category.title !== 'All categories',
            ).map((category, index) => (
              <MainScreenHeaderCategoryButton
                title={category.titleForHeader ?? category.title}
                IconComponent={() =>
                  typeof category.iconImage === 'number' ? (
                    <Image
                      source={category.iconImage}
                      style={styles.categoryButtonImage}
                    />
                  ) : null
                }
                onPress={() =>
                  navigation.navigate('CategoryScreen', {
                    categoryId: index + 1,
                  })
                }
              />
            ))}
            <View style={{width: 15}} />
          </ScrollView>
          <LinearGradient
            colors={['#FFFFFF00', colors.white]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.gradient}
            pointerEvents="none"
          />
        </View>
      </View>
    </>
  )
}
