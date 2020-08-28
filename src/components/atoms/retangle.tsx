import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Spacing, Colors } from '../../styles';

interface RetangleProps {
  children: any;
}

export const Retangle: React.FC<RetangleProps> = ({ children }) => {
  return <View style={styles.retangle}>{children}</View>;
};

const styles = StyleSheet.create({
  retangle: {
    //width: '100%',
    backgroundColor: Colors.BLACK,
    borderBottomRightRadius: Spacing.SCALE_18,
    paddingTop: Spacing.SCALE_26,
    paddingBottom: Spacing.SCALE_30,
    alignItems: 'center',
    //justifyContent: 'center',
  },
});
