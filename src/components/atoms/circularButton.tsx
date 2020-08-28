import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Spacing, Colors, Typography, Mixins } from '../../styles';

interface CircularButtonProps {
  onPress(): void;
}

export const CircularButton: React.FC<CircularButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Icon name="close" size={Typography.FONT_SIZE_50} color={Colors.WHITE} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: Spacing.SCALE_80,
    height: Spacing.SCALE_80,
    position: 'absolute',
    bottom: Spacing.SCALE_30,
    right: Spacing.SCALE_15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: Spacing.SCALE_40,
    paddingLeft: Spacing.SCALE_12,
    paddingRight: Spacing.SCALE_12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
