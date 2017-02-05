import React, { Component } from 'react';
import { View, Text, BackAndroid, StyleSheet } from 'react-native';
import NavigationBar from '../component/NavigationBar';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import FindTabBar from '../component/FindTabBar';
import px2dp from '../utils/px2dp';

export default class FindFragment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabNames: ['Tab1', 'Tab2', 'Tab3', 'Tab4', 'Tab5']
    };
  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', function () {
      BackAndroid.exitApp(0);
      return true;
    });
  }

  render() {
    let { tabNames } = this.state;
    return (
      <View style={styles.container}>
        <NavigationBar title='首页' />
        <ScrollableTabView
          renderTabBar={() => <FindTabBar tabNames={tabNames} />}
          tabBarPosition='top'>
          <View style={styles.content} tabLabel='key1'>
            <Text>#1</Text>
          </View>
          <View style={styles.content} tabLabel='key2'>
            <Text>#2</Text>
          </View>
          <View style={styles.content} tabLabel='key3'>
            <Text>#3</Text>
          </View>
          <View style={styles.content} tabLabel='key4'>
            <Text>#4</Text>
          </View>
        </ScrollableTabView>
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
  content: {
    height: px2dp(300),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EBEBEB'
  }
});
