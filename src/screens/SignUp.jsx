import React from 'react';
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

const SignUp = ({navigation}) => {
  return (
    <View style={styles.screencontainer}>
      {/* StatusBar configuration
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />
      {/* Header section */}
      <View style={styles.headercontainer}>
        <Text style={styles.headertitle}>Sign Up</Text>
        <Text style={styles.headertext}>Already Have an Account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>

      {/* Scrollable Body Section */}
      <KeyboardAwareScrollView
        style={styles.MainBody}
        contentContainerStyle={{flexGrow: 1}}
        extraScrollHeight={hp('5%')}
        enableOnAndroid={true}>
        <Authinputs />
        <CustomMainBotton
          name="Sign Up"
          color={Colors.Purple_2_Base}
          onPress={() => navigation.navigate('Onboarding')}
        />
        <View style={styles.Or_Sign_Up_With}>
          <View style={styles.line} />
          <Text style={styles.Or_Sign_Up_With_Text}>Or Sign Up using</Text>
          <View style={styles.line} />
        </View>

        {/* <View style={styles.socialmediacontainer}>
          <View style={styles.socialmediabutton}>
            <Image source={icons.twitter} style={styles.socialmediaimage} />
            <Text style={styles.socialmediatext}>Social Media</Text>
          </View>
          <View style={styles.socialmediabutton}>
            <Image source={icons.google} style={styles.socialmediaimage} />
            <Text style={styles.socialmediatext}>Social Media</Text>
          </View>
          <View style={styles.socialmediabutton}>
            <Image source={icons.facebook} style={styles.socialmediaimage} />
            <Text style={styles.socialmediatext}>Social Media</Text>
          </View>
        </View> */}

        <SocialMediaButtons
          icons={[icons.twitter, icons.google, icons.facebook]} // Use correct icon paths
          labels={['Twitter', 'Google', 'Facebook']}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SignUp;

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
  MainBody: {
    flex: 1,
    backgroundColor: 'white',
    padding: wp('5%'),
  },
  Or_Sign_Up_With: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('2%'),
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.Dark_4,
    marginHorizontal: wp('2%'),
  },
  Or_Sign_Up_With_Text: {
    color: Colors.Dark_0,
    fontSize: FontSize.P2_Regular,
    fontFamily: FontFamily.P2_Regular,
    fontWeight: 'regular',
  },

  socialmediacontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  socialmediatext: {
    color: Colors.Dark_0,
    fontSize: FontSize.B2_Semibold,
    fontFamily: FontFamily.B2_Semibold,
    fontWeight: 'bold',
  },
  socialmediabutton: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  socialmediaimage: {
    width: hp('15%'),
    height: wp('15%'),
    resizeMode: 'contain',
    marginTop: hp('1%'),
    marginBottom: hp('1%'),
  },
});
