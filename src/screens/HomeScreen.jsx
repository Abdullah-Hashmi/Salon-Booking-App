import React from 'react';
import {SafeAreaView, Text} from 'react-native';
const HomeScreen = () => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30, color: 'red'}}>HomeScreen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
