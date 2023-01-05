import {Dimensions, StyleSheet} from 'react-native'

import {colors} from '@/constants/colors'
import {shadowColor} from '@/utils/shadowColor'

const {width} = Dimensions.get('screen')

export default StyleSheet.create({
  container: {
    height: 140,
    width,
    backgroundColor: colors.white,
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
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  scrollViewContainer: {
    paddingLeft: 15,
    paddingRight: 100,
    height: 75,
  },
  categoryButtonImage: {
    width: 45,
    height: 45,
  },
  gradient: {
    height: 75,
    width: 75,
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
})
