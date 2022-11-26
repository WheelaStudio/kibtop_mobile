import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { SvgProps } from 'react-native-svg';

import { BaseSelect } from '../BaseSelect';
import { RadioSelectListItem } from './components/ListItem';

interface Props {
  title: string;
  options: string[];
  halfWidth?: boolean;
  small?: boolean;
  SmallButtonIcon?: React.FC<SvgProps>;
  showValue?: boolean;
  hasPrefix?: boolean;
}

export const RadioSelect: React.FC<Props> = ({
  title,
  options,
  halfWidth = false,
  small = false,
  SmallButtonIcon,
  showValue = true,
  hasPrefix,
}) => {
  const [value, setValue] = useState<string>(options[0]);

  return (
    <BaseSelect
      title={title}
      halfWidth={halfWidth}
      small={small}
      SmallButtonIcon={SmallButtonIcon}
      value={value}
      showValue={showValue}
      hasPrefix={hasPrefix}
      onResetFilter={() => {
        setValue(options[0]);
      }}
    >
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
