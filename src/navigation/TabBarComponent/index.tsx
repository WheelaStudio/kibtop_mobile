import React from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { TabBarComponentTabButton } from './components/TabButton';

import MiddleSection from '@/assets/icons/tabBarMiddleSection.svg';
import MiddleSectionButton from '@/assets/icons/tabBarMiddleSectionButton.svg';

import styles from './styles';
import { Shadow } from 'react-native-shadow-2';
import { colors } from '@/constants/colors';

export const TabBarComponent: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const buttons = state.routes.slice(0, 4).map((route, index) => {
    const { options } = descriptors[route.key];

    const title = options.title || 'Not defined';
    const Icon = options.tabBarIcon;
    const isFocused = state.index === index;

    function onPress() {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true,
      });

      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(route.name);
      }
    }

    function onLongPress() {
      navigation.emit({
        type: 'tabLongPress',
        target: route.key,
      });
    }

    return (
      <TabBarComponentTabButton
        title={title}
        isFocused={isFocused}
        onLongPress={onLongPress}
        onPress={onPress}
        icon={Icon?.({ focused: isFocused, size: 30, color: '' })}
      />
    );
  });

  return (
    <ImageBackground
      resizeMode="stretch"
      style={styles.wrapper}
      source={require('@/assets/icons/tabBarBodyCover.png')}
    >
      <View style={[styles.sideContainer, styles.leftContainer]}>
        {buttons.slice(0, 2)}
      </View>
      <Image
        source={require('@/assets/icons/tabBarMiddleSection.png')}
        style={styles.middleSection}
      />
      <View style={[styles.sideContainer, styles.rightContainer]}>
        {buttons.slice(2, 4)}
      </View>
      <TouchableOpacity style={styles.middleSectionButton}>
        {/* <MiddleSectionButton style={styles.middleSectionButtonIcon} /> */}
        <Image
          style={{ width: 90, height: 90 }}
          source={require('@/assets/icons/tabBarMiddleSectionButton.png')}
        />
      </TouchableOpacity>
      <Text style={styles.addAdvertText}>Add advert</Text>
    </ImageBackground>
  );
};
