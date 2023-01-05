import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import styles from '../styles'
import {Header} from '@/components/Header'
import Location from '@/assets/icons/location.svg'
import {CustomInput} from '@/components/CustomInput'
import {useTranslation} from 'react-i18next'
import {SafeAreaView} from 'react-native-safe-area-context'
import {Button} from '@/components/Button'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {useNavigation} from '@react-navigation/native'
import {useMst} from '@/store/RootStore'

export const InputAddressScreen: React.FC<{}> = ({}) => {
  const {t} = useTranslation()
  const navigation = useNavigation()
  const {user} = useMst()
  const onPressNext = async (): Promise<void> => {
    await user.signup()
    navigation.navigate('CompleteScreen')
  }
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header title="" />
        <Text style={styles.welcomeText}>{t('common:newAccount')}</Text>
        <View style={{marginTop: 40}}>
          <KeyboardAwareScrollView>
            <View style={styles.inputContainer}>
              <CustomInput
                Icon={Location}
                placeholder={t('common:addressPlaceholder')}
                containerStyles={{
                  flexDirection: 'row',
                  marginTop: 20,
                  marginBottom: 10,
                }}
                onChangeText={user.setAddress}
              />
            </View>
            <TouchableOpacity>
              <Text style={styles.useLocationBtn}>
                {t('common:useMyLocation')}
              </Text>
            </TouchableOpacity>
          </KeyboardAwareScrollView>
        </View>
      </View>
      <View style={{position: 'absolute', bottom: 110}}>
        <Button
          onPress={onPressNext}
          title={t('common:skip')}
          containerStyles={{marginTop: 20}}
          ghost
        />
        <Button onPress={onPressNext} title={t('common:next')} />
      </View>
    </SafeAreaView>
  )
}
