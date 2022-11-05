import { Dimensions, StyleSheet } from 'react-native';

import { colors } from '@/constants/colors';

const { width } = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    width: width / 2 - 24,
    marginTop: 26,
  },
  imageBlock: {
    width: width / 2 - 24,
    height: width / 2 - 24,
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
    marginBottom: 2,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.dark,
    height: 20,
    flex: 1,
    fontFamily: 'Open Sans',
    lineHeight: 27
  },
  price: {
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'right',
    letterSpacing: -0.5,
    color: colors.dark,
    fontFamily: 'Open Sans',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 6,
    height: 22,
  },
  subtitle: {
    fontSize: 11,
    fontWeight: '400',
    color: colors.dark,
    opacity: 0.4,
    fontFamily: 'Open Sans',
  },
  likeButtonContainer: {
    height: 30,
    width: 30,
    position: 'absolute',
    top: 4,
    right: 6,
  },
  likeIcon: {
    shadowOpacity: 1,
    shadowRadius: 5,
    shadowOffset: { height: 0, width: 0 },
    shadowColor: 'rgba(0, 0, 0, 0.65)',
  },
  pricePrefix: {
    fontWeight: '700',
    fontSize: 12,
    letterSpacing: -0.5,
    color: colors.dark,
    opacity: 0.3,
    fontFamily: 'Open Sans',
  },
});
