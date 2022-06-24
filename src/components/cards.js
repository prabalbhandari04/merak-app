import { Button, StyleSheet, Text, View,Dimensions ,ScrollView,Image,FlatList, TouchableOpacity, Modal, Pressable, Alert} from 'react-native'
import { useState } from 'react'
import Details from '../components/details';

import {styles} from '../global/mystyle'

import { colors,parameters } from '../global/styles'
const SCREEN_WIDTH = Dimensions.get('window').width



const Cards = ( {order} ) => {
    const [orders, setOrders] = useState(order)
    const [modalVisible, setModalVisible] = useState(false);

    return(
        <TouchableOpacity onPress={() => setModalVisible(true)}>

        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Details order={orders} />
                
            </View>
            </View>
        </Modal>

        <View style ={styles.home}  >
            <Text style = {styles.text1}>{orders.invoice}</Text>
            <View style ={styles.view1}>

                <View  style ={styles.view8}>

                    <View style ={styles.view9}>
                        <View  style ={styles.view3}>
                            <Text style ={styles.text4}>{"Ordered by: "} </Text>
                            <Text style ={styles.text2}>{orders.ordered_by.full_name} </Text>
                        </ View>

                        <View  style ={styles.view3}>
                            <Text style ={styles.text4}>{"Status: "} </Text>
                            <Text style ={styles.text2}>{orders.status} </Text>
                        </ View>

                    </View>

                    <View  style ={styles.view3}>
                        <Text style ={styles.text4}>{"Location: "} </Text>
                        <Text style ={styles.text2}>{orders.status} </Text>
                    </ View>

                </View>
            </View>
            </View>
            </TouchableOpacity>
    )
}

export default Cards
