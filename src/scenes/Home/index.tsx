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
import { Colors } from '../../styles';
import { loadHeroesRequest } from '../../redux/actions/heroes';
import { Background, Container } from '../../components/organisms';
import { Heroes } from '../../redux/actions/heroes/types';
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

  useEffect(() => {
    dispatch(loadHeroesRequest(offset));
  }, [loadHeroesRequest, offset]);

  const renderItem = (item: Heroes) => {
    return (
      <HeroCard
        onPress={() => console.log(`${item.name}`)}
        name={item.name}
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
          data={heroes}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => renderItem(item)}
          //onRefresh={() => setOffset(0)}
          onEndReached={() => setOffset(offset + 20)}
          onEndReachedThreshold={0.5}
        />
      </Container>
    </Background>
  );
};

export default Home;
