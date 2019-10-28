import React from 'react';
import Camera from '../components/Camera.js';
import { withNavigationFocus } from 'react-navigation';

class MyWrapComponent extends React.Component {
render() {
return this.props.isFocused ? <Camera/> : <></>;
}
}

export default withNavigationFocus(MyWrapComponent );