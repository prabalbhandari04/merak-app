import { React, useState, } from 'react';
import { View, Text, StyleSheet, TextInput, Image, Button, Alert, TouchableOpacity, FlatList, Modal } from 'react-native';
import { FONTSIZE } from '../global/constants';
import CategoryCard from '../components/CategoryCard';
import {EXPENSE_DATA, INCOME_DATA , SAVING_DATA} from '../model/data';




const TransactionCategory = props => {
    const [cateType, setCateType] = useState('Expendables');
    const [addNew, setAddNew] = useState(false)
    const DATA = cateType == "Expendables" ? EXPENSE_DATA : (cateType == "Save" ? SAVING_DATA : INCOME_DATA);
    


    {/* render item for flatlist of transaction items */ }
    const renderItem = ({ item }) => {
        return <CategoryCard
            isDelete = {addNew}
            id = {item.id}

            img = {item.img}
            title = {item.title}
            onPress={() => {
                props.choseItem({ id: item.id, title: item.title, img: item.img, type: item.type })
            }}
        />;
    }

    return (
        <View style={styles.container}>
~            {/* Close button */}
            <View style={styles.rightBtt}>
                <Button 
                    color = 'red'
                    title=" X " 
                    onPress={() => props.onClose()}
                />
            </View>

            {/* Add new category button */}
            <View style={styles.leftBtt}>
                <Button
                    color = 'green'
                    title='Select'
                    onPress = {()=>setAddNew(!addNew)}                
                />
            </View>

            {/* {Header view} */}
            <View style={{ height: '15%', flexDirection: 'row', justifyContent: 'space-around', padding: 10, }}>
                <TouchableOpacity style={[styles.category_types, { borderBottomWidth: cateType == "Save" ? 3 : 0 }]} onPress={() => setCateType('Save')}>
                    <Text
                        style={[{ fontSize: FONTSIZE.header1 }, { color: cateType == "Save" ? 'rgb(45,139, 126)' : 'gray' }]}
                    >
                        Save
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.category_types, { borderBottomWidth: cateType == "Expendables" ? 3 : 0 }]} onPress={() => setCateType('Expendables')}>
                    <Text
                        style={[{ fontSize: FONTSIZE.header1 }, { color: cateType == "Expendables" ? 'rgb(45,139, 126)' : 'gray' }]}
                    >
                        Expendables
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.category_types, { borderBottomWidth: cateType == "Income" ? 3 : 0 }]} onPress={() => setCateType('Income')}>
                    <Text
                        style={[{ fontSize: FONTSIZE.header1 }, { color: cateType == "Income" ? 'rgb(45,139, 126)' : 'gray' }]}
                    >
                        Income
                    </Text>
                </TouchableOpacity>
            </View>

            {/* List of transaction item  */}
            <FlatList
                contentContainerStyle={{}}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(24,24,24)',
        width: '100%',
        height: '50%',
        // height: 100,
        // padding: 10,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 3,
        shadowOpacity: 0.6,
        elevation: 0.6,
    },

    category_types: {
        borderBottomColor: 'rgb(45,139, 126)',
        borderBottomWidth: 3
    },

    rightBtt: { 
        position: 'absolute', 
        right: 0, 
        top: '-10%' , 
    },
    
    leftBtt: {
        position: 'absolute', 
        left: 0, 
        top: '-10%' , 
    },
});

export default TransactionCategory;