import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import {Colors} from './styles';

function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Colors.WHITE_LIGHT} />
      <AppNavigator />
    </NavigationContainer>
  );
}

export default App;
