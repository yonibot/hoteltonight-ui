import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native'

class TopBar extends Component {
	render() {
		return (
			<View style={[this.props.style, {backgroundColor: 'blue'}]}>
			</View>
		)
	}
}


export { TopBar as default };
