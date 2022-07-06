import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, StyleSheet, Platform } from 'react-native';
import { ReportStackNavigator, TransactionsStackNavigator } from './StackNavigator';
import TransactionInputScreen from '../screens/TransactionInputScreen';

const Tab = createBottomTabNavigator();

const getTabBarVisibility = (route) => {
    const routeName = route.state
        ? route.state.routes[route.state.index].name
        : '';

    if (routeName === 'Enter Transaction') {
        return false;
    }

    return true;
}

const Navigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let url;

                    if (route.name === 'Manage')
                        url = require('../icon/refund.png');
                    else if (route.name === 'Report')
                        url = require('../icon/pie-chart.png');

                    //return icon for each tab navgiator
                    return <Image
                        source={url}
                        style={[styles.icon, { tintColor: color }]}

                    />;
                },

                // Style tab navigator
                headerShown: false,
                tabBarInactiveBackgroundColor: 'rgb(24,24,24)',
                tabBarActiveBackgroundColor : 'rgb(24,24, 24)',
                tabBarActiveTintColor: 'rgb(51, 222, 209)',
                tabBarInactiveTintColor: 'rgb(200,200,200)',
                tabBarLabelStyle: {
                    fontSize: 12,
                    paddingBottom: 5,
                },
            })}
        >

            {/* Add tab navigator here!! */}
            <Tab.Screen name="Manage" component={TransactionsStackNavigator} options={({ route }) => ({
            })} />
            <Tab.Screen name="Report" component={ReportStackNavigator} />


        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    icon: {
        height: 30,
        width: 30,
    }
});

export default Navigator;


