import React,{ useEffect } from 'react'
import { Text, View ,ScrollView, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styles} from '../global/mystyle'
import { CommonActions } from '@react-navigation/native';

import {useSelector, useDispatch} from 'react-redux';
import {loadUnassigned, loadPending, loadAccepted} from '../../src/Redux/Actions/ordersActions';

const Dashboard = ({ navigation })=>{
    const {accepted, pending, unassigned} = useSelector(state => state.data); //Redux State
    const { tokens } = useSelector(state=> state.data1)

    const dispatch = useDispatch(); //Redux Dispatch

    useEffect(()=>{
        dispatch(loadUnassigned(tokens));
        dispatch(loadAccepted(tokens));
        dispatch(loadPending(tokens));
      }, [dispatch])

    const totasks = async()=>{
        navigation.navigate("Task",{state:1})
    }

    const toattendance = async()=>{
        navigation.navigate("Attendance",{state:1})
    }

    const toprofile = async()=>{
        navigation.navigate("Profile",{state:1})
    }

    const toexpense = async()=>{
        navigation.navigate("Expense",{state:1})
    }

    const reload = ()=>{
        dispatch(loadUnassigned());
        dispatch(loadAccepted());
        dispatch(loadPending());
    }


    const tologin = async()=>{
        const value = await AsyncStorage.removeItem('access_token')
        navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [
                { name: "Login" },
              ],
            })
          );
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
            <Button title='Expense' onPress={toexpense} ></Button>
            <View style= {{height: 5}}></View>
            <Button title='Logout' onPress={tologin} ></Button>
            <View style= {{height: 5}}></View>
            <Button title='Profile' onPress={toprofile} ></Button>

        </View>
    )
}

export default Dashboard
