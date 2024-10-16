import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppNavigation from './navigations/AppNavigation';
import {Text, View} from 'react-native';

export default function App() {
  return (
    <SafeAreaProvider>
      <AppNavigation />
    </SafeAreaProvider>
  );
}
