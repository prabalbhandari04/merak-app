import { Button, Text, View, TextInput, Pressable } from 'react-native'
import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';

import {styles} from '../global/mystyle'
// import { Part } from '../components/particle'
                                         
import { useDispatch } from 'react-redux';
import { loginUsers, tok_fix } from '../../src/Redux/Actions/userActions';

const Login = ({navigation})=>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch(); //Redux Dispatch
    const [vis, setVis] = useState(true)
    const [cont, setCont] = useState("show")

    const showpass = ()=>{
      setVis(!vis)
      if(vis===true){
        setCont("hide")
      }else{
        setCont("show")
      }

    }

    const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('access_token')
          if(value !== null) {
            dispatch(tok_fix(value))

            navigation.dispatch(
                CommonActions.reset({
                  index: 1,
                  routes: [
                    { name: "Dashboard" },
                  ],
                })
              );
          }
        } catch(e) {
          console.log(e)
        }
      }

    getData() 

    const handleLogin = ()=>{
        dispatch(loginUsers({
           email,
           password,
         }), [dispatch]).then(()=>{
             setEmail("")
             setPassword("")
            navigation.dispatch(
                CommonActions.reset({
                  index: 1,
                  routes: [
                    { name: "Dashboard" },
                  ],
                })
              );
             
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

                    <View style={{ flexDirection:'row' }}>
                      <TextInput style={ styles.password_field } value={password} secureTextEntry={vis} onChangeText={(text)=>{setPassword(text)}}  ></TextInput>
                      <Pressable onPress={showpass}><Text style={{ fontSize:10, marginLeft:5,marginTop: 10}}>{cont}</Text></Pressable>
                    </View>



                </View>

                <View style={ styles.login_button }>
                    <Button title='LOGIN' onPress={handleLogin} /> 
                </View>

        </View>
    )
}

export default Login