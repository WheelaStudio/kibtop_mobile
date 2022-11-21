import React, { useState } from 'react';
import { FlatList } from 'react-native';

import { BaseSelect } from '../BaseSelect';
import { RadioSelectListItem } from './components/ListItem';

interface Props {
  title: string;
  options: string[];
  halfWidth?: boolean;
}

export const RadioSelect: React.FC<Props> = ({
  title,
  options,
  halfWidth = false,
}) => {
  const [value, setValue] = useState<string>(options[0]);

  return (
    <BaseSelect title={title} halfWidth={halfWidth}>
      <FlatList
        data={options}
        renderItem={({ item }) => (
          <RadioSelectListItem
            title={item}
            isSelected={item === value}
            onPress={() => setValue(item)}
          />
        )}
        keyExtractor={(item) => item}
      />
    </BaseSelect>
  );
};
