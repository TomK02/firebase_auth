import React, { type PropsWithChildren } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  type ButtonProps,
} from 'react-native';

import { GlobalTheme } from '../../themes/constants';

interface FlatButtonPropsT extends ButtonProps, PropsWithChildren {}

function FlatButton({ children, onPress }: FlatButtonPropsT) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}>
      <View>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default FlatButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: 'center',
    color: GlobalTheme.primary100,
  },
});
