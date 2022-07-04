import { Button, Text, View, TextInput } from 'react-native'
import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

import {styles} from '../global/mystyle'
// import { Part } from '../components/particle'
                                         
import { useDispatch } from 'react-redux';
import { loginUsers } from '../../src/Redux/Actions/userActions';

const Login = ({navigation})=>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('access_token')
          if(value !== null) {
            navigation.navigate("Dashboard",{state:1})
          }
        } catch(e) {
          console.log(e)
        }
      }

    getData() 

    const dispatch = useDispatch(); //Redux Dispatch

    const handleLogin = ()=>{
        dispatch(loginUsers({
           email,
           password,
         }), [dispatch]).then(()=>{
             setEmail("")
             setPassword("")
             navigation.navigate("Task",{state:1})
         })

        }

    return(
        <View style={ styles.login_view }>
                {/* <Part /> */}
                <Text style={styles.login_title}>
                    Welcome to Merak
                </Text>
                <Text style={styles.login_title}>
                    Let's Begin
                </Text>
                <View style = {{height: 15}}></View>
                
                <View style={ styles.content_view }>
                    <Text style={ styles.login_key }> Email </Text>
                    <TextInput style={ styles.email_field } keyboardType={'email-address'} value={email} onChangeText={(text)=>{setEmail(text)}} ></TextInput>
                </View>
                
                <View style={ styles.content_view }>
                    <Text style={ styles.login_key }> Password </Text>
                    <TextInput style={ styles.password_field } value={password} onChangeText={(text)=>{setPassword(text)}} ></TextInput>
                </View>

                <View style={ styles.login_button }>
                    <Button title='LOGIN' onPress={handleLogin} /> 
                </View>

        </View>
    )
}

export default Login