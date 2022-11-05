import { Dimensions, StyleSheet } from 'react-native';

import { colors } from '@/constants/colors';
import { defaultFont } from '@/constants/fonts';

const { width } = Dimensions.get('screen');

export default StyleSheet.create({
  wrapper: {
    width,
    backgroundColor: colors.transparent,
    flexDirection: 'row',
  },
  safeAreaView: {
    backgroundColor: colors.white,
  },
  sideContainer: {
    width: width / 2 - 42.5,
    height: 85,
    backgroundColor: colors.white,
    shadowColor: colors.dark,
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: {
      height: -3,
      width: 0,
    },
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    zIndex: 3,
    paddingTop: 13,
    paddingBottom: 27,
  },
  leftContainer: {
    left: 0,
    borderTopLeftRadius: 20,
  },
  rightContainer: {
    right: 0,
    borderTopRightRadius: 20,
  },
  middleSectionButton: {
    position: 'absolute',
    bottom: 45,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    left: width / 2 - 31,
    zIndex: 1,
  },
  middleSectionButtonIcon: {
    shadowColor: 'rgba(65, 64, 66, 0.5)',
    shadowOffset: { height: 1, width: 0 },
    shadowRadius: 8,
    shadowOpacity: 1,
  },
  middleSection: {
    position: 'absolute',
    bottom: 0,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    left: width / 2 - 60,
    zIndex: 2,
    shadowColor: 'rgba(65, 64, 66, 0.5)',
    shadowOffset: { height: 0, width: 0 },
    shadowRadius: 5,
    shadowOpacity: 1,
  },
  leftShadowCover: {
    width: 10,
    height: 85,
    backgroundColor: colors.white,
    position: 'absolute',
    left: width / 2 - 45,
    bottom: 0,
    zIndex: 4,
  },
  rightShadowCover: {
    width: 10,
    height: 85,
    backgroundColor: colors.white,
    position: 'absolute',
    right: width / 2 - 45,
    bottom: 0,
    zIndex: 4,
  },
  addAdvertText: {
    position: 'absolute',
    bottom: 20,
    left: width / 2 - 31,
    zIndex: 10,
    fontSize: 11,
    color: colors.dark,
    fontWeight: '600',
    fontFamily: defaultFont,
  },
});
