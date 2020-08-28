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
  FlatList,
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

  const renderItem = (item: Heroes) => {
    console.log('item')
    console.log(item)
    return (
      <HeroCard
        onPress={() => console.log('pressed')}
        name={item.name}
        //imageSource={`http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg`}
        imageSource={`${item.thumbnail.path}.${item.thumbnail.extension}`}
        favorite={true}
        favoriteOnpress={() => console.log('Favorite pressed')}
      />
    );
  };

  return (
    <Background>
      <StatusBar barStyle="light-content" backgroundColor={Colors.BLACK} />
      <Container>
        <FlatList
          //columnWrapperStyle={{ justifyContent: 'space-between' }}
          numColumns={2}
          data={heroes[0]}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => renderItem(item)}
        />
      </Container>
    </Background>
  );
};

export default Home;
