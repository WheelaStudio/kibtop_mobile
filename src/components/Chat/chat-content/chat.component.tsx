import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import styles from './chat.style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from './../../Header/index';
import { colors } from './../../../constants/colors';
import { SearchInput } from '@/components/SearchInput';
import { Svg } from 'react-native-svg';
import CommentsIco from '@/assets/icons/comments.svg';
import userProfile from '@/assets/icons/userProfile.svg';
import { appFont } from '@/constants/fonts';
export const ChatContent = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = () => {};
  const dialogs = [
    {
      id: 1,
      name: 'John',
      profilePhoto: userProfile,
      lastMessage: 'Commodo elit ',
      lastMessageDate: '22:33',
    },
    {
      id: 2,
      name: 'John',
      profilePhoto: userProfile,
      lastMessage:
        'Commodo elit at imperdiet dui. Sed elementum tempus egestas sed sed risus. Aliquet risus feugiat in ante metus dictum at tempor. ',
      lastMessageDate: '22:33',
    },
    {
      id: 3,
      name: 'John',

      profilePhoto: userProfile,
      lastMessage:
        'Commodo elit at imperdiet dui. Sed elementum tempus egestas sed sed risus. Aliquet risus feugiat in ante metus dictum at tempor. ',
      lastMessageDate: '22:33',
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Chat"
        content={
          <View style={styles.rowHeader}>
            <Text style={{ color: '#7AB1FF', marginRight: 10, fontSize: 18 }}>
              Support
            </Text>
            <Image source={require('../../../assets/icons/headset.png')} />
          </View>
        }
      />
      <View style={styles.searchBlock}>
        <SearchInput
          Icon={CommentsIco}
          placeholder="Message Search"
          value={searchValue}
          onChangeText={handleSearchChange}
        />
      </View>
      <View style={styles.dialogs}>
        {dialogs.map((el) => {
          return (
            <View style={styles.dialog}>
              <Image
                source={require('../../../assets/icons/userProfile.png')}
                style={styles.profilePhoto}
              />
              <View style={styles.dialogTexts}>
                <View style={styles.dialogStatus}>
                  <Text style={styles.userName}>{el.name}</Text>
                  <Text style={styles.messageDate}>{el.lastMessageDate}</Text>
                </View>
                <Text
  style={styles.lastMessage}
  numberOfLines={2}
>
  {el.lastMessage}
</Text>

              </View>
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
};
