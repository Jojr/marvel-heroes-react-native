import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { I18n } from '@aws-amplify/core';
import { Spacing, Colors, Mixins } from '../../styles';
import { Button, Retangle, HeroName, HeroImage } from '../atoms';

interface HeroCardProps {
  imageSource: string;
  favorite: boolean;
  name: string;
  favoriteOnpress(): void;
  onPress(): void;
  active?: boolean;
}

export const HeroCard: React.FC<HeroCardProps> = ({
  imageSource,
  favorite,
  name,
  onPress,
  favoriteOnpress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <HeroImage source={imageSource} />
      <Retangle>
        <HeroName>{name}</HeroName>
        <Button active={favorite} onPress={favoriteOnpress}>
          {I18n.get('Favorite')}
        </Button>
      </Retangle>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    flexGrow: 1,
    width: Spacing.SCALE_160,
    borderRadius: Spacing.SCALE_6,
    padding: Spacing.SCALE_5,
    marginBottom: Spacing.SCALE_10,
  },
});
