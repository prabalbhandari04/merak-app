import * as types from "../Constants/action-types";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';


var token = ""
var headers = ""

// const getData = async () => {
//     try {
//       const value = await AsyncStorage.getItem('access_token')
//       if(value !== null) {
//         headers = {
//             "Content-type": "application/json; charset=UTF-8",
//             "Authorization": 'Bearer ' + token
//         };
//         token = value
//       }
//     } catch(e) {
//       console.log(e)
//     }
//   }
//   getData()

//------------Get Ouders----------------------------
const getOrders = (orders) => ({
    type: types.GET_ORDERS,
    payload: orders,
})

//------------Get Ouders----------------------------
const getUnassigned = (orders) => ({
    type: types.UNASSIGNED_ORDERS,
    payload: orders,
})

//------------Get Ouders----------------------------
const getPending = (orders) => ({
    type: types.PENDING_ORDERS,
    payload: orders,
})

//------------Get Ouders----------------------------
const getAccepted = (orders) => ({
    type: types.ACCEPTED_ORDERS,
    payload: orders,
})


//------------Api Call Get Products----------------------------
export const loadOrders = (token) => {
    return function (dispatch) {
        axios.get(`https://merak-test.onrender.com/inventory/order/`, {headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": 'Bearer ' + token
        }}).then((res) => {
            dispatch(getOrders(res.data));
        }).catch((err) => console.log(err));
    }
}

export const loadUnassigned = (token) => {
    return function (dispatch) {
        console.log(headers)
        axios.get(`https://merak-test.onrender.com/inventory/order/?status=PENDING&assigned_status=false`, {headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": 'Bearer ' + token
        }}).then((res) => {
            dispatch(getUnassigned(res.data));
        }).catch((err) => console.log(err));
    }
}

export const loadPending = (token) => {
    return function (dispatch) {
        axios.get(`https://merak-test.onrender.com/inventory/order/get_user_pending_order/`, {headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": 'Bearer ' + token
        }}).then((res) => {
            dispatch(getPending(res.data));
        }).catch((err) => console.log(err));
    }
}

export const loadAccepted = (token) => {
    return function (dispatch) {
        axios.get(`https://merak-test.onrender.com/inventory/order/get_user_accepted_order/`, {headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": 'Bearer ' + token
        }}).then((res) => {
            dispatch(getAccepted(res.data));
        }).catch((err) => console.log(err));
    }
}

export const putOrders = (uuid, product, token) => {
    return function (dispatch) {
        axios.patch(`https://merak-test.onrender.com/inventory/order/${uuid}/`, product, {headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": 'Bearer ' + token
        }}).then((res) => {
            //dispatch(orderAdded());
            dispatch(loadOrders());
        }).catch((err) => console.log(err));
    }
}

export const acceptPendingOrder = (uuid, token) => {
    return function (dispatch) {
        axios.get(`https://merak-test.onrender.com/inventory/order/accept_pending_order/${uuid}/`, {headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": 'Bearer ' + token
        }}).then((res) => {
            dispatch(loadAccepted(token))
            dispatch(loadUnassigned(token))
            dispatch(loadPending(token))
        }).catch((err) => console.log(err));
    }
}

export const declineAssignedOrder = (uuid, token) => {
    return function (dispatch) {
        axios.get(`https://merak-test.onrender.com/inventory/order/decline_assigned_order/${uuid}/`, {headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": 'Bearer ' + token
        }}).then((res) => {
            dispatch(loadAccepted(token))
            dispatch(loadUnassigned(token))
            dispatch(loadPending(token))
        }).catch((err) => console.log(err));
    }
}

export const declineAcceptedOrder = (uuid, token) => {
    return function (dispatch) {
        axios.get(`https://merak-test.onrender.com/inventory/order/decline_accepted_order/${uuid}/`, {headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": 'Bearer ' + token
        }}).then((res) => {
            dispatch(loadAccepted(token))
            dispatch(loadUnassigned(token))
            dispatch(loadPending(token))
        }).catch((err) => console.log(err));
    }
}


