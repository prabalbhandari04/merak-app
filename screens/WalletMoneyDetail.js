import { useEffect, React } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native"
import { FONTSIZE } from "../constants/constants";
import { formatMoney } from "../Helper/helpers";

const WalletMoneyDetail = (props) => {
    const money = props.route.params.money;

    return (<View>
        <View style={{ flexDirection: "column", padding: 10, marginBottom: 10, width: '100%' }}>
            <View style={{ flexDirection: "row", padding: 10 }}>
                <Image source={require('../icon/purse.png')} />
                <Text style={{ fontSize: FONTSIZE.header1 }}> General</Text>
            </View>

            <Text style={{ fontSize: FONTSIZE.header1 }}>  {formatMoney(money ? money.cash + money.debit_card : 0)} Nrs</Text>
        </View>

        <View style={{ flexDirection: "column", padding: 10, marginBottom: 10, width: '100%' }}>
            <View style={{ flexDirection: "row", padding: 10 }}>
                <Image source={require('../icon/money-2.png')} />
                <Text style={{ fontSize: FONTSIZE.header1 }}> Cash</Text>
            </View>
            <Text style={{ fontSize: FONTSIZE.header1 }}>  {formatMoney(money ? money.cash : 0)} Nrs</Text>
        </View>

        <View style={{ flexDirection: "column", padding: 10, marginBottom: 10, width: '100%' }}>
            <View style={{ flexDirection: "row", padding: 10 }}>
                <Image source={require('../icon/debit-card.png')} />
                <Text style={{ fontSize: FONTSIZE.header1 }}>  Card</Text>
            </View>

            <Text style={{ fontSize: FONTSIZE.header1 }}>  {formatMoney(money ? money.debit_card : 0)} Nrs</Text>
        </View>
    </View>)
}

const styles = StyleSheet.create({

});

export default WalletMoneyDetail;