import React from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import { SvgProps } from 'react-native-svg';

import { colors } from '@/constants/colors';

import styles from './styles';

interface Props {
  Icon?: React.FC<SvgProps>;
  placeholder: string;
  sqared?: boolean;
  halfWidth?: boolean;
  CustomTextInputComponent?: React.FC<TextInputProps>;
}

export const SearchInput: React.FC<Props> = ({
  Icon,
  placeholder,
  sqared = false,
  halfWidth = false,
  CustomTextInputComponent = TextInput
}) => {
  return (
    <View
      style={[
        styles.container,
        sqared && styles.sqaredContainer,
        halfWidth && styles.halfWidthContainer,
      ]}
    >
      {Icon && <Icon />}
      <CustomTextInputComponent
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.grayText}
      />
    </View>
  );
};
