import {ICategory, IFilter} from '@/constants/categories'
import React from 'react'
import {View, Text} from 'react-native'



const Subcategories = ({route}: {route: ICategory[]}) => {
  const {options} = route.params[0]
  
 
  if (!options) {
    return <Text>No subcategories available</Text>
  }

  return (
    <View>
      <Text>Subcategories:</Text>
      {options.map((el: string) => (
        <Text>{el}</Text>
      ))}
    </View>
  )
}

export default Subcategories
