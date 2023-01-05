import React, {useState} from 'react'
import {Image, Text, TouchableOpacity, View} from 'react-native'

import styles from './styles'

interface Props {
  hasPriceInterval?: boolean
}

export const ProductItem: React.FC<Props> = ({hasPriceInterval}) => {
  const [liked, setLiked] = useState<boolean>(false)

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageBlock}>
        <TouchableOpacity
          style={styles.likeButtonContainer}
          onPress={() => setLiked(state => !state)}>
          <Image
            style={styles.likeIcon}
            source={
              liked
                ? require('@/assets/icons/likeIconFilled.png')
                : require('@/assets/icons/likeIconOutlined.png')
            }
          />
        </TouchableOpacity>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          Product Name
        </Text>
        <Text style={styles.price}>
          {hasPriceInterval && <Text style={styles.pricePrefix}>from </Text>}
          450$
        </Text>
      </View>
      <Text style={styles.subtitle}>seller's address</Text>
      <Text style={styles.subtitle}>announcement date</Text>
    </TouchableOpacity>
  )
}
