import React from 'react';
import {Container, Content} from 'native-base';
import {StyleSheet, Text, View} from 'react-native';
import AppFooterContainer from './containers/AppFooterContainer.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';
import {MODES} from './constants';
import Navi from './components/Nav.js';

const initialState = {
	mode: MODES.ARTICLES
};

const store = createStore(reducers, initialState);

const styles = StyleSheet.create({
	container: {
		padding: 20
	},
});

const App = () => (
	<Provider store={store}>
		<Navi/>
	</Provider>
);

export default App;