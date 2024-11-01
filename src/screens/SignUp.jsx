import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {Colors, FontFamily, FontSize} from '../GlobalStyles';
import CustomTextInput from '../components/CustomTextInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CustomMainBotton from '../components/CustomMainBotton';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.screencontainer}>
      {/* StatusBar configuration */}
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
        <CustomTextInput placeholder="Full Name" label="Full Name" />
        <CustomTextInput placeholder="Email" label="Email" />
        <CustomTextInput placeholder="Password" label="Password" />
        <CustomMainBotton
          name="Sign Up"
          color={Colors.Purple_2_Base}
          onPress={() => navigation.navigate('Onboarding')}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  screencontainer: {
    flex: 1,
    backgroundColor: 'white',
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
});
