import React from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import List from '../components/AppFooter.js'
import CreatorGid from '../components/CreatorGid.js'
import Ionicons from 'react-native-vector-icons/Ionicons';


class CameraScreen extends React.Component {
  render() {
    return (

      <CreatorGid/>

    )
  }
}


class chooseGuide extends React.Component {
  render() {
    return (
      <List/>
    );
  }
}

const nav = createBottomTabNavigator(
  {
    Создать: CameraScreen,
    Экскурсии: chooseGuide,
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
      inactiveTintColor: 'gray'
    },
    initialRouteName: "Создать"

  }
);

export default createAppContainer(nav);