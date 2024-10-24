import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Login = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          fontSize: 30,
          color: 'red',
          fontWeight: 'bold',
        }}>
        Login
      </Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
