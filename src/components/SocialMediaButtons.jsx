import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Colors, FontFamily, FontSize} from '../GlobalStyles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const SocialMediaButtons = ({icons = [], labels = []}) => {
  // Debugging logs to check props
  console.log('icons:', icons);
  console.log('labels:', labels);

  return (
    <View style={styles.socialMediaContainer}>
      {icons.map((icon, index) => (
        <View key={index} style={styles.socialMediaButton}>
          <Image source={icon} style={styles.socialMediaImage} />
          <Text style={styles.socialMediaText}>{labels[index]}</Text>
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
  },
  socialMediaButton: {
    alignItems: 'center',
    padding: wp('2%'),
    backgroundColor: Colors.Light_4,
    borderRadius: wp('2%'),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: wp('1%'),
    elevation: 3,
    marginHorizontal: wp('1%'),
  },
  socialMediaImage: {
    width: wp('10%'),
    height: wp('10%'),
    resizeMode: 'contain',
    marginTop: hp('1%'),
    marginBottom: hp('0.5%'),
  },
  socialMediaText: {
    color: Colors.Dark_0,
    fontSize: wp('3.5%'),
    fontFamily: FontFamily.B2_Semibold,
    fontWeight: 'bold',
    marginTop: hp('0.5%'),
  },
});
