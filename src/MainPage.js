import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native'
import TopBar from './TopBar';
import SearchBar from './SearchBar';
import ResultsList from './ResultsList';


class MainPage extends Component {
	render() {
		return (
			<View style={{flex: 1}}>
				<TopBar style={{ flex: 0.1}}/>
				<ResultsList />
			</View>
		)
	}
}


export { MainPage as default };
