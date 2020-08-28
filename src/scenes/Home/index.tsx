import React, { useEffect, useState } from 'react';
import { StatusBar, FlatList } from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
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

const Home: React.FC = ({ navigation }) => {
  const dispatch = useDispatch();
  const { heroes, loading } = useSelector((state) => state.heroes);
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    dispatch(loadHeroesRequest(offset));
  }, [dispatch, offset]);

  const renderItem = (item: Heroes) => {
    return (
      <HeroCard
        onPress={() => {
          navigation.navigate('Detail', {
            itemId: item,
          });
        }}
        uniqueId={item.id.toString()}
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
          columnWrapperStyle={{ flex: 1, justifyContent: "space-around" }}
          numColumns={2}
          data={heroes}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => renderItem(item)}
          onRefresh={() => setOffset(0)}
          refreshing={loading}
          onEndReached={() => setOffset(offset + 20)}
          onEndReachedThreshold={0.5}
        />
      </Container>
    </Background>
  );
};

export default Home;
