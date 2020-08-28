import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Spacing, Colors, Mixins } from '../../styles';

interface RowProps {
  children: any;
}

export const Row: React.FC<RowProps> = ({ children }) => {
  return <View style={[styles.row]}>{children}</View>;
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    //width: '100%',
    padding: Spacing.SCALE_10,
    paddingBottom: 0,
  },
});
