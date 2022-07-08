import { React, useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Modal, SafeAreaView, FlatList, RefreshControl, Platform, StatusBar, ActivityIndicator, TouchableOpacity } from 'react-native';
import AddTransactionBtn from '../components/addTransactionBtn';
import TransactionCard from '../components/transactionCard';
import { Feather } from '@expo/vector-icons';
import { FONTSIZE } from '../global/constants';
import { formatMoney, createKeyFromDate } from '../Helper/helpers';
import NoTransactionCard from '../components/noTransactionCard';
import { AddTransactionToFirebase, loadTransaction } from '../Helper/firebaseAPI';
import { loadSavingGoalData, autoSignIn, _onAuthStateChanged } from '../Helper/firebaseAPI';
import { LogBox } from 'react-native';


LogBox.ignoreAllLogs();

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}


const Expense = props => {
    const [modalVisible, setModalVisible] = useState(false); //state to show modal and hide modal for transaction input
    const [trigger, setTrigger] = useState(true); // save transaction input value
    const [transactionList, setTransactionList] = useState([]); // a list of transaction of a particular date
    const [isLoading, setIsLoading] = useState(false);
    const [displayedMoney, setDisplayedMoney] = useState(null);
    const [currentExpense, setCurrentExpense] = useState(displayedMoney ? displayedMoney.expenseValue : 0);
    const [currentIncome, setCurrentIncome] = useState(displayedMoney ? displayedMoney.incomeValue : 0);
    const [currentMoney, setCurrentMoney] = useState(currentIncome - currentExpense);

    const currentDate = new Date();

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    {/* render item for flat list */ }
    const renderItem = ({ item }) => {
        return <TransactionCard itemList={item.data} id={item.id} navigation={props.navigation}  />
    }

    useEffect(() => {

        const unsubscribe = props.navigation.addListener('focus', () => {
            loadTransaction(setTransactionList, setDisplayedMoney);
        })

        return () => unsubscribe();

    }, [props.route, props.navigation])

    return (
        <View style={styles.screen}>
            {/* {Header bar} */}
            <SafeAreaView style={styles.headerBar}>

                <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center' }}>
                    <Feather name="calendar" size={24} color='rgb(51,222,209)' />
                    <Text style={{ fontSize: FONTSIZE.small, color: 'rgb(51,222,209)' }}>  {currentDate.getFullYear()}-{currentDate.getMonth() + 1}</Text>
                </View>
                

                <View>
                    

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, paddingLeft: 10 }}>
                        <Text style={{ fontSize: FONTSIZE.small, color: 'rgb(51,222,209)', fontWeight: '500' }}>
                        Total Income  :
                        </Text>
                        <Text style={{ fontSize: FONTSIZE.header1, color: 'rgb(51,222,209)' }}>
                            {displayedMoney ? formatMoney(displayedMoney.incomeValue) : 0} Nrs
                        </Text>
                    </View>


                </View>
            </SafeAreaView>

            {/* {View for button adding transaction } */}
            <View style={styles.addView}>
                <AddTransactionBtn onPress={() => {
                    props.navigation.navigate('ExpenseInput')
                }
                } />
            </View>


            <View style={styles.listView}>
                    <FlatList
                        contentContainerStyle={{ paddingBottom: transactionList.length == 0 ? 100 : 300, width: '100%', flexGrow: 1, }}
                        data={transactionList}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        ListEmptyComponent={NoTransactionCard}
                    />

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        width: '100%',
        backgroundColor: 'rgb(24,24,24)',
    },

    headerBar: {
        width: '100%',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: 'rgb(24,24,24)'
    },

    addView: {
        position: 'absolute',
        width: '100%',
        bottom: "11%",
        zIndex: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },

    listView: {
        flex: 1,
        // height: '100%',
        padding: 10,
    },

    walletDetail: {
        marginRight: 10,
        backgroundColor: 'rgb(51,222,209)',
        borderRadius: 5,
        padding: 5,

    },

    deleteView: {
        backgroundColor: 'rgb(51,222,209)',
        borderRadius: 5,
        padding: 5,
    },
})

export default Expense;