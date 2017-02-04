/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Navigator, View } from 'react-native';
import MainPage from './page/MainPage';

export default class Navigation extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Navigator
          initialRoute={{component: MainPage}}
          renderScene={(route, navigator) => {
            return <route.component navigator={navigator} {...route.args} />
          }} />
      </View>
    )
  }
}
