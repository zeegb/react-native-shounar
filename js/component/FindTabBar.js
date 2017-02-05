import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import theme from '../constants/theme';
import px2dp from '../utils/px2dp';

export default class FindTabBar extends Component {
  static propTypes = {
    goToPage: PropTypes.func, // 跳转到对应tab的方法
    activeTab: PropTypes.number, // 当前被选中的tab下标
    tabs: PropTypes.array, // 所有tabs集合
    tabNames: PropTypes.array // 保存Tab名称
  }

  renderTabOption(tab, i) {
    const { activeTab, goToPage, tabNames } = this.props;
    let color = activeTab === i ? { backgroundColor: theme.mainThemeColor } : {}; // 判断i是否是当前选中的tab，设置不同的颜色
    return (
      <TouchableOpacity onPress={() => goToPage(i)} style={[styles.tab, color]} key={`${tab}`}>
        <View style={styles.tabItem}>
          <Text>
            {tabNames[i]}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.tabs}>
        {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: px2dp(30)
  },

  tab: {
    marginHorizontal: px2dp(5),
    height: px2dp(20),
    paddingHorizontal: px2dp(5),
    borderRadius: px2dp(15),
    justifyContent: 'center',
    alignItems: 'center'
  },

  tabItem: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
