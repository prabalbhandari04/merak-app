import * as types from "../Constants/action-types";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { MMKV } from 'react-native-mmkv'

// const storage = new MMKV()
// import * as SecureStore from 'expo-secure-store';

//------------Login Users----------------------------
const usersLogin = (tokens) => ({
    type: types.LOGIN_USERS,
    payload: tokens
})

export const loginUsers = (credential) => {
    return async function (dispatch) {
        await axios.post(`https://merak-test.onrender.com/user/auth/login/`, credential).then(async (res) => {
            // console.log(res.data)
            await AsyncStorage.setItem('access_token', res.data.access)
            await AsyncStorage.setItem('refresh_token', res.data.refresh)
            // await SecureStore.setItemAsync('access_token', res.data.access);
            // storage.set('access_token', res.data.access)
            dispatch(usersLogin(res.data));
        }).catch((err) => console.log(err));
    }
}

export const tok_fix = (token) =>{
    return function(dispatch){
        dispatch(usersLogin(token));
    }
}
