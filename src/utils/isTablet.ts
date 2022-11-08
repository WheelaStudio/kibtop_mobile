import { Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

const TABLET_MIN_WIDTH = 600;

export function isTablet(): boolean {
  return width > TABLET_MIN_WIDTH;
}
