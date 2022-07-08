import { React, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Button,
  Alert,
  Modal,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { FONTSIZE } from "../global/constants";
import DateTimePicker from "@react-native-community/datetimepicker";

const TransactionInput = (props) => {
  const [date, setDate] = useState(new Date());
  const [dateModal, setDateModal] = useState(false);
  const [money, setMoney] = useState("");
  const [category, setCategory] = useState(null);
  const [wallet, setWallet] = useState(null);
  const [note, setNote] = useState(null);

 

  

  const onSetMoney = (input) => {
    input = input.replace(/[^0-9]/g, "");
    setMoney(parseInt(input).toString());
  };
  const onChangeTime = (event, value) => {
    setDate(value);
    setDateModal(false);
  };

  const DatePicker =
    Platform.OS === "ios" ? (
      <DateTimePicker mode="date" value={date} onChange={onChangeTime} />
    ) : (
      <Button
        title={
          date.getDate().toString() +
          "/" +
          (date.getMonth() + 1).toString() +
          "/" +
          date.getFullYear().toString()
        }
        color={'rgb(52,222,209)'}
        onPress={() => setDateModal(true)}
      />
    );

  const alertError = () => {
    Alert.alert(
      "Error",
      "You have not filled in enough information or the amount is not valid!",
      [{text:"Cancel" , onPress: () => props.navigation.navigate("Attendance")}]
    );
  };
  

  const alertSuccess = () => {
    props.onCreate({ money,date,note , wallet , category });
  };

  const toattendance = async()=>{
    navigation.navigate("Attendance",{state:1})
}

  return (
    <View style={styles.container}>

      {/* Amount  */}
      <View style={styles.input}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 5,
          }}
        >
          <Image source={require("../icon/wage.png")} />
          <Text style={styles.inputTitle}>Amount</Text>
        </View>
        <TextInput
          onChangeText={(text) => {
            onSetMoney(text);
          }}
          value={money}
          placeholder="Please Enter the amount"
          keyboardType="numeric"
          style={styles.textInput}
        ></TextInput>
      </View>

      {/* Category */}
      <View style={styles.input}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 5,
            color : 'rgb(52,222,209)'
          }}
        >
          <Image source={require("../icon/categories.png")} />
          <Text style={styles.inputTitle}>categories</Text>
        </View>
        <KeyboardAvoidingView>
          <TextInput 
            placeholder="Enter the category"
            onChangeText={(text) => setCategory(text)}
            value={category}
            style={styles.textInput}
          />
        </KeyboardAvoidingView>
      </View>
      
          {/* Wallet type */}
      <View style={styles.input}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 5,
            color : 'rgb(52,222,209)'
          }}
        >
          <Image source={require("../icon/purse.png")} />
          <Text style={styles.inputTitle}>Wallet Type</Text>
        </View>
        <KeyboardAvoidingView>
          <TextInput
            placeholder="Wallet Detail"
            onChangeText={(text) => setWallet(text)}
            value={wallet}
            style={styles.textInput}
          />
        </KeyboardAvoidingView>
      </View>
      
      {/* date  */}
      <View style={styles.input}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 5,
          }}
        >
          <Image source={require("../icon/calendar.png")} />
          <Text style={styles.inputTitle}>Date</Text>
        </View>
        {DatePicker}
      </View>

      <Modal animationType={"slide"} transparent={true} visible={dateModal}>
        <DateTimePicker mode="date" onChange={onChangeTime} value={date} />
      </Modal>

        {/* Notes */}
      <View style={styles.input}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 5,
            color : 'rgb(52,222,209)'
          }}
        >
          <Image source={require("../icon/notes.png")} />
          <Text style={styles.inputTitle}>Notes</Text>
        </View>
        <KeyboardAvoidingView>
          <TextInput
            placeholder="Enter your note"
            onChangeText={(text) => setNote(text)}
            value={note}
            style={styles.textInput}
          />
        </KeyboardAvoidingView>
      </View>

      <View
        style={{
          justifyContent: "flex-end",
          width: "100%",
          alignItems: "flex-end",
        }}
      >
        <View style={styles.buttonContainerCancel}>
          
          <Button
            title="Add"
            color={'rgb(52,222,209)'}
            onPress={() => {
              alertSuccess();
            }}
          ></Button>
        </View>

        

      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  

  container: {
    backgroundColor: "rgb(24,24,24)",
    color : 'rgb(52,222,209)',
    width: "100%",
    height: "100%",
    padding: 10,
    marginTop: 25,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    elevation: 4,
    marginBottom: 10,
  },

  input: {
    backgroundColor: "rgb(24,24,24)",
    color : 'rgb(52,222,209)',
    height: 90,
    borderRadius: 8,
    padding: 5,
    marginBottom: 10,
  },

  inputTitle: {
    fontSize: FONTSIZE.header2,
    color : 'rgb(52,222,209)',
    marginBottom: 5,
    fontWeight: "600",
    marginLeft: 5,
    color : 'rgb(52,222,209)'
  },

  textInput: {
    height: "70%",
    padding: 5,
    color : 'rgb(255,255,255)',
    fontSize: FONTSIZE.body,
    color : 'rgb(52,222,209)',
    fontWeight: "500",
    borderBottomWidth: 1,
    borderRadius: 5,
    borderColor: "gray",
  },

  buttonContainerCancel: {
    flexDirection: "row",
    position:"absolute",
    left: "60%",
    top:20,
    left:0,
    margin:20,
    marginRight : 30,
    flex: 1,
    width: "30%",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default TransactionInput;
