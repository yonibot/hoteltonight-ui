import React, { Component } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native'

class HotelRow extends Component {
	render() {
		return (
			<Image
				source={require('../assets/images/hotelfront.jpg')}
				style={{ width: null, height: 200 }}>
				<View style={{flex: 1, justifyContent: 'space-between', backgroundColor: 'transparent', paddingHorizontal: 10}}>
					<View style={{flex: 0.7}}>
						<Text style={{color: 'white'}}>29 people viewing this property.</Text>
					</View>
					<View style={{flex: 0.3, flexDirection: 'row', justifyContent: 'space-between'}}>
						<View>
							<Text style={{color: 'white'}}>One</Text>
							<Text style={{color: 'white'}}>Two</Text>
							<Text style={{color: 'white'}}>Three</Text>
						</View>
						<View>
							<Text style={{color: 'white'}}>Price goes here</Text>
						</View>
					</View>
				</View>
			</Image>
		)
	}
}


export { HotelRow as default };
