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
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import TransactionCategory from "../components/TransactionCategory";
import WalletType from "../components/WalletType";
import {
  loadExpenseLimitValueByCategoryId,
  checkExpenseLimitForCategory,
} from "../Helper/firebaseAPI";

const TransactionInput = (props) => {
  const [date, setDate] = useState(new Date());
  const [dateModal, setDateModal] = useState(false);
  const [money, setMoney] = useState(null);
  const [cateModal, setCateModal] = useState(false);
  const [walletModal, setWalletModal] = useState(false);
  const [categoryValue, setCategoryValue] = useState(null);
  const [categoryTitle, setCategoryTitle] = useState("Choose");
  const [walletValue, setWalletValue] = useState("Choose");
  const [note, setNote] = useState(null);
  const [limitValue, setLimitValue] = useState(null);
  const [bLimit, setLimitCheck] = useState(true);
  // const text = null

  const choseCategory = (item) => {
    setCategoryValue(item);
    setCategoryTitle(item.title);
    loadExpenseLimitValueByCategoryId(item, setLimitValue);
    setCateModal(false);
  };

  function choseWallet(item) {
    setWalletModal(false);
    setWalletValue(item);
  }

  const onSetMoney = (input) => {
    input = input.replace(/[^0-9]/g, "");
    setMoney(parseInt(input).toString());
  };
  const onChangeTime = (event, value) => {
    setDate(value);
    setDateModal(false);
    // console.log(date.toString())
    // console.log(date.getUTCDate().toString())
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
    props.onCreate({ money, walletValue, date, note, categoryValue });
  };

  const alertLimit = () => {
    Alert.alert(
      "Alert",
      "You are exceeding the limit set for this category. Do you want to continue?",
      [
        { text: "Cancel", onPress: () => {} },
        {
          text: "Continue",
          onPress: () => {
            alertSuccess();
          },
        },
      ]
    );
  };

  useEffect(() => {
    if (categoryValue && money && limitValue) {
      checkExpenseLimitForCategory(
        categoryValue,
        limitValue,
        money,
        setLimitCheck
      );
    }
  }, [categoryValue, limitValue, money]);

  return (
    <View style={styles.container}>
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

      <View style={styles.input}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 5,
          }}
        >
          <Image source={require("../icon/categories.png")} />
          <Text style={styles.inputTitle}>Category</Text>
        </View>
        <Button
          title={categoryTitle}
          color={'rgb(52,222,209)'}
          onPress={() => {
            setCateModal(true);
          }}
        />
      </View>

      <Modal animationType={"slide"} transparent={true} visible={cateModal}>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <TransactionCategory
            choseItem={choseCategory}
            onClose={() => setCateModal(false)}
          />
        </View>
      </Modal>

      <View style={styles.input}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 5,
          }}
        >
          <Image source={require("../icon/purse.png")} />
          <Text style={styles.inputTitle}>Wallet type</Text>
        </View>
        {
          <Button
            title={walletValue}
            color={'rgb(52,222,209)'}
            onPress={() => {
              setWalletModal(true);
            }}
          />
        }
      </View>

      <Modal animationType={"slide"} transparent={true} visible={walletModal}>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <WalletType
            choseItem={choseWallet}
            onClose={() => setWalletModal(false)}
          />
        </View>
      </Modal>

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

      <View style={styles.input}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 5,
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
        <View style={styles.buttonContainer}>
          <Button
            title="Cancel"
            color={"red"}
            onPress={() => props.onClose()}
          ></Button>
          <Button
            title="Add"
            color={'rgb(52,222,209)'}
            onPress={() => {
              if (
                money == null ||
                categoryValue == "Choose" ||
                walletValue == "Choose"
              ) {
                {
                  alertError();
                }
              }
              if (!bLimit) {
                alertLimit();
              } else {
                alertSuccess();
              }
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
    width: "100%",
    height: "100%",
    padding: 10,
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
    height: 90,
    borderRadius: 8,
    padding: 5,
    marginBottom: 10,
    color: 'rgb(52,222,209)'
  },

  inputTitle: {
    fontSize: FONTSIZE.header2,
    marginBottom: 5,
    fontWeight: "600",
    marginLeft: 5,
    color : 'rgb(52,222,209)'
  },

  textInput: {
    height: "70%",
    padding: 5,
    color : 'rgb(52,222,209)',
    fontSize: FONTSIZE.body,
    fontWeight: "500",
    borderBottomWidth: 1,
    borderRadius: 5,
    borderColor: "gray",
  },

  buttonContainer: {
    flexDirection: "row",
    position:"absolute",
    left: "60%",
    top:20,
    margin:20,
    flex: 1,
    width: "30%",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default TransactionInput;
