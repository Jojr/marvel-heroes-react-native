import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Spacing, Colors, Typography, Mixins } from '../../styles';

interface ButtonProps {
  children: any;
  onPress(): void;
  active?: boolean;
  icon?: string;
}

export const Button: React.FC<ButtonProps> = ({
  active,
  onPress,
  children,
  icon,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={Colors.BUTTON_TOUCH_OPACITY}
      onPress={onPress}
      style={[styles.button, active ? styles.active : null]}>
      <Icon
        name={icon || active ? 'check' : 'plus'}
        size={Typography.FONT_SIZE_26}
        color={Colors.WHITE}
      />
      <Text style={styles.label}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    //width: '100%',
    flexDirection: 'row',
    backgroundColor: Colors.GRAY_DARKEST,
    borderRadius: Spacing.SCALE_6,
    padding: Spacing.SCALE_6,
    paddingLeft: Spacing.SCALE_12,
    paddingRight: Spacing.SCALE_12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Typography.FONT_SIZE_18,
    color: Colors.WHITE,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    textAlignVertical: 'center',
    paddingLeft: Spacing.SCALE_5,
  },
  active: {
    backgroundColor: Colors.GREEN,
  },
});
