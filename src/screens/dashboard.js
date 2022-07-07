import React,{ useEffect } from 'react'
import { Text, View ,ScrollView, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styles} from '../global/mystyle'

import {useSelector, useDispatch} from 'react-redux';
import {loadUnassigned, loadPending, loadAccepted} from '../../src/Redux/Actions/ordersActions';

const Dashboard = ({ navigation })=>{
    const {accepted, pending, unassigned} = useSelector(state => state.data); //Redux State

    const dispatch = useDispatch(); //Redux Dispatch

    const totasks = async()=>{
        navigation.navigate("Task",{state:1})
    }

    const toattendance = async()=>{
        navigation.navigate("Attendance",{state:1})
    }

    const reload = ()=>{
        dispatch(loadUnassigned());
        dispatch(loadAccepted());
        dispatch(loadPending());
    }


    const tologin = async()=>{
        const value = await AsyncStorage.removeItem('access_token')
        navigation.navigate("Login",{state:1})
    }    
    
    return(
        <View style ={styles.container}>
            <Text style={styles.text_title}>
                  Dashboard
            </Text>

            <Button title='reload' onPress={reload}></Button>

            <View>
                <View style={styles.dash_info}>
                    <Text style={styles.info_text}>My Tasks</Text>
                    <Text style={styles.the_info} >{accepted.length}</Text>
                </View>
                <View style={styles.dash_info}>
                    <Text style={styles.info_text}>Tasks Assigned to me</Text>
                    <Text style={styles.the_info}>{pending.length}</Text>
                </View>
                <View style={styles.dash_info}>
                    <Text style={styles.info_text}>Unassigned Tasks</Text>
                    <Text style={styles.the_info}>{unassigned.length}</Text>
                </View>

            </View>

            <Button title='Tasks' onPress={totasks} ></Button>
            <View style= {{height: 5}}></View>
            <Button title='Attendance' onPress={toattendance} ></Button>
            <View style= {{height: 5}}></View>
            <Button title='Logout' onPress={tologin} ></Button>

        </View>
    )
}

export default Dashboard
