import React, { Component } from 'react';
import { Text, StyleSheet, View, ListView } from 'react-native'

class ResultsList extends Component {
	render() {
		return (
			<View style={{flex: 0.9, backgroundColor: 'blue'}}>

				<ListView
					style={ styles.mainList }
					dataSource={ this.state.dataSource }
					renderRow={ this.rowRenderer }
					renderHeader={ this.headerRenderer }
					renderSeparator={ this.separatorRenderer }
				/>

			</View>
		)
	}
}


export { ResultsList as default };
