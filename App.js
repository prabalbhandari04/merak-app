import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './src/screens/tasks'
import { Provider } from "react-redux";
import store from './src/Redux/store';



export default function App() {
  return (
    <Provider store={store}>
        <View style={styles.container}>
          <Task />
        </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
});
