import React, { Component, PropTypes } from 'react';
import { StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import TabNavigator from 'react-native-tab-navigator';
import CompassFragment from '../page/CompassFragment';
import FindFragment from '../page/FindFragment';
import MeFragment from '../page/MeFragment';
import px2dp from '../utils/px2dp.js';

export default class TabBar extends Component {
  static propTypes = {
    navigator: PropTypes.object,
    selectedColor: PropTypes.string,
    normalColor: PropTypes.string
  }
  static defaultProps = {
    selectedColor: '#9acd32',
    normalColor: '#a9a9a9'
  };
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
      tabName: ['查看', '发现', '个人中心']
    }
  }

  render() {
    const { selectedColor } = this.props;
    const { tabName } = this.state;
    return (
      <TabNavigator
        tabBarStyle={styles.tabbar}
        sceneStyle={{ paddingBottom: styles.tabbar.height }}>
        <TabNavigator.Item
          tabStyle={styles.tabStyle}
          title={tabName[0]}
          selected={this.state.selectedTab === 'home'}
          selectedTitleStyle={{color: selectedColor}}
          renderIcon={() => <Image style={styles.tab} source={this.state.searchNormal} />}
          renderSelectedIcon={() => <Image style={styles.tab} source={this.state.searchSelected} />}
          onPress={() => this.setState({ selectedTab: 'home' })}>
          {<FindFragment navigator={this.props.navigator} />}
        </TabNavigator.Item>
        <TabNavigator.Item
          tabStyle={styles.tabStyle}
          title={tabName[1]}
          selected={this.state.selectedTab === 'compass'}
          selectedTitleStyle={{color: selectedColor}}
          renderIcon={() => <Image style={styles.tab} source={this.state.reorderNormal} />}
          renderSelectedIcon={() => <Image style={styles.tab} source={this.state.reorderSelected} />}
          onPress={() => this.setState({ selectedTab: 'compass' })}>
          {<CompassFragment />}
        </TabNavigator.Item>
        <TabNavigator.Item
          tabStyle={styles.tabStyle}
          title={tabName[2]}
          selected={this.state.selectedTab === 'notification'}
          selectedTitleStyle={{color: selectedColor}}
          renderIcon={() => <Image style={styles.tab} source={this.state.contactNormal} />}
          renderSelectedIcon={() => <Image style={styles.tab} source={this.state.contactSelected} />}
          onPress={() => this.setState({ selectedTab: 'notification' })}>
          {<MeFragment navigator={this.props.navigator} />}
        </TabNavigator.Item>
      </TabNavigator>
    );
  }

  componentWillMount() {
    const { selectedColor, normalColor } = this.props;
    Icon.getImageSource('md-search', 50, normalColor).then((source) => this.setState({ searchNormal: source }));
    Icon.getImageSource('md-search', 50, selectedColor).then((source) => this.setState({ searchSelected: source }));
    Icon.getImageSource('md-contact', 50, normalColor).then((source) => this.setState({ contactNormal: source }));
    Icon.getImageSource('md-contact', 50, selectedColor).then((source) => this.setState({ contactSelected: source }));
    Icon.getImageSource('md-reorder', 50, normalColor).then((source) => this.setState({ reorderNormal: source }));
    Icon.getImageSource('md-reorder', 50, selectedColor).then((source) => this.setState({ reorderSelected: source }));
  }
}

const styles = StyleSheet.create({
  tabbar: {
    height: px2dp(48),
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  tabStyle: {},
  tab: {
    width: px2dp(20),
    height: px2dp(20)
  }
});
