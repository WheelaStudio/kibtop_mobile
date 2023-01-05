import React from 'react'
import {Text, TouchableOpacity} from 'react-native'

import {Checkbox} from '@/components/Checkbox'

import styles from './styles'

interface Props {
  title: string
  isChecked: boolean
  onPress: () => void
}

export const CheckboxSelectListItem: React.FC<Props> = ({
  title,
  isChecked,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress()}>
      <Checkbox isChecked={isChecked} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}
