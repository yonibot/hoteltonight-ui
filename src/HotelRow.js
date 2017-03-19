import React, { Component } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native'

class HotelRow extends Component {
	render() {
		return (
			<Image
				source={require('../assets/images/hotelfront.jpg')}
				style={{ width: null, height: 200 }}>
				<Text>Test me</Text>
			</Image>
		)
	}
}


export { HotelRow as default };
