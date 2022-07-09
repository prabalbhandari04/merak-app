import { Button, Text, View } from 'react-native'
import { useState, useEffect } from 'react'
import { styles } from '../global/mystyle'

import { useDispatch, useSelector } from 'react-redux';
import {acceptPendingOrder, declineAssignedOrder, declineAcceptedOrder} from '../../src/Redux/Actions/ordersActions';

const Details = ( {order} ) => {
    const [orders, setOrders] = useState(order)

    const dispatch = useDispatch(); //Redux 
    
    const { tokens } = useSelector(state=> state.data1)

    const acceptpending = ()=>{
        dispatch(acceptPendingOrder(order.invoice, tokens))
    }

    const declineassigned = ()=>{
        console.log("yes")
        dispatch(declineAssignedOrder(order.invoice, tokens))
    }

    const declineaccepted = ()=>{
        dispatch(declineAcceptedOrder(order.invoice, tokens))
    }

    const acceptassigned = ()=>{
        dispatch(acceptPendingOrder(order.invoice, tokens))
    }

    return(
        <View>
            <Text style ={styles.task_key}>Invoice:</Text>
            <Text style ={styles.modal_text}>{orders.invoice}</Text>
            
            <Text style ={styles.task_key}>Assigned to</Text>
            <Text style ={styles.modal_text}>
            {
                orders.assigned_to === null ?
                "Null"
                :
                orders.assigned_to.full_name
            }
            </Text>
            
            <Text style ={styles.task_key}>Status</Text>
            <Text style ={styles.modal_text}>{orders.status}</Text>
            
            <Text style ={styles.task_key}>Ordered By: </Text>
            <Text style ={styles.modal_text}>{orders.ordered_by.full_name}</Text>
            
            <Text style ={styles.task_key}>Address</Text>
            <Text style ={styles.modal_text}>{orders.ordered_by.address|| "Waha"}</Text>

            {
                orders.status === 'PENDING' && order.assigned_to === null?
                <Button title='Accept' onPress={acceptpending}></Button>
                :
                orders.status === 'PENDING' ?
                <View>
                    <Button title='Accept' onPress={acceptassigned} ></Button>
                    <View style={{ height: 5 }}></View>
                    <Button title='Decline' onPress={declineassigned} ></Button>
                </View>
                :
                <Button title='Decline' onPress={declineaccepted}></Button>
            }

        </View>
    )
}

export default Details