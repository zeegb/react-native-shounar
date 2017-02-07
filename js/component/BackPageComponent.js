import React, { Component } from 'react';
import { BackAndroid } from 'react-native';

export default class PageComponent extends Component {
  static propTypes = {
    navigator: React.PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this._handleBack.bind(this));
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this._handleBack.bind(this));
  }

  _handleBack() {
    const navigator = this.props.navigator;
    if (navigator && navigator.getCurrentRoutes().length > 1) {
      navigator.pop()
      return true;
    }
    return false;
  }
}
