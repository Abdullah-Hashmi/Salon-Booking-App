import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Colors, FontFamily, FontSize} from '../GlobalStyles';
import CustomTextInput from '../components/CustomTextInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import icons from '../constants/icons';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CustomMainBotton from '../components/CustomMainBotton';
import Authinputs from '../components/Authinputs';
import SocialMediaButtons from '../components/SocialMediaButtons';

const Login = ({navigation}) => {
  return (
    <View style={styles.screencontainer}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />
      {/* Header section */}
      <View style={styles.headercontainer}>
        <Text style={styles.headertitle}>Sign In</Text>
        <Text style={styles.headertext}>Don't Have an Account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.loginText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      {/* Scrollable Body Section */}
      <KeyboardAwareScrollView
        style={styles.mainBody}
        contentContainerStyle={styles.scrollContainer}
        extraScrollHeight={hp('5%')}
        enableOnAndroid={true}>
        <Authinputs navigation={navigation} title={'Sign In'} />
        <View style={styles.orSignUpWith}>
          <View style={styles.line} />
          <Text style={styles.orSignUpWithText}>Or Sign In using</Text>
          <View style={styles.line} />
        </View>

        <SocialMediaButtons
          icons={[icons.twitter, icons.google, icons.facebook]} // Use correct icon paths
          labels={['Twitter', 'Google', 'Facebook']}
          Colors={['#03A9F4', '#1976D2', '#3F51B4']}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  screencontainer: {
    flex: 1,
    backgroundColor: Colors.Red_0,
  },
  headercontainer: {
    height: hp('25%'),
    backgroundColor: Colors.Purple_2_Base,
    justifyContent: 'flex-end',
    paddingLeft: wp('7%'),
    paddingBottom: hp('3%'),
  },
  headertitle: {
    color: Colors.Light_4,
    fontSize: FontSize.H4_Light,
    fontFamily: FontFamily.H4_bold,
    fontWeight: 'bold',
  },
  headertext: {
    color: Colors.Light_4,
    fontSize: FontSize.B2_Semibold,
    fontFamily: FontFamily.B2_Semibold,
    fontWeight: 'bold',
    marginTop: hp('2%'),
  },
  loginText: {
    color: Colors.Light_4,
    fontSize: FontSize.B2_Semibold,
    fontFamily: FontFamily.B2_Semibold,
    fontWeight: 'bold',
    marginTop: hp('2%'),
  },
  mainBody: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('2%'),
    justifyContent: 'center', // Centers content vertically within the container
  },
  orSignUpWith: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp('2%'),
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.Dark_4,
    marginHorizontal: wp('2%'),
  },
  orSignUpWithText: {
    color: Colors.Dark_0,
    fontSize: FontSize.P2_Regular,
    fontFamily: FontFamily.P2_Regular,
  },
  socialmediacontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
