import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, StyleSheet } from 'react-native';
import { Spacing, Colors, Typography } from '../../styles';

interface CustomIconProps {
  name: string;
  color?: string;
  size: number;
}

export const CustomIcon: React.FC<CustomIconProps> = ({ name, color }) => {
  return (
    <View style={styles.container}>
      <Icon
        name={name}
        size={Typography.FONT_SIZE_26}
        color={color || Colors.PRIMARY}
        style={styles.icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingRight: Spacing.SCALE_12,
    alignItems: 'center',
  },
  icon: {
    justifyContent: 'center',
  },
});
