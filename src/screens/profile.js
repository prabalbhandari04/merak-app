import { Button, Text, View, TextInput, Image } from 'react-native'
import { useState, useEffect } from 'react'

import {styles} from '../global/mystyle'

import { useDispatch, useSelector } from 'react-redux';
import { getuserprof } from '../../src/Redux/Actions/userActions';


const Profile = ({navigation})=>{
    const { tokens, user } = useSelector(state=> state.data1)
    const dispatch = useDispatch(); //Redux Dispatch

    const todashboard = ()=>{
        navigation.navigate("Dashboard",{state:1})
    }

    useEffect(()=>{
        dispatch(getuserprof(tokens));
      }, [dispatch])


    return(
        <View style ={styles.container}>
            <Text style={styles.text_title}>
                PROFILE
            </Text>

            <Image style={styles.avatar} source={{uri: user.avatar || "https://imgs.search.brave.com/dDSPjwIKx7x9KPe5h2ANuuyYTR_un7eb3_X3Bwa8kRA/rs:fit:900:900:1/g:ce/aHR0cHM6Ly95dDMu/Z2dwaHQuY29tLy1q/QzBqOW5HaU5nay9B/QUFBQUFBQUFBSS9B/QUFBQUFBQUFBQS9n/SlB0dzkySWFXVS9z/OTAwLWMtay1uby9w/aG90by5qcGc"}} ></Image>

            <View  style ={styles.task_each}>
                <Text style ={styles.task_key}>{"Displat Name: "} </Text>
                <Text style ={styles.task_value}>{user.display_name} </Text>
            </ View>
            <View  style ={styles.task_each}>
                <Text style ={styles.task_key}>{"First Name: "} </Text>
                <Text style ={styles.task_value}>{user.first_name} </Text>
            </ View>
            <View  style ={styles.task_each}>
                <Text style ={styles.task_key}>{"Last Name: "} </Text>
                <Text style ={styles.task_value}>{user.last_name} </Text>
            </ View>
            <View  style ={styles.task_each}>
                <Text style ={styles.task_key}>{"Address: "} </Text>
                <Text style ={styles.task_value}>{user.last_name} </Text>
            </ View>
            <View  style ={styles.task_each}>
                <Text style ={styles.task_key}>{"Phone: "} </Text>
                <Text style ={styles.task_value}>{user.phone} </Text>
            </ View>
            <View  style ={styles.task_each}>
                <Text style ={styles.task_key}>{"Gender: "} </Text>
                <Text style ={styles.task_value}>{user.gender} </Text>
            </ View>


            <View style={{ height:40 }}></View>
            <Button title='Dashboard' onPress={todashboard} ></Button>
        </View>
    )
}

export default Profile