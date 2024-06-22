import React from 'react';
import { ButtonProps, Pressable, StyleSheet } from 'react-native';
import FontAwesomeIcons from './FontAwesomeIcons';

interface IconButtonProps extends ButtonProps {
  icon: string;
  size: number;
  color?: string;
}

function IconButton({ icon, color, size, onPress }: IconButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}>
      <FontAwesomeIcons name={icon} color={color} size={size} />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  button: {
    margin: 8,
    borderRadius: 20,
  },
  pressed: {
    opacity: 0.7,
  },
});
