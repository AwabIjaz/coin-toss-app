import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';

const Root = createStackNavigator();

export default function RootStack() {
  return (
    <Root.Navigator screenOptions={{headerShown: false}}>
      <Root.Screen name="Home" component={Home} />
    </Root.Navigator>
  );
}
