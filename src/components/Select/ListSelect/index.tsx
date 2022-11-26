import React, { useEffect, useRef, useState } from 'react';
import { DeviceEventEmitter, EventSubscription } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { SelectButton } from '@/components/Select';

interface Props {
  options: string[];
  title: string;
}

export const ListSelect: React.FC<Props> = ({ title, options }) => {
  const [currentValue, setCurrentValue] = useState<string>();

  const subscriptionRef = useRef<EventSubscription>();
  const resetFilterSubscriptionRef = useRef<EventSubscription>();
  const eventNameRef = useRef<string>();

  const navigation = useNavigation();

  useEffect(() => {
    subscriptionRef.current?.remove();
    setCurrentValue(undefined);

    eventNameRef.current =
      'LIST_SELECT_ON_CHANGE_EVENT_' +
      title
        .split(' ')
        .map((x) => x.toUpperCase())
        .join('_');

    subscriptionRef.current = DeviceEventEmitter.addListener(
      eventNameRef.current,
      handleChange
    );

    resetFilterSubscriptionRef.current = DeviceEventEmitter.addListener(
      'RESET_FILTERS',
      () => {
        setCurrentValue(undefined);
      }
    );

    return () => {
      subscriptionRef.current?.remove();
      resetFilterSubscriptionRef.current?.remove();
    };
  }, [title, options]);

  function handleChange(index: number) {
    setCurrentValue(options[index]);
  }

  return (
    <SelectButton
      title={currentValue ?? title}
      onPress={() =>
        navigation.navigate('ListSelectListScreen', {
          title,
          data: options,
          eventName: eventNameRef.current,
        })
      }
    />
  );
};
