import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native'
import TopBar from './TopBar';
import SearchBar from './SearchBar';
import ResultsList from './ResultsList';
import rawData from './rawData';

const data = rawData();

class MainPage extends Component {
	render() {
		return (
			<View>
				<TopBar />
				{/* <ResultsList
					data={data} /> */}
			</View>
		)
	}
}


export { MainPage as default };
