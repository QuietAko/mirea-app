import React from 'react';
import {Footer, FooterTab, Root} from 'native-base';
import { Font, AppLoading } from "expo";
import { FlatList, StyleSheet, Text, View, Alert, Button, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';




export default class FlatListBasics extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {name: 'Подземелья города !', length: '30 минут', rating: 0.5},
            {name: 'Подземелья города !', length: '30 минут', rating: 0.5},
            {name: 'Подземелья города !', length: '30 минут', rating: 0.5},
            {name: 'Подземелья города !', length: '30 минут', rating: 0.5},
            {name: 'Подземелья города !', length: '30 минут', rating: 0.5},
            {name: 'Подземелья города !', length: '30 минут', rating: 0.5},
            {name: 'Подземелья города !', length: '30 минут', rating: 0.5},
            {name: 'Подземелья города !', length: '30 минут', rating: 0.5},
            {name: 'Подземелья города !', length: '30 минут', rating: 0.5},
            {name: 'Подземелья города !', length: '30 минут', rating: 0.5}
          ]}
          renderItem={({item}) => 
				
				<TouchableOpacity>
          			<View style={styles.guideBox}>
          				<Text style={styles.item}>{item.name}</Text>
          				<Text style={styles.item}>Рейтинг : {item.rating}</Text>
          				<Text style={styles.item}>{item.length}</Text>
          			</View>
				</TouchableOpacity>
      		}
      	  keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
	guideBox: {
		borderStyle: 'solid',
		borderWidth: 1
	},
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
  	marginBottom: 14,
    padding: 10,
    fontSize: 18,
    height: 44
  },
  btn:{
  	fontSize: 5
  }
})

