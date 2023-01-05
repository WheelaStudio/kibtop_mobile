import React, {forwardRef, useMemo} from 'react'
import {BottomSheetBackdrop, BottomSheetModal} from '@gorhom/bottom-sheet'
import {BaseSelectHandle} from '@/components/Select/BaseSelect/components/Handle'
import {Text, View} from 'react-native'
import {styles} from './styles'
import {Button} from '@/components/Button'

interface ModalProps {
  children: React.ReactNode
  title: string
  customSnapPoints?: string[]
}

const Modal = (
  {children, title, customSnapPoints}: ModalProps,
  ref: React.Ref<BottomSheetModal>,
) => {
  const snapPoints = useMemo(() => ['25%', '60%'], [])
  const close = () => {
    ref?.current?.close()
  }
  return (
    <BottomSheetModal
      snapPoints={customSnapPoints ?? snapPoints}
      ref={ref}
      backdropComponent={props => (
        <BottomSheetBackdrop
          {...props}
          opacity={0.3}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
        />
      )}
      handleComponent={BaseSelectHandle}>
      <View style={styles.contentContainer}>
        <View style={styles.modalHeaderContainer}>
          <Text style={styles.modalHeaderTitle}>{title}</Text>
        </View>
        {children}
        <Button onPress={close} title={'Apply'} />
      </View>
    </BottomSheetModal>
  )
}

export const CustomModal = forwardRef(Modal)
