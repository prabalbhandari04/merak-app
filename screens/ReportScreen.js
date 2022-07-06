import { React, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Platform, StatusBar, ScrollView } from 'react-native';
import { FONTSIZE } from '../constants/constants';
import { Entypo } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import FinancePieChart from '../components/PieChart';
import FinanceBarChart from '../components/BarChart';

const ReportScreen = props => {
    const [currentState, setCurrentState] = useState('COLUMN CHART');
    const [typeData, setTypeData] = useState([])
    const [expenseData, setExpenseData] = useState([])
    const [incomeData, setIncomeData] = useState([])
    const [monthExpense, setMonthExpense] = useState([])
    const [monthIncome, setMonthIncome] = useState([])



    return (
        <View style={styles.screen}>

            {/* view for displaying header bar: COLUMN CHAT and PIE CHART */}
            <SafeAreaView style={styles.headerBar}>
                    <Entypo name="bar-graph" size={FONTSIZE.header2} color='rgb(52,222,209)' />
                    <Text style={[styles.cate_text]}>COLUMN CHART   </Text>
                    <View style={{ width: '98%', borderWidth: currentState == "COLUMN CHART" ? 2 : 0, borderColor: '#00C897', position: 'absolute', bottom: -3 }}></View>
                
            </SafeAreaView>
            <View style={{ marginTop: 20, padding: 10, }}>
                {
                    currentState == "PIE CHART" ? <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
                        <FinancePieChart title={"Transaction type"} data={typeData} />
                        <FinancePieChart title={"Spending"} data={expenseData} />
                        <FinancePieChart title={"Income"} data={incomeData} />
                    </ScrollView> : <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>

                        <View style={{ width: '100%', alignItems: 'center' }}>
                            <Text style={{ fontSize: FONTSIZE.header2, color: '#3BACB6', fontWeight: '500' }}>Monthly Expense</Text>
                        </View>

                        <FinanceBarChart title={"Monthly Expense"} fillShadowGradient={"#3BACB6"} data={monthExpense} />


                        <View style={{ width: '100%', alignItems: 'center' }}>
                            <Text style={{ fontSize: FONTSIZE.header2, color: '#2F8F9D', fontWeight: '500' }}>Monthly Income</Text>
                        </View>
                        <FinanceBarChart title={"Monthly Income"} fillShadowGradient={"#2F8F9D"} data={monthIncome} />

                    </ScrollView>
                }
            </View>




        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        height: '100%',
        
    },

    headerBar: {
        width: '100%',
        backgroundColor: 'rgb(24,24,24)',
        flexDirection: 'row',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },

    category: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    cate_text: {
        fontSize: FONTSIZE.header2,
        fontWeight: '500',
        color:'rgb(52,222,209)',
        padding: 5,
    }
})

export default ReportScreen;