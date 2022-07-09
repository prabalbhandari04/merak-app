import { React, useState } from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet, Alert } from "react-native";
import TransactionInput from "../components/TransactionInput";
import { AddTransactionToFirebase } from "../Helper/firebaseAPI";

const ExpenseInput = props => {
    const [input, setInput] = useState(null);
    const createHandler = (input) => {

        AddTransactionToFirebase(input);
    }

    // onCreate = {(input) => createHandler(input)}
    return (
        <View style={{ alignItems: 'center' }}>
            <TransactionInput onClose={() => props.navigation.navigate("Transaction")} onCreate={(input) => {
                createHandler(input)
                Alert.alert(
                    "Alert",
                    "Transaction added!",
                    [
                        {
                            text: "Back",
                            onPress: () => props.navigation.navigate("Transaction", {
                                "trigger": "true"
                            })
                        },

                    ]
                )

            }} />
        </View>
    )
}

export default ExpenseInput;