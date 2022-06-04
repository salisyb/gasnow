import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './TabNavigation';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import SplashScreen from '../screens/SplashScreen';
import Welcome from '../screens/Welcome';
import ForgotPassword from '../screens/ForgotPassword';
import ForgotPasswordOtp from '../screens/ForgotPasswordOtp';

const Stack = createNativeStackNavigator();

export default function ScreenNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ForgotPasswordOtp" component={ForgotPasswordOtp} />
      <Stack.Screen name="HomeScreen" component={TabNavigation} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
