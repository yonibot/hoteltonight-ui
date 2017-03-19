import React, { Component } from 'react';
import { Text, StyleSheet, View, ListView, Image } from 'react-native'
import HotelRow from './HotelRow';

class ResultsList extends Component {
	static PropTypes = {
		data: React.PropTypes.array
	}

	constructor(props) {
		super(props);
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		this.state = {
			dataSource: ds.cloneWithRows(this.props.data)
		}
	}

	_renderHeader = (rowData) => (
		<Image
      source={require('../assets/images/nyhotelmap.jpeg')}
      style={{ height: 150 }}  />
	)

	_renderRow = (rowData) => (
		<HotelRow data={ rowData } />
	)

	_renderSeparator = (sectionId, rowId) => (
		<View 
			style={{height: 3, backgroundColor: 'black'}}
			key={rowId}>
		</View>
	)

	render() {
		return (
			<View style={{flex: 0.9}}>
				<ListView
					dataSource={ this.state.dataSource }
					renderRow={ this._renderRow }
					renderHeader={ this._renderHeader }
					renderSeparator={ this._renderSeparator }
				/>
			</View>
		)
	}
}


export { ResultsList as default };
