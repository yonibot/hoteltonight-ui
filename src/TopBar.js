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



// **********************************
// Three Steps to Flexbox Development
// **********************************

// 1. Choose the main axis - flexDirection
// 2. Align the main axis - justifyContent
// 3. Align the cross axis - alignItems