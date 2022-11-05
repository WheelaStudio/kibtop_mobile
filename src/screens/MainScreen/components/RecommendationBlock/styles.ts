import { colors } from '@/constants/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    marginLeft: 15,
    color: colors.dark,
    fontFamily: 'Open Sans',
  },
  itemsContainer: {
    flexWrap: 'wrap',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
