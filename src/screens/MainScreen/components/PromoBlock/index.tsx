import React from 'react'
import {FlatList, View} from 'react-native'

import {MainScreenPromoBlockListItem} from './components/ListItem'

import styles from './styles'

interface Props {}

export const MainScreenPromoBlock: React.FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[1, 2, 3]}
        renderItem={() => <MainScreenPromoBlockListItem />}
        keyExtractor={i => String(i)}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  )
}
