import { React } from 'react';
import { View, TouchableOpacity, Button, Text, StyleSheet, SafeAreaView, Image, Platform, StatusBar } from 'react-native';
import { signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';
import { FONTSIZE } from '../constants/constants';


const WelcomeScreen = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: '#40edd0' }}>
            <View style={{
                width: '100%', height: '80%',
                justifyContent: 'center', alignItems: 'center',
                marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
            }}>
                <View style={{ position: 'absolute', top: '20%' }}>
                    <Image source={require('../icon/presentation.png')} />
                </View>
            </View>

            <View style={{
                height: '40%', backgroundColor: 'rgb(24,24,24)', width: '100%', position: 'absolute', bottom: 0, borderTopEndRadius: 40, borderTopStartRadius: 40,
                shadowColor: '#000000',
                shadowOffset: {
                    width: 0,
                    height: 2
                },
                shadowRadius: 6,
                shadowOpacity: 0.6,
                elevation: 6,
            }}>

                <View style={{ width: '100%', justifyContent: 'center', padding: 20 }}>
                    <View style={{ width: '85%' }}>
                        <Text style={{ padding: 10, fontSize: FONTSIZE.header1, fontWeight: 'bold', color: 'rgb(51,222,209)', textAlign: 'left' }}>Track your spending and build your own goals!</Text>
                    </View>

                    <Text style={{ paddingHorizontal: 10, fontSize: FONTSIZE.header2, fontWeight: '500', color: 'rgb(51,222,209)', textAlign: 'left' }}>Add transactions, track invoices, manage consumption and build your own goals. </Text>
                </View>
                <View style={{ flex: 1, width: '100%', alignItems: 'flex-end' }}>
                    <TouchableOpacity
                        style={{ backgroundColor: 'red', padding: 15, margin: 15, borderRadius: 10, backgroundColor: 'rgb(24,24,24)' }}
                        onPress={() => {
                            signInAnonymously(auth)
                                .then(() => {
                                    props.onPress(auth.currentUser.uid)
                                    console.log(auth.currentUser.uid);
                                })
                                .catch((error) => {
                                    const errorCode = error.code;
                                    const errorMessage = error.message;
                                    // ...
                                });
                        }}>
                        <Text style={{ fontSize: FONTSIZE.header2, color:'rgb(51,222,209)'  }}>Start</Text>
                    </TouchableOpacity>
                </View>
            </View>


        </SafeAreaView >
    )
};

export default WelcomeScreen;