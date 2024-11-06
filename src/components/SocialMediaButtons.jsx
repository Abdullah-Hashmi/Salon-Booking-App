import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Colors, FontFamily, FontSize} from '../GlobalStyles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const SocialMediaButtons = ({icons = [], labels = [], Colors = []}) => {
  // Debugging logs to check props
  console.log('icons:', icons);
  console.log('labels:', labels);

  return (
    <View style={styles.socialMediaContainer}>
      {icons.map((icon, index) => (
        <View key={index} style={styles.socialMediaButton}>
          <Image source={icon} style={styles.socialMediaImage} />
          <Text style={[styles.socialMediaText, {color: Colors[index]}]}>
            {labels[index]}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default SocialMediaButtons;

const styles = StyleSheet.create({
  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('2%'),
    bottom: hp('1%'),
    // backgroundColor: Colors.Red_0,
  },
  socialMediaButton: {
    alignItems: 'center',
    padding: wp('2%'),
    // backgroundColor: Colors.Blue_1,
    borderRadius: wp('2%'),
    width: wp('40%'),
    marginHorizontal: wp('1%'),
  },
  socialMediaImage: {
    width: wp('30%'),
    height: wp('15%'),
    resizeMode: 'contain',
    marginTop: hp('1%'),
    marginBottom: hp('0.5%'),
    alignSelf: 'center',
    // backgroundColor: Colors.Red_2,
  },
  socialMediaText: {
    color: Colors.Dark_0,
    fontFamily: FontFamily.B2_Semibold,
    fontWeight: 'bold',
    marginTop: hp('0.5%'),
  },
});
