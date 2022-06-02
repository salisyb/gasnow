import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Signin from './app/screens/signin';
// import SplashScreen from 'react-native-splash-screen';

// export default class App extends ({Component}) {
// componentDidMount() {
//   // do stuff while splash screen is shown
//   // After having done stuff (such as async tasks) hide the splash screen
//   SplashScreen.hide();
export default function App() {
  return <Signin />;
}
