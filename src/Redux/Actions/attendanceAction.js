import * as types from "../Constants/action-types";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

var token = ""
var headers = ""

const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('access_token')
      if(value !== null) {
        token = value
      }
    } catch(e) {
      console.log(e)
    }
  }
  getData().then(()=>{
      headers = {
              "Authorization": 'Bearer ' + token
      };
  })


//------------Login Users----------------------------
const punchIn = () => ({
    type: types.ATTEND_IN,
})

const punchOut = () => ({
    type: types.ATTEND_OUT,
})

export const attendIn = () => {
    return async function (dispatch) {
        await axios.get(`https://merak-test.onrender.com/user/api/punch_in/`, {headers: headers}).then(async (res) => {
            dispatch(punchIn());
        }).catch((err) => console.log(err));
    }
}

export const attendOut = () => {
    return async function (dispatch) {
        await axios.get(`https://merak-test.onrender.com/user/api/punch_out/`, {headers: headers}).then(async (res) => {
            dispatch(punchOut());
        }).catch((err) => console.log(err));
    }
}
