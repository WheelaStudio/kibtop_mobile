import React from 'react';
import { View, Text } from 'react-native';

interface SubcategoriesProps {
  route: {
    params: {
      subcategories: {
        title: string;
        options: string[];
      }[];
    };
  };
}

const Subcategories: React.FC<SubcategoriesProps> = ({ route }) => {
  const { subcategories } = route.params;

  if (!subcategories) {
    return <Text>No subcategories available</Text>;
  }

  return (
    <View>
      <Text>Subcategories:</Text>
      {subcategories.map((el) => (
        <Text >{el.options}</Text>
      ))}
    </View>
  );
};

export default Subcategories;
