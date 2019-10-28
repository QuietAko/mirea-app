import React from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Camera from '../components/Camera.js';
import Focus from '../components/Focus.js';
import Ionicons from 'react-native-vector-icons/Ionicons';


class CameraScreen extends React.Component {
  render() {
    return (

      <Focus/>

    )
  }
}


class makeGuide extends React.Component {
  render() {
    return (
      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Button
          title="Сделать фото "
        />
      </View>
    );
  }
}

class chooseGuide extends React.Component {
  render() {
    return (
      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const nav = createBottomTabNavigator(
  {
    Создать: CameraScreen,
    Посмотреть: chooseGuide,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        
      }
    }),
    tabBarOptions: {
      labelStyle:{
        fontSize: 20,
        marginBottom: 15
      },
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

export default createAppContainer(nav);