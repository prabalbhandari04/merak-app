import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/login'
import Task from '../screens/tasks';
import Dashboard from '../screens/dashboard'

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options ={{headerShown:false}}
        />
        <Stack.Screen 
            name="Task" 
            component={Task} 
            options ={{headerShown:false}}
        />

        <Stack.Screen 
            name="Dashboard" 
            component={Dashboard} 
            options ={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack