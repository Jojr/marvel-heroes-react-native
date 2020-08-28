import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { StatusBar } from 'react-native';
import { Colors } from '../../styles';
import { loadHeroesRequest } from '../../redux/actions/heroes';
import { Background, Container } from '../../components/organisms';
import { Heroes } from '../../redux/actions/heroes/types';
import { HeroDetail } from '../../components/molecules';

export function detailNavigationOptions({ navigation }) {
  return {
    headerShown: false,
  };
}

const Detail: React.FC = ({ navigation }) => {
  const item = navigation.getParam('itemId');
  console.log(item)
  const dispatch = useDispatch();
  const { heroes, loading } = useSelector<any>((state) => state.heroes);
  const [offset, setOffset] = useState<number>(0);

  return (
    <Background>
      <StatusBar barStyle="light-content" backgroundColor={Colors.BLACK} />
      <Container>
        <HeroDetail
          uniqueId={item.id.toString()}
          onPress={() => navigation.goBack()}
          name={item.name}
          imageSource={`${item.thumbnail.path}.${item.thumbnail.extension}`}
          favorite={true}
          description={item.description}
          favoriteOnpress={() => console.log('Favorite pressed')}
        />
      </Container>
    </Background>
  );
};

Detail.sharedElements = (navigation, otherNavigation, showing) => {
  const item = navigation.getParam('itemId');
  return [item.id.toString()];
};

export default Detail;
