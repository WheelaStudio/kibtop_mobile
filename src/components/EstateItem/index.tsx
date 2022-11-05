import React, { useState } from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import LikeIconFilled from '@/assets/icons/likeIconFilled.svg';
import LikeIconOutlined from '@/assets/icons/likeIconOutlined.svg';

import { EstateItemPhotoListItem } from './components/PhotoListItem';

import styles from './styles';

interface Props {
  isRentItem?: boolean;
}

export const EstateItem: React.FC<Props> = ({ isRentItem }) => {
  const [liked, setLiked] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={() => <EstateItemPhotoListItem />}
        contentContainerStyle={styles.flatListContainer}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(i) => String(i)}
        horizontal
      />
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>3-room apartment</Text>
          <View style={styles.divider} />
          <Text style={styles.title}>60,5m²</Text>
        </View>
        <Text style={styles.price}>
          {isRentItem && <Text style={styles.pricePrefix}>per month </Text>}
          €50000
        </Text>
      </View>
      <View style={styles.footer}>
        <View>
          <Text style={styles.subtitle}>seller's address</Text>
          <Text style={styles.subtitle}>announcement date</Text>
        </View>
        <TouchableOpacity onPress={() => setLiked((state) => !state)}>
          {liked ? (
            <LikeIconFilled style={styles.likeIcon} />
          ) : (
            <LikeIconOutlined style={styles.likeIcon} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};
