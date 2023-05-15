import {StyleSheet, Text, View} from 'react-native'
import Google from '@/assets/icons/google.svg'
import Facebook from '@/assets/icons/facebook.svg'
import React from 'react'
import {useTranslation} from 'react-i18next'
import {colors} from '@/constants/colors'
import {useNavigation} from '@react-navigation/native'
import {useMst} from '@/store/RootStore'
import {SocialButton} from '@/screens/AuthScreen/Components/SocialButton'

interface FooterContentProps {
  isLogin: boolean
}

export const FooterContent = ({isLogin}: FooterContentProps) => {
  const {t} = useTranslation()
  const navigation = useNavigation()
  const {user} = useMst()
  const onPressAuth = (): void => {
    user.reset()
    navigation.navigate('SignUpStack')
  }
  return (
    <View>
      <View style={styles.loginWGoogleFBContainer}>
        <View style={styles.loginWGoogleFB}>
          <View style={styles.line} />
          <Text style={styles.loginWGoogleFBTitle}>
            {t('common:loginWGoogleFB')}
          </Text>
          <View style={styles.line} />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <SocialButton title={'Google'} IconName={Google} onPress={() => null} />
        <SocialButton
          title={'Facebook'}
          IconName={Facebook}
          onPress={() => null}
        />
      </View>
      <View style={styles.noAccountContainer}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.noAccountText}>
            {isLogin ? t('common:haveAccount') : t('common:noAccount')}
          </Text>
          <Text
            onPress={onPressAuth}
            style={[
              styles.noAccountText,
              {color: colors.blue, marginLeft: 10},
            ]}>
            {isLogin ? t('common:login') : t('common:signup')}
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  loginWGoogleFBContainer: {},
  loginWGoogleFB: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginTop: 40,
  },
  loginWGoogleFBTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 10,
  },
  line: {
    width: 40,
    borderBottomWidth: 1.2,
    bottom: 8,
  },
  noAccountContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  noAccountText: {
    fontSize: 16,
    fontWeight: '600',
  },
})
