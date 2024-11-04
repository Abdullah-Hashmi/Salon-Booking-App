import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomTextInput from './CustomTextInput';

const Authinputs = () => {
  return (
    <View>
      <CustomTextInput placeholder="Full Name" label="Full Name" />
      <CustomTextInput placeholder="Email" label="Email" />
      <CustomTextInput placeholder="Password" label="Password" />
    </View>
  );
};

export default Authinputs;

const styles = StyleSheet.create({});
