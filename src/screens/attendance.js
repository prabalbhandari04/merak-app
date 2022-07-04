import React from 'react'
import { Text, View, Button, Pressable } from 'react-native'
import {styles} from '../global/mystyle'
import { useDispatch } from 'react-redux';
import { attendIn, attendOut } from '../Redux/Actions/attendanceAction';


const Attendance = ({ navigation })=>{
    const dispatch = useDispatch(); //Redux Dispatch
    
    const todashboard = ()=>{
        navigation.navigate("Dashboard",{state:1})
    }   

    const punchin = ()=>{
        console.log("punchin")
        dispatch(attendIn())
    }

    const punchout = ()=>{
        console.log("punchout")
        dispatch(attendOut())
    }


    return(
        <View style ={styles.container}>
            <Text style={styles.text_title}>
                ATTENDANCE
            </Text>

              <View style={styles.attend_view}>
                <Pressable style={styles.attend_button} onPress={punchin}><Text>Punch In</Text></Pressable>

                <View></View>
                
                <Pressable style={styles.attend_button} onPress={punchout}><Text>Punch Out</Text></Pressable>


              </View>
            <View style={{ height:40 }}></View>
            <Button title='Dashboard' onPress={todashboard} ></Button>

        </View>
    )
}

export default Attendance
