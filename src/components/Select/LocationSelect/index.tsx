import React, { useRef } from 'react';
import { FlatList, Platform, View } from 'react-native';
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';

import { SearchInput } from '@/components/SearchInput';
import { BaseSelect } from '@/components/Select';
import { Button } from '@/components/Button';
import { LocationSelectListItem } from './components/ListItem';

import LocationInputIcon from '@/assets/icons/locationInputIcon.svg';

import styles from './styles';

interface Props {
  title: string;
}

export const LocationSelect: React.FC<Props> = ({ title }) => {
  const baseSelectRef = useRef<BaseSelect>(null);

  const data = ['Limassol', 'Nicosia', 'Pathos'];

  function handleClose() {
    baseSelectRef.current?.close();
  }

  return (
    <BaseSelect title={title} ref={baseSelectRef} snapPoints={['60%']}>
      <View style={styles.headerContainer}>
        <SearchInput
          placeholder="City or region"
          Icon={LocationInputIcon}
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
          <LocationSelectListItem
            title={item}
            noBorder={data.length - 1 === index}
          />
        )}
      />
    </BaseSelect>
  );
};
