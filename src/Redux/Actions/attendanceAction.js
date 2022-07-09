import * as types from "../Constants/action-types";
import axios from "axios";

//------------Login Users----------------------------
const punchIn = () => ({
    type: types.ATTEND_IN,
})

const punchOut = () => ({
    type: types.ATTEND_OUT,
})

export const attendIn = (token) => {
    return async function (dispatch) {
        await axios.get(`https://merak-test.onrender.com/user/api/punch_in/`, {headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": 'Bearer ' + token
        }}).then(async (res) => {
            dispatch(punchIn());
        }).catch((err) => console.log(err));
    }
}

export const attendOut = (token) => {
    return async function (dispatch) {
        await axios.get(`https://merak-test.onrender.com/user/api/punch_out/`, {headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": 'Bearer ' + token
        }}).then(async (res) => {
            dispatch(punchOut());
        }).catch((err) => console.log(err));
    }
}
