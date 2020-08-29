import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Spacing, Colors, Typography, Mixins } from '../../styles';

interface InputProps {
  keyboardType?: any;
  multiline?: boolean;
  value: string;
  placeholder?: string;
  onChangeText(): void;
}

export const Input: React.FC<InputProps> = ({
  keyboardType,
  multiline,
  value,
  placeholder,
  onChangeText,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        keyboardType={keyboardType || 'default'}
        multiline={multiline || false}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={Colors.WHITE}
        onChangeText={(value) => onChangeText(value)}
        style={styles.input}
        returnKeyType="search"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.TRANSPARENCY,
    justifyContent: 'center',
    paddingBottom: Spacing.SCALE_5,
  },
  input: {
    backgroundColor: Colors.TRANSPARENCY,
    width: '100%',
    height: Spacing.SCALE_30,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Typography.FONT_SIZE_22,
    color: Colors.WHITE,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    textAlignVertical: 'center',
    paddingLeft: Spacing.SCALE_5,
    paddingRight: Spacing.SCALE_10,
  },
});
