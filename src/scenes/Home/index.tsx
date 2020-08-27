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
import { SharedElement } from 'react-navigation-shared-element';
import * as Animatable from 'react-native-animatable';
import { Transition, Transitioning } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Feather';
Icon.loadFont();
import { Typography, Spacing, Colors } from '../../styles';
import { loadHeroesRequest } from '../../redux/actions/heroes';

interface Car {
  props: any;
  doAnimation: number;
  setDoAnimation: number;
  password: string;
  email: string;
}

export function navigationOptions({ navigation }) {
  return {
    headerShown: true,
  };
}

const Home: React.FC = (props) => {
  const dispatch = useDispatch();
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    dispatch(loadHeroesRequest(offset));
  }, [dispatch, offset]);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <SharedElement id="menu-icon">
          <Text style={styles.headerText}>AMG</Text>
        </SharedElement>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Detail')}
          activeOpacity={1}>
          <SharedElement id="car-photo">
            <Text>LALALLALA</Text>
          </SharedElement>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    //padding: Spacing.SCALE_20,
  },
  header: {
    paddingLeft: Spacing.SCALE_20,
  },
  headerText: {
    color: Colors.WHITE,
    fontSize: Typography.FONT_SIZE_30,
    padding: Spacing.SCALE_20,
    //fontFamily: Typography.FONT_FAMILY_BOLD,
  },
  carImage: {
    marginTop: '30%',
    width: '260%',
    height: '75%',
    marginLeft: -170,
  },
});

export default Home;
