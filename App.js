import Task from './src/screens/tasks'
import Login from './src/screens/login'
import Dashboard from './src/screens/dashboard'
import { Provider } from "react-redux";
import store from './src/Redux/store';
import MyStack from './src/navigations/WhateverNavigation'

export default function App() {
  return (
    <Provider store={store}>
        <MyStack />
    </Provider>
  );
}
