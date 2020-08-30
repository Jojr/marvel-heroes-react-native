import React from 'react';
import { StyleSheet } from 'react-native';
import { Spacing, Colors } from '../../styles';
import { Input, CustomIcon, Row, Button } from '../atoms';

interface SearchBoxProps {
  value: string;
  placeholder: string;
  onChangeText: any;
  onPress: any;
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
        onPress={() => onPress('')}
        icon="close"
        iconSize={Spacing.SCALE_20}
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
    margin: Spacing.SCALE_10,
    marginBottom: Spacing.SCALE_50,
    paddingBottom: Spacing.SCALE_8,
    paddingTop: Spacing.SCALE_8,
    paddingLeft: Spacing.SCALE_8,
    borderRadius: 20,
  },
});
