import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native'

class TopBar extends Component {
	render() {
		return (
			<View style={[this.props.style, {backgroundColor: '#2f1e2e', justifyContent: 'center', alignItems: 'center'}]}>
				<Text style={{color: 'white', fontSize: 20}}>Hotel Tonight</Text>
			</View>
		)
	}
}


export { TopBar as default };
