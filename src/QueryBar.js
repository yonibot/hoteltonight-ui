import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native'

class QueryBar extends Component {
	render() {
		return (
			<View style={{backgroundColor: 'transparent', position: 'absolute', top: 66, zIndex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
				<View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
					<Text style={{color: 'black', fontSize: 30}}>Query Bar</Text>
					<Text style={{color: 'black', fontSize: 30}}>Bar</Text>
				</View>
			</View>
		)
	}
}


export { QueryBar as default };
