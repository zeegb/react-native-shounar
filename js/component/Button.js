import React, { Component, PropTypes } from 'react';
import { Text, View, StyleSheet, TouchableNativeFeedback } from 'react-native';
import px2dp from '../utils/px2dp';
import theme from '../constants/theme';

export default class Button extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func
  }

  render() {
    return (
      <TouchableNativeFeedback
        onPress={this.props.onPress}>
        {this._renderContent()}
      </TouchableNativeFeedback>
    );
  }

  _renderContent() {
    return (
      <View style={styles.button}>
        <Text style={styles.text}>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: px2dp(45),
    backgroundColor: theme.mainThemeColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3
  },
  text: {
    color: 'white',
    fontSize: px2dp(13)
  }
});
