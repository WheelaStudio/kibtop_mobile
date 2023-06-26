import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import styles from './chat.style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from './../../Header/index';
import { colors } from './../../../constants/colors';
import { SearchInput } from '@/components/SearchInput';
import { Svg } from 'react-native-svg';

export const ChatContent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Chat"
        content={
          <View style={styles.rowHeader}>
            <Text style={{color:'#7AB1FF',marginRight:10,fontSize:18}}>Support</Text>
            <Image source={require('../../../assets/icons/headset.png')} />
          </View>
        }
      />
      {/* <SearchInput placeholder='Message Search'  /> */}

    </SafeAreaView>
  );
};
