import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ScreenNavigation from './app/navigations/ScreentNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <ScreenNavigation />
    </NavigationContainer>
  );
}
