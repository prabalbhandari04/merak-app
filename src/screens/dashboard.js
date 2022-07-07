import React,{ useEffect } from 'react'
import { Text, View ,ScrollView, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styles} from '../global/mystyle'

const Dashboard = ({ navigation })=>{

    const totasks = async()=>{
        navigation.navigate("Task",{state:1})
    }

    const toattendance = async()=>{
        navigation.navigate("Attendance",{state:1})
    }

    const toexpense = async()=>{
        navigation.navigate("Expense",{state:1})
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

            <Button title='Tasks' onPress={totasks} ></Button>
            <View style= {{height: 5}}></View>
            <Button title='Expense' onPress={toexpense} ></Button>
            <View style= {{height: 5}}></View>
            <Button title='Attendance' onPress={toattendance} ></Button>
            <View style= {{height: 5}}></View>
            <Button title='Logout' onPress={tologin} ></Button>

        </View>
    )
}

export default Dashboard
