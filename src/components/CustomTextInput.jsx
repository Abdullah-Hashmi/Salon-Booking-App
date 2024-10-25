import React from 'react';
import {
  View,
  Text,
  TextInput as NativeTextInput,
  StyleSheet,
} from 'react-native';
import {Colors} from '../GlobalStyles';

const CustomTextInput = ({label, placeholder, value, onChangeText}) => {
  return (
    <View style={styles.inputContainer}>
      {/* Label for the TextInput */}
      {label && <Text style={styles.label}>{label}</Text>}
      <NativeTextInput
        style={styles.textInput}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#888"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 10, // Space between inputs
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  label: {
    fontSize: 10,
    color: Colors.Dark_0, // Label color
    marginBottom: 5,
  },
  textInput: {
    height: 50,
    borderColor: Colors.Dark_4,
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 15,
    fontSize: 16,
    color: '#333', // Text color
  },
});

export default CustomTextInput;
