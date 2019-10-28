import React from 'react';
import {Footer, FooterTab, Button, Root} from 'native-base';
import { Font, AppLoading } from "expo";
import {StyleSheet, Text,View} from 'react-native';
import {MODES} from "../constants";
import PropTypes from 'prop-types';


const AppFooter = ({mode = MODES.CAMERA, setMode = () => {}}) => (
	<Footer>
		<FooterTab>
			<Button
				active={mode === MODES.ARTICLES}
				onPress={() => setMode(MODES.CAMERA)}>
				<Text style={{color: 'white'}}>Камера</Text>
			</Button>
		</FooterTab>
	</Footer>
);

AppFooter.propTypes = {
	mode: PropTypes.string,
	setMode: PropTypes.func
};


export default AppFooter;
