import { Dimensions, StyleSheet } from 'react-native';

import { colors } from '@/constants/colors';
import { defaultFont } from '@/constants/fonts';

const { width } = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    width,
    marginTop: 27,
  },
  flatListContainer: {
    paddingHorizontal: 10,
  },
  header: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    marginTop: 8,
    justifyContent: 'space-between',
    height: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: -0.5,
    color: colors.dark,
    fontFamily: defaultFont,
  },
  divider: {
    width: 1,
    height: 25,
    backgroundColor: colors.lightGray,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  subtitle: {
    fontSize: 11,
    fontWeight: '400',
    lineHeight: 10,
    letterSpacing: -0.5,
    textAlign: 'left',
    opacity: 0.4,
    color: colors.dark,
    marginTop: 5,
    fontFamily: defaultFont,
  },
  titleContainer: {
    flexDirection: 'row',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 15,
  },
  likeIcon: {
    shadowOpacity: 1,
    shadowRadius: 5,
    shadowOffset: { height: 0, width: 0 },
    shadowColor: 'rgba(0, 0, 0, 0.65)',
  },
  price: {
    fontWeight: '700',
    fontSize: 20,
    letterSpacing: -0.5,
    textAlign: 'right',
    lineHeight: 20,
    color: colors.dark,
    fontFamily: defaultFont,
  },
  pricePrefix: {
    fontWeight: '700',
    fontSize: 12,
    letterSpacing: -0.5,
    color: colors.dark,
    opacity: 0.3,
    fontFamily: defaultFont,
  },
});
