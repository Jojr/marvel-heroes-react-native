import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Spacing, Colors, Mixins } from '../../styles';

interface RowProps {
  children: any;
  style: object;
}

export const Row: React.FC<RowProps> = ({ children, style }) => {
  return <View style={[styles.row, { ...style }]}>{children}</View>;
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    padding: Spacing.SCALE_10,
    paddingBottom: 0,
  },
});
