import React, { ReactNode } from 'react';
import { EventSubscription, Keyboard, Text, View } from 'react-native';
import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';

import { Button } from '@/components/Button';
import { SelectButton } from '@/components/Select';
import { BaseSelectHandle } from './components/Handle';

import styles from './styles';

interface Props {
  title: string;
  children: ReactNode;
  halfWidth?: boolean;
  snapPoints?: number[] | string[];
}

export class BaseSelect extends React.Component<Props, {}> {
  private keyboardDidHideSubscription: EventSubscription | undefined;
  private modalRef: React.RefObject<BottomSheetModal>;

  constructor(props: Props) {
    super(props);

    this.modalRef = React.createRef<BottomSheetModal>();
  }

  componentDidMount() {
    this.keyboardDidHideSubscription = Keyboard.addListener(
      'keyboardDidHide',
      this.handleKeyboardHide.bind(this)
    );
  }

  componentWillUnmount() {
    this.keyboardDidHideSubscription?.remove();
  }

  public close() {
    this.modalRef.current?.dismiss();
  }

  public open() {
    this.modalRef.current?.present();
  }

  private handleKeyboardHide() {
    this.modalRef.current?.snapToIndex(0);
  }
render() {
    const {
      snapPoints = ['60%'],
      children,
      title,
      halfWidth = false,
    } = this.props;

    return (
      <>
        <BottomSheetModal
          snapPoints={snapPoints}
          ref={this.modalRef}
          backdropComponent={(props) => (
            <BottomSheetBackdrop
              {...props}
              opacity={0.3}
              appearsOnIndex={0}
              disappearsOnIndex={-1}
            />
          )}
          handleComponent={BaseSelectHandle}
        >
          <View style={{ flex: 1, paddingBottom: 35 }}>
            <View style={styles.modalHeaderContainer}>
              <Text style={styles.modalHeaderTitle}>{title}</Text>
            </View>
            {children}
            <Button onPress={this.close.bind(this)}>Apply</Button>
          </View>
        </BottomSheetModal>
        <SelectButton
          title={title}
          onPress={this.open.bind(this)}
          halfWidth={halfWidth}
        />
      </>
    );
  }
}
