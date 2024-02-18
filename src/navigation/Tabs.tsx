import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Summary from '../screens/Summary';
import User from '../screens/User';
import theme from '../theme/theme';

const Tabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Summary') {
            iconName = focused ? 'heart' : 'heart-o';
          } else if (route.name === 'User') {
            iconName = focused ? 'user' : 'user-o';
          }

          return <FontAwesome name={iconName!} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: { fontSize: 12 }
      })}
    >
      <Tab.Screen
        name="Summary"
        component={Summary}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Tab.Screen name="User" component={User} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default Tabs;
