import React, { useEffect, useState } from 'react';
import { RefreshControl, StatusBar, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Colors } from '../../styles';
import { loadHeroesRequest } from '../../redux/actions/heroes';
import { Background, Container } from '../../components/organisms';
import { Hero } from '../../redux/actions/heroes/types';
import { HeroCard, SearchBox } from '../../components/molecules';

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

  useEffect(() => {
    dispatch(loadHeroesRequest(offset, filterByName));
  }, [dispatch, offset, filterByName]);

  const searchByname = (name: string) => {
    setFilterByName(name);
    setOffset(0);
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
          //columnWrapperStyle={{ justifyContent: 'flex-start' }}
          data={heroes}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => renderItem(item)}
          onEndReached={() => setOffset(offset + 20)}
          onEndReachedThreshold={0.5}
          stickyHeaderIndices={[0]}
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={() => setOffset(0)}
              title="Deslize para atualizar"
              tintColor={Colors.WHITE}
              titleColor={Colors.WHITE}
            />
          }
          ListHeaderComponent={
            <SearchBox
              onPress={setFilterByName}
              value={filterByName}
              placeholder="Buscar personagem Marvel"
              onChangeText={searchByname}
            />
          }
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start' }}
        />
      </Container>
    </Background>
  );
};

export default Home;
