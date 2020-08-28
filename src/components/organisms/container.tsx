import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Spacing } from '../../styles';

interface ContainerProps {
  children: any;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: Spacing.SCALE_20,
  },
});
