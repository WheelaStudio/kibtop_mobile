import { Dimensions, StyleSheet } from 'react-native';

import { colors } from '@/constants/colors';
import { shadowColor } from '@/utils/shadowColor';

const { width } = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    height: 135,
    width,
    backgroundColor: colors.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: shadowColor('rgba(65, 64, 66, 0.05)'),
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowOffset: {
      height: 4,
      width: 0,
    },
    paddingLeft: 15,
    zIndex: 4,
    elevation: 4,
  },
  safeAreaView: {
    backgroundColor: colors.white,
  },
  searchLineContainer: {
    width: width - 30,
    flexDirection: 'row',
  },
  settingsButtonContainer: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  categoriesButtonsRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  scrollViewContainer: {
    paddingLeft: 15,
  },
  categoryButtonImage: {
    width: 30,
    height: 30
  }
});
