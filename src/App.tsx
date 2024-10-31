import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppNavigation from './navigations/AppNavigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <AppNavigation />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
