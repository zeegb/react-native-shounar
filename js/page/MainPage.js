import React, { Component, PropTypes } from 'react';
import { View, BackAndroid } from 'react-native';
import TabBar from '../component/TabBar.js';

export default class MainScene extends Component {
  static propTypes = {
    navigator: PropTypes.object
  }
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
      <View style={{flex: 1}}>
        <TabBar navigator={this.props.navigator} />
      </View>
    );
  }
}
