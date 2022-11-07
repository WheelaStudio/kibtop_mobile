import { colors } from '@/constants/colors';
import { Platform } from 'react-native';

/**
 * Replaces specified shadow color with black on Android in order
 * to make sure shadow will be visible on android devices.
 *
 * @param iosValue string shadow color for iOS
 *
 * @returns string shadow color for StyleSheet
 */
export function shadowColor(iosValue: string): string {
  if (Platform.OS === 'ios') return iosValue;

  return colors.black;
}
