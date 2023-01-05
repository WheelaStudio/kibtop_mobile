import React, {useState} from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import styles from './styles'
import {Header} from '@/components/Header'
import WelcomeText from '@/assets/icons/welcomeText.svg'
import Email from '@/assets/icons/email.svg'
import Lock from '@/assets/icons/lock.svg'
import Eye from '@/assets/icons/eye.svg'
import EyeClosed from '@/assets/icons/eyeClosed.svg'
import {CustomInput} from '@/components/CustomInput'
import {useTranslation} from 'react-i18next'
import {SafeAreaView} from 'react-native-safe-area-context'
import {Button} from '@/components/Button'
import {FooterContent} from '@/screens/AuthScreen/components/FooterContent'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {useNavigation} from '@react-navigation/native'
import {useMst} from '@/store/RootStore'
import {observer} from 'mobx-react-lite'

export const LoginScreen: React.FC<{}> = observer(({}) => {
  const {t} = useTranslation()
  const navigation = useNavigation()
  const {user} = useMst()
  const [showPassword, setShowPassword] = useState(false)
  const onPasswordIconPress = (): void => {
    setShowPassword(!showPassword)
  }

  const navigateRecoveryScreen = () => {
    user.reset()
    navigation.navigate('RecoveryStack')
  }

  const onLogin = async () => {
    await user.login()
    if (user.isLoggedIn) {
      navigation.navigate('HomeStack')
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header title="" />
        <WelcomeText width={285} height={71} />
        <View style={{marginTop: 40}}>
          <KeyboardAwareScrollView>
            <View style={styles.inputContainer}>
              <CustomInput
                Icon={Email}
                placeholder={t('common:username')}
                containerStyles={{flexDirection: 'row', marginVertical: 20}}
                autoCapitalize={'none'}
                onChangeText={user.setUsername}
                value={user.username}
              />
            </View>
            <View style={styles.inputContainer}>
              <CustomInput
                Icon={Lock}
                RightIcon={showPassword ? Eye : EyeClosed}
                onRightIconPress={onPasswordIconPress}
                placeholder={t('common:password')}
                secureTextEntry={!showPassword}
                onChangeText={user.setPassword}
                value={user.password}
              />
            </View>
            <TouchableOpacity onPress={navigateRecoveryScreen}>
              <Text style={styles.forgotPassword}>
                {t('common:forgotPassword')}
              </Text>
            </TouchableOpacity>
          </KeyboardAwareScrollView>
          <Button
            onPress={onLogin}
            title={t('common:login')}
            containerStyles={{marginTop: 20}}
          />
        </View>
        <FooterContent isLogin={false} />
      </View>
    </SafeAreaView>
  )
})
