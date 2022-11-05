import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { TabBarComponentTabButton } from './components/TabButton';

import MiddleSection from '@/assets/icons/tabBarMiddleSection.svg';
import MiddleSectionButton from '@/assets/icons/tabBarMiddleSectionButton.svg';

import styles from './styles';

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
    <View style={styles.wrapper}>
      <View style={[styles.sideContainer, styles.leftContainer]}>
        {buttons.slice(0, 2)}
      </View>
      <MiddleSection width={120} style={styles.middleSection} />
      <View style={[styles.sideContainer, styles.rightContainer]}>
        {buttons.slice(2, 4)}
      </View>
      <TouchableOpacity style={styles.middleSectionButton}>
        <MiddleSectionButton style={styles.middleSectionButtonIcon} />
      </TouchableOpacity>
      <View style={styles.leftShadowCover} />
      <View style={styles.rightShadowCover} />
      <Text style={styles.addAdvertText}>Add advert</Text>
    </View>
  );
};
