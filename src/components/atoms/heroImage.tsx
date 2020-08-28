import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Spacing, Colors } from '../../styles';

interface HeroImageProps {
  source: string;
}

export const HeroImage: React.FC<HeroImageProps> = ({ source }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.heroImage}
        resizeMode="cover"
        source={{
          uri:
            source ||
            'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg',
        }}
      />
      <View style={styles.bottomBar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  heroImage: {
    width: '100%',
    height: Spacing.SCALE_160,
  },
  bottomBar: {
    backgroundColor: Colors.PRIMARY,
    height: Spacing.SCALE_5,
  },
});
