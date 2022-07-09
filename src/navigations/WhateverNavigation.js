import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/login'
import Task from '../screens/tasks';
import Dashboard from '../screens/dashboard'
import Attendance from '../screens/attendance'
import Profile from '../screens/profile'
import Expense from '../screens/expense';
import ExpenseInput from '../screens/expenseInput';
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

        <Stack.Screen 
            name="Attendance" 
            component={Attendance} 
            options ={{headerShown:false}}
        />

        <Stack.Screen 
            name="Profile" 
            component={Profile} 
            options ={{headerShown:false}}
        />
        <Stack.Screen
            name="Expense"
            component={Expense}
            options ={{headerShown:false}}
        />
        <Stack.Screen
            name="ExpenseInput"
            component={ExpenseInput}
            options ={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack