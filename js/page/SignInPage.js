import React from 'react';
import { View, StyleSheet, TextInput, PixelRatio, Platform } from 'react-native';
import BackPageComponent from '../component/BackPageComponent';
import ImageButton from '../component/ImageButton';
import TextButton from '../component/TextButton';
import Button from '../component/Button';
import NavigationBar from '../component/NavigationBar';
import px2dp from '../utils/px2dp';
import theme from '../constants/theme';

export default class SignInPage extends BackPageComponent {
  constructor(props) {
    super(props);

    this.state = {};
    this.toTryUse = this.toTryUse.bind(this);
    this.toSignUp = this.toSignUp.bind(this);
    this.forgetPassword = this.forgetPassword.bind(this);
  }

  toTryUse() {

  }

  toSignUp() {

  }

  forgetPassword() {

  }
  render() {
    return (
      <View style={styles.container}>
        <NavigationBar
          title='登录'
          leftBtnText='试用一下'
          rightBtnText='注册'
          leftBtnPress={this.tryUse}
          rightBtnPress={this.signUp} />
        <View style={styles.editGroup}>
          <View style={styles.editView}>
            <TextInput
              style={styles.edit}
              underlineColorAndroid='transparent'
              placeholder='输入邮箱地址'
              placeholderTextColor='#c4c4c4' />
          </View>
          <View style={{height: 1 / PixelRatio.get(), backgroundColor: '#c4c4c4'}} />
          <View style={styles.editView}>
            <TextInput
              style={styles.edit}
              underlineColorAndroid='transparent'
              placeholder='密码'
              placeholderTextColor='#c4c4c4' />
          </View>
          <View style={{marginTop: px2dp(10)}}>
            <Button text='登录' onPress={this._handleBack} />
          </View>
          <View style={styles.textButtonLine}>
            <TextButton text='忘记密码?' onPress={this.forgetPassword} color='#fff' />
          </View>
          <View style={styles.thirdPartyView}>
            <ImageButton text='微信' image={require('../assets/wechat_login.png')} color='rgba(255,255,255,0.7)' btnStyle={styles.ImageButton} />
          </View>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.pageBackgroundColor
  },
  actionBar: {
    marginTop: (Platform.OS === 'ios') ? px2dp(10) : 0
  },
  logo: {
    alignItems: 'center',
    marginTop: px2dp(40)
  },
  edit: {
    height: px2dp(40),
    fontSize: px2dp(13),
    backgroundColor: '#fff',
    paddingLeft: px2dp(15),
    paddingRight: px2dp(15)
  },
  editView: {
    height: px2dp(48),
    backgroundColor: 'white',
    justifyContent: 'center',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3
  },
  editGroup: {
    margin: px2dp(20)
  },
  textButtonLine: {
    marginTop: px2dp(12),
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  thirdPartyView: {
    marginTop: px2dp(10),
    justifyContent: 'center',
    alignItems: 'center'
  },
  ImageButton: {
    backgroundColor: theme.mainThemeColor,
    borderRadius: 60,
    height: px2dp(60),
    width: px2dp(60)
  }
});
