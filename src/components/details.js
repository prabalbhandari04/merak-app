import { Button, StyleSheet, Text, View,Dimensions ,ScrollView} from 'react-native'
import { useState } from 'react'
import {styles} from '../global/mystyle'

import {useDispatch, useSelector} from 'react-redux';
import {acceptPendingOrder, declineAssignedOrder, declineAcceptedOrder} from '../../src/Redux/Actions/ordersActions';

const Details = ( {order} ) => {
    const [orders, setOrders] = useState(order)

    const dispatch = useDispatch(); //Redux Dispatch

    const acceptpending = ()=>{
        dispatch(acceptPendingOrder(order.invoice))
    }

    const declineassigned = ()=>{
        dispatch(declineAssignedOrder(order.invoice))
    }

    const declineaccepted = ()=>{
        dispatch(declineAcceptedOrder(order.invoice))
    }

    const acceptassigned = ()=>{
        console.log("waha")
    }

    return(
        <View>
            <Text style ={styles.text4}>Invoice:</Text>
            <Text style ={styles.text6}>{orders.invoice}</Text>
            
            <Text style ={styles.text4}>Assigned to</Text>
            <Text style ={styles.text6}>
            {
                orders.assigned_to === null ?
                "Null"
                :
                orders.assigned_to.full_name
            }
            </Text>
            
            <Text style ={styles.text4}>Status</Text>
            <Text style ={styles.text6}>{orders.status}</Text>
            
            <Text style ={styles.text4}>Ordered By: </Text>
            <Text style ={styles.text6}>{orders.ordered_by.full_name}</Text>
            
            <Text style ={styles.text4}>Address</Text>
            <Text style ={styles.text6}>{orders.ordered_by.address|| "Waha"}</Text>

            {
                orders.status === 'PENDING' && order.assigned_to === null?
                <Button title='Accept' onPress={acceptpending}></Button>
                :
                orders.status === 'PENDING' ?
                <View>
                    <Button title='Accept' onPress={acceptassigned} style={styles.button5}></Button>
                    <Button title='Decline' opPress={declineassigned} style={styles.button6}></Button>
                </View>
                :
                <Button title='Decline' onPress={declineaccepted}></Button>
            }



        </View>
    )
}

export default Details