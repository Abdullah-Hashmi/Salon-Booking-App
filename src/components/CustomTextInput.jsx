import React from 'react';
import {
  View,
  Text,
  TextInput as NativeTextInput,
  StyleSheet,
} from 'react-native';
import {Colors} from '../GlobalStyles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CustomTextInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
}) => {
  return (
    <View style={styles.inputContainer}>
      {label && <Text style={styles.label}>{label}</Text>}
      <NativeTextInput
        style={styles.textInput}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#888"
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  inputContainer: {
    width: wp('90%'),
    marginVertical: hp('1.2%'),
    alignSelf: 'center',
  },
  label: {
    fontSize: wp('3.5%'),
    color: Colors.Dark_0,
    marginBottom: hp('0.5%'),
  },
  textInput: {
    height: hp('6%'),
    borderColor: Colors.Dark_4,
    borderWidth: 1,
    borderRadius: wp('2%'),
    paddingHorizontal: wp('4%'),
    fontSize: wp('4%'),
    color: '#333',
  },
});
