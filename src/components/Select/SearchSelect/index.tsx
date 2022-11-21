import React, { useRef } from 'react';
import { FlatList, Platform, View } from 'react-native';
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';

import { SearchInput } from '@/components/SearchInput';
import { Button } from '@/components/Button';
import { BaseSelect } from '@/components/Select';
import { SearchSelectListItem } from './components/ListItem';

import HeaderSearchIcon from '@/assets/icons/headerSearchIcon.svg';

import styles from './styles';

interface Props {
  title: string;
}

export const SearchSelect: React.FC<Props> = ({ title }) => {
  const baseSelectRef = useRef<BaseSelect | null>(null);

  const data = ['BMW', 'Audi', 'Mercedes-Benz'];

  function handleClose() {
    baseSelectRef.current?.close();
  }

  return (
    <BaseSelect title={title} ref={baseSelectRef} snapPoints={['70%']}>
      <View style={styles.headerContainer}>
        <SearchInput
          placeholder="Brand name"
          Icon={HeaderSearchIcon}
          CustomTextInputComponent={
            Platform.OS === 'ios' ? BottomSheetTextInput : undefined
          }
        />
        <Button ghost fullWidth={false} onPress={handleClose}>
          Cancel
        </Button>
      </View>
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <SearchSelectListItem
            title={item}
            noBorder={data.length - 1 === index}
          />
        )}
      />
    </BaseSelect>
  );
};
