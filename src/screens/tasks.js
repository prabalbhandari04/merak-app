import { StatusBar } from 'expo-status-bar'
import React,{ useEffect } from 'react'
import { Text, View ,ScrollView } from 'react-native'
import Cards from '../components/cards';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {useSelector, useDispatch} from 'react-redux';
import {loadUnassigned, loadPending, loadAccepted} from '../../src/Redux/Actions/ordersActions';

import {styles} from '../global/mystyle'

const Tasks = () => {
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

              <Text style={styles.text_title}>
                  MY TASKS
              </Text>

              {accepted && accepted.map((accept, index)=>{
                  return (
                      <Cards order={accept} key={index}/>
                  )})}

              <Text style={styles.text_title}>
                  ASSIGNED TO ME
              </Text>

              {pending && pending.map((pend, index)=>{
                  return (
                      <Cards order={pend} key={index}/>
                  )})}

              <Text style={styles.text_title}>
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

export default Tasks