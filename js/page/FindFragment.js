import React, { Component } from 'react';
import { View, Text, BackAndroid, StyleSheet } from 'react-native';
import NavigationBar from '../component/NavigationBar';

export default class FindFragment extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', function () {
      BackAndroid.exitApp(0);
      return true;
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigationBar title='首页' />
        <Text style={styles.welcome}>
          Welcome to React Native111!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
