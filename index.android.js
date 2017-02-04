/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Navigation from './js/App';

export default class shounar extends Component {
  render() {
    return (
      <Navigation />
    );
  }
}

AppRegistry.registerComponent('shounar', () => shounar);
