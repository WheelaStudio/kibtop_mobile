import React, { useMemo, useState } from 'react';
import { View } from 'react-native';

import { SearchInput } from '@/components/SearchInput';
import { BaseSelect } from '@/components/Select';

import styles from './styles';
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';

interface Props {
  title: string;
  halfWidth?: boolean;
}

export const RangeSelect: React.FC<Props> = ({ title, halfWidth = false }) => {
  const [from, setFrom] = useState<string>('');
  const [to, setTo] = useState<string>('');

  const valueString = useMemo(() => {
    if (!from && to) return `${to} - ${to}`;

    if (!to && from) return `${from} - ${from}`;

    if (from && to) return `${from} - ${to}`;

    return null;
  }, [from, to]);

  function handleFromChange(newValue: string) {
    if (!validateInput(newValue)) return;

    setFrom(newValue);
  }

  function handleToChange(newValue: string) {
    if (!validateInput(newValue)) return;

    setTo(newValue);
  }

  function validateInput(inputString: string) {
    if (/^\d*$/.test(inputString)) return true;

    return false;
  }

  return (
    <BaseSelect
      title={title}
      halfWidth={halfWidth}
      snapPoints={[220]}
      value={valueString}
    >
      <View style={styles.container}>
        <SearchInput
          placeholder="from"
          sqared
          halfWidth
          CustomTextInputComponent={BottomSheetTextInput}
          keyboardType="numeric"
          value={from}
          onChangeText={handleFromChange}
        />
        <SearchInput
          placeholder="to"
          sqared
          halfWidth
          CustomTextInputComponent={BottomSheetTextInput}
          keyboardType="numeric"
          value={to}
          onChangeText={handleToChange}
        />
      </View>
    </BaseSelect>
  );
};
