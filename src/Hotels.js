import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';
import MainPage from './MainPage'

export default class Hotels extends Component {
	static title = 'Scrollable top bar';
  static appbarElevation = 0;
  state = {
    index: 0,
    routes: [
      { key: '1', icon: 'ios-heart' },
      { key: '2', icon: 'md-grid' },
      { key: '3', icon: 'ios-paper-outline' },
      { key: '4', icon: 'md-ice-cream' },
      { key: '5', icon: 'ios-contact' },

    ],
  };

  _handleChangeTab = (index) => {
    this.setState({
      index,
    });
  };

  _renderIcon = ({ route }: any) => {
    return (
      <Icon
        name={route.icon}
        size={24}
        color='white'
      />
    );
  };

  _renderHeader = (props) => {
    return (
      <TabBar
        {...props}
        indicatorStyle={styles.indicator}
        style={styles.tabbar}
        labelStyle={styles.label}
        renderIcon={this._renderIcon}
      />
    );
  };

  _renderScene = ({ route }) => {
    return <MainPage />;
  };

  render() {
    return (
      <TabViewAnimated
        style={[ styles.container, this.props.style ]}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderFooter={this._renderHeader}
        onRequestChangeTab={this._handleChangeTab}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabbar: {
    backgroundColor: '#3b2350',
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    backgroundColor: '#6a438f',
  },
  label: {
    color: '#fff',
    fontWeight: '400',
  },
});