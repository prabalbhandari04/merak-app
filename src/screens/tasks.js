import { StatusBar } from 'expo-status-bar'
import React,{useState,useRef,useEffect} from 'react'
import { Button, StyleSheet, Text, View,Dimensions ,ScrollView,Image,FlatList, TouchableOpacity, Modal, Pressable, Alert} from 'react-native'
import Cards from '../components/cards';

import {useSelector, useDispatch} from 'react-redux';
import {loadUnassigned, loadPending, loadAccepted} from '../../src/Redux/Actions/ordersActions';


import { colors,parameters } from '../global/styles'
import {styles} from '../global/mystyle'

const SCREEN_WIDTH = Dimensions.get('window').width

const HomeScreen = () => {
  const dispatch = useDispatch(); //Redux Dispatch


    const {accepted, pending, unassigned} = useSelector(state => state.data); //Redux State

    useEffect(()=>{
        dispatch(loadUnassigned());
        dispatch(loadAccepted());
        dispatch(loadPending());

    }, [dispatch])
    


    return (
        <View style ={styles.container}>

            <ScrollView bounces ={false}>

                <Text style={styles.text5}>
                    MY TASKS
                </Text>

                {accepted && accepted.map((accept, index)=>{
                    return (
                        <Cards order={accept} key={index}/>
                    )})}

                <Text style={styles.text5}>
                    Assigned TASKS
                </Text>

                {pending && pending.map((pend, index)=>{
                    return (
                        <Cards order={pend} key={index}/>
                    )})}

                <Text style={styles.text5}>
                    UNASSIGNED TASKS
                </Text>

                {unassigned && unassigned.map((unassig, index)=>{
                    return (
                        <Cards order={unassig} key={index}/>
                    )})}
                
                


            </ScrollView>
            <StatusBar style ="light" backgroundColor = "#2058c0" translucent ={true} />
        </View>
    )
}

export default HomeScreen

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.black,
        paddingBottom:30,
        paddingTop:parameters.statusBarHeight,
        marginLeft: 70
    },
    header:{
      backgroundColor:colors.black,
      height:parameters.headerHeight,
      width: SCREEN_WIDTH,
      alignItems:"flex-start",
      marginBottom: 10,
      paddingTop: 20

    },

    image1:{

      height:100,
      width:100,

    },

    image2:{height:60,width:60,
            borderRadius:30,
          },

    home:{
     backgroundColor: '#181818',
     paddingBottom:5,
     paddingHorizontal: 20,
     marginRight: 10,
     borderRadius:20,
    },

    text1:{
     color:'#00A7E3',
     fontSize:17,
     paddingBottom:20,
     paddingTop:20,
     flex: 1,
     textAlign: 'center',
    },

    text2:{
     color:colors.white,
     fontSize:12
    },

    view1:{
     flex:1,
     paddingTop:10,
     paddingLeft:10
    },

    button1:{
      height:40,
      width:150,
      backgroundColor:colors.blue,
      borderRadius:20,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10
    },

    button1Text:{
     color:colors.white,
     fontSize:17,
     marginTop:-2

    },
    card:{
     alignItems:"center",
     margin:SCREEN_WIDTH/22

    },

    view2:{marginBottom:5,
          borderRadius:15,
          backgroundColor:colors.grey6
        },

        title:{
          color:colors.black,
          fontSize:16
        },
    view3:{flexDirection:"row",
             marginTop :5,
             height:25,
             backgroundColor:'#181818',
             alignItems:"center",
            marginHorizontal:5

             },
    text3:{marginLeft:15,
            fontSize:20,
            color:colors.black
      },

    view4:{ flexDirection:"row",
            alignItems:"center",
            marginRight:15,
            backgroundColor:"white",
            paddingHorizontal:10,
            paddingVertical:2,
            borderRadius:20
            },

    view5:{ flexDirection:"row",
    alignItems:"center",
    backgroundColor:"white",
    paddingVertical:25,
    justifyContent:"space-between",
    marginHorizontal:15,
    borderBottomColor:colors.grey4,
    borderBottomWidth:1,
    flex:1
    },

    view6:{


    alignItems:"center",
    flex:5,
    flexDirection:"row"
    },
    view7:{
    backgroundColor:colors.grey6,
    height:40,
    width:40,
    borderRadius:20,
    alignItems:"center",
    justifyContent:"center",
    marginRight:20

    },

    map:{

    height: 150,
     marginVertical: 0,
     width:SCREEN_WIDTH*0.92
    },

    text4:{ fontSize:13,
          color:'#5E5E5E',
        },

    icon1:  {marginLeft:10,
           marginTop:5
          },

    view8: {
          marginTop:-15,
          marginBottom:15
        } ,
    view9: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    } ,
    carsAround: {
    width: 28,
    height: 14,

    }, 

    location: {
      width: 16,
      height: 16,
      borderRadius:8,
      backgroundColor:colors.blue,
      alignItems:"center",
      justifyContent:"center"

      }, 

    view10:{width:4,
    height:4,
    borderRadius:2,
    backgroundColor:"white"
    },

    text5:{
        fontSize:14,
        color:colors.white,
        marginTop: 40,
        marginBottom: 20
  },

})