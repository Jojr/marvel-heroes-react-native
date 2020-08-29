import React from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet, ViewPropsIOS } from 'react-native';
import { I18n } from '@aws-amplify/core';
import { Spacing, Colors, Mixins } from '../../styles';
import { Input, CustomIcon, Row, Button } from '../atoms';

interface SearchBoxProps {
  value: string;
  placeholder: string;
  onChangeText: any;
  onPress(): ViewPropsIOS;
}

export const SearchBox: React.FC<SearchBoxProps> = ({
  value,
  placeholder,
  onChangeText,
  onPress,
}) => {
  return (
    <Row style={styles.container}>
      <CustomIcon name="magnify" size={Spacing.SCALE_16} />
      <Input
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
      <Button
        onPress={onPress}
        icon="chevron-right"
        iconSize={Spacing.SCALE_30}
        iconColor={Colors.WHITE}
        //buttonColor={Colors.PRIMARY}
        transparent
      />
    </Row>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.WHITE,
    //backgroundColor: '#FF00FF',
    margin: Spacing.SCALE_10,
    marginTop: Spacing.SCALE_50,
    marginBottom: Spacing.SCALE_50,
    paddingBottom: Spacing.SCALE_8,
  },
});
