import { Dimensions, StyleSheet } from 'react-native';

import { colors } from '@/constants/colors';
import { appFont } from '@/constants/fonts';

const { width } = Dimensions.get('screen');

export default StyleSheet.create({
  wrapper: {
    width,
    backgroundColor: colors.transparent,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 95,
    position: 'absolute',
    bottom: 0,
    paddingTop: 10,
  },
  safeAreaView: {
    backgroundColor: colors.white,
  },
  sideContainer: {
    width: width / 2 - 42.5,
    height: 85,
    flexDirection: 'row',
    paddingTop: 13,
    paddingBottom: 27,
  },
  leftContainer: {
    borderTopLeftRadius: 20,
  },
  rightContainer: {
    borderTopRightRadius: 20,
  },
  middleSectionButton: {
    position: 'absolute',
    bottom: 31,
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    left: width / 2 - 45,
    zIndex: -2,
  },
  middleSection: {
    position: 'absolute',
    bottom: 1,
    width: 90,
    height: 85,
    justifyContent: 'center',
    alignItems: 'center',
    left: width / 2 - 45,
    zIndex: -1,
  },
  addAdvertText: {
    position: 'absolute',
    bottom: 20,
    left: width / 2 - 31,
    zIndex: 10,
    fontSize: 11,
    color: colors.dark,
    fontFamily: appFont.Semibold,
  },
});
