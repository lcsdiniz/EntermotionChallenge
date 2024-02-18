import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login';
import Tabs from './Tabs';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Tabs"
          component={Tabs}
        />
      </Stack.Navigator>
    </NavigationContainer >
  );
};

export default MainStack;
