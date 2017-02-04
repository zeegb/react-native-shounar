import { Platform, Dimensions, PixelRatio } from 'react-native';
import px2dp from '../utils/px2dp';

export default {
  pageBackgroundColor: '#f4f4f4',
  mainThemeColor: '#9acd32',
  screenHeight: Dimensions.get('window').height,
  screenWidth: Dimensions.get('window').width,
  touchableHighlightUnderlayColor: 'rgba(0,0,0,.4)',
  touchableOpacityActiveOpacity: 0.8,
  segment: {
    color: '#ccc',
    width: 1 / PixelRatio.get()
  },
  tabButton: {
    normalColor: '#aaa'
  },
  toolbar: {
    height: Platform.OS === 'android' ? px2dp(40) : px2dp(49),
    paddingTop: Platform.Version >= 21 ? px2dp(20) : 0,
    titleColor: '#fff',
    titleSize: Platform.OS === 'android' ? px2dp(16) : px2dp(14),
    textBtnSize: Platform.OS === 'android' ? px2dp(12) : px2dp(11)
  }
}
