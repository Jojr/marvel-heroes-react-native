import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { I18n } from '@aws-amplify/core';
import { SharedElement } from 'react-navigation-shared-element';
import { Transition, Transitioning } from 'react-native-reanimated';
import { Typography, Spacing, Colors } from '../../styles';
import { loadHeroesRequest } from '../../redux/actions/heroes';
import { Background, Container } from '../../components/organisms';
import { Heroes } from '../../redux/actions/heroes/types';

import { Button, Retangle, HeroName, HeroImage } from '../../components/atoms';
import { HeroCard } from '../../components/molecules';

export function navigationOptions({ navigation }) {
  return {
    headerShown: true,
  };
}

const Home: React.FC = (props) => {
  const dispatch = useDispatch();
  const { heroes } = useSelector<any>((state) => state.heroes);
  const [offset, setOffset] = useState<number>(0);
  console.log('dataFromReducer');
  console.log(heroes);

  useEffect(() => {
    dispatch(loadHeroesRequest(offset));
  }, [dispatch, offset]);

  return (
    <Background>
      <StatusBar barStyle="light-content" backgroundColor={Colors.BLACK} />
      <Container>
        <View style={{ flexDirection: 'row'}}>
          <HeroCard
            onPress={() => console.log('pressed')}
            name={`Nome do Herói`}
            imageSource={`http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg`}
            favorite={true}
            favoriteOnpress={() => console.log('Favorite pressed')}
          />
          <HeroCard
            onPress={() => console.log('pressed')}
            name={`Nome do Herói`}
            imageSource={`http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg`}
            favorite={false}
            favoriteOnpress={() => console.log('Favorite pressed')}
          />
        </View>
        <View style={{ flexDirection: 'row'}}>
          <HeroCard
            onPress={() => console.log('pressed')}
            name={`Nome do Herói`}
            imageSource={`http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg`}
            favorite={true}
            favoriteOnpress={() => console.log('Favorite pressed')}
          />
          <HeroCard
            onPress={() => console.log('pressed')}
            name={`Nome do Herói`}
            imageSource={`http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg`}
            favorite={false}
            favoriteOnpress={() => console.log('Favorite pressed')}
          />
        </View>
        <HeroCard
          onPress={() => console.log('pressed')}
          name={`Nome do Herói`}
          imageSource={`http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg`}
          favorite={true}
          favoriteOnpress={() => console.log('Favorite pressed')}
        />
      </Container>
    </Background>
  );
};

export default Home;
