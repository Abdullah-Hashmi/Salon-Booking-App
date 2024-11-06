import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen, Onboarding, Login, SignUp} from '../screens';
import BottomTabNativation from './BottomTabNativation';
import Home from '../screens/Home';
import Authinputs from '../components/Authinputs';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{
          headerShown: false,
        }}>
        {/* <Stack.Screen name="Splash" component={Splash} /> */}
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="Auth" component={Authinputs} /> */}
        {/* <Stack.Screen name="Main" component={BottomTabNativation} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
