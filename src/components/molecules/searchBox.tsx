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
    backgroundColor: 'rgba(0,0,0,0.5)',
    //borderBottomWidth: 1,
    //borderBottomColor: Colors.WHITE,
    margin: Spacing.SCALE_10,
    marginBottom: Spacing.SCALE_50,
    paddingBottom: Spacing.SCALE_8,
    paddingTop: Spacing.SCALE_8,
    paddingLeft: Spacing.SCALE_8,
    borderRadius: 20,
  },
});
