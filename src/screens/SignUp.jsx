import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Colors, FontFamily, FontSize} from '../GlobalStyles';
import CustomTextInput from '../components/CustomTextInput';

// Dimensions for responsive design
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
        <TouchableOpacity>
          <Text
            style={styles.loginText}
            onPress={() => navigation.navigate('Login')}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
      {/* Body Section */}
      <View style={styles.MainBody}>
        <CustomTextInput placeholder="Full Name" label="Full Name" />
        <CustomTextInput placeholder="Email" label="Email" />
        <CustomTextInput placeholder="Password" label="Password" />
      </View>
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
    flex: 0.25,
    backgroundColor: Colors.Purple_2_Base,
    justifyContent: 'flex-end', // Aligns content to the bottom
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
    fontSize: FontSize.B2_Semibold, // Responsive font size for text
    fontFamily: FontFamily.B2_Semibold,
    fontWeight: 'bold',
    marginTop: hp('2%'),
  },

  loginText: {
    color: Colors.Light_4,
    fontSize: FontSize.B2_Semibold, // Responsive font size for text
    fontFamily: FontFamily.B2_Semibold,
    fontWeight: 'bold',
    marginTop: hp('2%'),
  },

  MainBody: {
    flex: 0.45,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
});
