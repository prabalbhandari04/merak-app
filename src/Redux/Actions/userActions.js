import * as types from "../Constants/action-types";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

//------------Login Users----------------------------
const usersLogin = (tokens) => ({
    type: types.LOGIN_USERS,
    payload: tokens
})

export const loginUsers = (credential) => {
    return async function (dispatch) {
        await axios.post(`https://merak-test.onrender.com/user/auth/login/`, credential).then(async (res) => {
            await AsyncStorage.setItem('access_token', res.data.access)
            await AsyncStorage.setItem('refresh_token', res.data.refresh)
            dispatch(usersLogin(res.data));
        }).catch((err) => console.log(err));
    }
}
