import React, { useEffect, useState } from 'react';
import { View, StatusBar, FlatList } from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import { Colors } from '../../styles';
import { loadHeroesRequest } from '../../redux/actions/heroes';
import { Background, Container } from '../../components/organisms';
import { Hero } from '../../redux/actions/heroes/types';
import { HeroCard, SearchBox } from '../../components/molecules';

import { Input } from '../../components/atoms';

export function homeNavigationOptions<Props>() {
  return {
    headerShown: false,
    headerTitle: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
}

const Home: React.FC = ({ navigation }) => {
  const dispatch = useDispatch();
  const { heroes, loading } = useSelector((state) => state.heroes);
  const [offset, setOffset] = useState<number>(0);
  const [filterByName, setFilterByName] = useState<string>('');
  console.log('filterByName')
  console.log(filterByName)

  useEffect(() => {
    dispatch(loadHeroesRequest(offset, filterByName));
  }, [dispatch, offset, filterByName]);

  const searchByname = (name: string) => {
    console.log("Filter " + name);
    setFilterByName(name);
    dispatch(loadHeroesRequest(0, filterByName));
    [];
  };

  const renderItem = (item: Hero) => {
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
        {/*<SearchBox
          onPress={() => console.log('Pressed')}
          value={filterByName}
          placeholder="Buscar personagem Marvel"
          onChangeText={searchByname}
        />*/}
        <FlatList
          numColumns={2}
          data={heroes}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => renderItem(item)}
          onRefresh={() => setOffset(0)}
          refreshing={loading}
          onEndReached={() => setOffset(offset + 20)}
          onEndReachedThreshold={0.5}
          stickyHeaderIndices={[0]}
          ListHeaderComponent={
            <SearchBox
              onPress={() => console.log('Pressed')}
              value={filterByName}
              placeholder="Buscar personagem Marvel"
              onChangeText={searchByname}
            />
          }
          style={{ backgroundColor: '#FFFFFF00', paddingTop: 0 }}
          centerContent
        />
      </Container>
    </Background>
  );
};

export default Home;
