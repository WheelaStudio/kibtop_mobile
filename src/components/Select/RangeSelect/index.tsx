import React from 'react';
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
  return (
    <BaseSelect title={title} halfWidth={halfWidth} snapPoints={[220]}>
      <View style={styles.container}>
        <SearchInput
          placeholder="from"
          sqared
          halfWidth
          CustomTextInputComponent={BottomSheetTextInput}
        />
        <SearchInput
          placeholder="to"
          sqared
          halfWidth
          CustomTextInputComponent={BottomSheetTextInput}
        />
      </View>
    </BaseSelect>
  );
};
