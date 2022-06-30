import {Text, View, TouchableOpacity, Modal } from 'react-native'
import { useState, useContext } from 'react'
import Details from '../components/details';

import { styles } from '../global/mystyle'

const Cards = ( {order} ) => {
    const [orders, setOrders] = useState(order)
    const [modalVisible, setModalVisible] = useState(false);

    return(
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible)
                }}
            >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Details order={orders} /> 
                </View>
                </View>
            </Modal>

            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <View style ={styles.home}  >
                    <Text style = {styles.task_title_text}>{orders.invoice}</Text>
                    <View style ={styles.task_detail}>

                        <View style ={styles.task_top}>
                            <View  style ={styles.task_each}>
                                <Text style ={styles.task_key}>{"Ordered by: "} </Text>
                                <Text style ={styles.task_value}>{orders.ordered_by.full_name} </Text>
                            </ View>

                            <View  style ={styles.task_each}>
                                <Text style ={styles.task_key}>{"Status: "} </Text>
                                <Text style ={styles.task_value}>{orders.status} </Text>
                            </ View>
                        </View>

                        <View  style ={styles.task_each}>
                            <Text style ={styles.task_key}>{"Location: "} </Text>
                            <Text style ={styles.task_value}>{orders.status} </Text>
                        </ View>

                    </View>
                    
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Cards
