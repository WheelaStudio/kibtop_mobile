import React from 'react';
import { FlatList } from 'react-native';

import { BaseSelect } from '@/components/Select';
import { CheckboxSelectListItem } from './components/ListItem';

interface Props {
  title: string;
  options: string[];
  halfWidth?: boolean;
}

export const CheckboxSelect: React.FC<Props> = ({
  title,
  options,
  halfWidth,
}) => {
  return (
    <BaseSelect halfWidth={halfWidth} title={title}>
      <FlatList
        data={options}
        renderItem={({ item }) => <CheckboxSelectListItem title={item} />}
      />
    </BaseSelect>
  );
};
