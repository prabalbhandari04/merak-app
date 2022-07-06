import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useLayoutEffect } from 'react';
import ReportScreen from '../screens/ReportScreen';
import TransactionScreen from '../screens/TransactionScreen';
import TransactionDetailScreen from '../screens/TransactionDetail';
import TransactionInputScreen from '../screens/TransactionInputScreen';
import WalletMoneyDetail from '../screens/WalletMoneyDetail';


const Stack = createNativeStackNavigator();

{/* configuring for style default header stack navigators */ }
const screenOptionStyle = {
    headerStyle: {
        backgroundColor: 'rgb(24,24,24)',

    },
    headerTintColor: 'rgb(52,222,209)',
    headerBackTitle: "Back",
    headerShadowVisible: false,
};




{/* configuring screen related to "Transaction" tab */ }
function TransactionsStackNavigator({ navigation, route }) {
    useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        if (routeName === "Add transaction") {
            navigation.setOptions({ tabBarStyle: { display: 'none' } });
        } else {
            navigation.setOptions({
                tabBarStyle: {
                    display: 'flex', height: Platform.OS === 'ios' ? '10%' : '8%',
                    position: 'absolute',
                    backgroundColor: 'rgb(255,255,255)',
                    shadowColor: '#000000',
                    shadowOffset: {
                        width: 0,
                        height: 1
                    },
                    shadowRadius: 5,
                    shadowOpacity: 0.2,
                    paddingLeft: 2,
                    paddingRight: 2,
                    zIndex: 2,
                }
            });
        }
    }, [navigation, route]);
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Transaction" component={TransactionScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Add transaction" component={TransactionInputScreen} />
            <Stack.Screen name="Transaction Details" component={TransactionDetailScreen} />
            <Stack.Screen name="Wallet details" component={WalletMoneyDetail} />
        </Stack.Navigator>
    );
}

TransactionsStackNavigator.navigationOptions = ({ navigation }) => {

    let tabBarVisible = true;

    let routeName = navigation.state.routes[navigation.state.index].routeName

    if (routeName == 'Transaction') {
        tabBarVisible = false
    }

    return {
        tabBarVisible,
    }
}


{/* configuring screen related to "Thống kê" tab */ }
function ReportStackNavigator({ navigation, route }) {
    useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        if (routeName === "") {
            navigation.setOptions({ tabBarStyle: { display: 'none' } });
        } else {
            navigation.setOptions({
                tabBarStyle: {
                    display: 'flex', display: 'flex', height: Platform.OS === 'ios' ? '10%' : '8%',
                    position: 'absolute',
                    backgroundColor: 'rgb(255,255,255)',
                    shadowColor: '#000000',
                    shadowOffset: {
                        width: 0,
                        height: 1
                    },
                    shadowRadius: 5,
                    shadowOpacity: 0.2,
                    paddingLeft: 2,
                    paddingRight: 2,
                    zIndex: 2,
                }
            });
        }
    }, [navigation, route]);
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Thống kê" component={ReportScreen} options={{ headerShown: false }} />

        </Stack.Navigator>
    );
}



export {  ReportStackNavigator, TransactionsStackNavigator }