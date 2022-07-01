import * as types from "../Constants/action-types";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

// const [toke, steToken] = useState("")

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
              "Content-type": "application/json; charset=UTF-8",
              "Authorization": 'Bearer ' + token
      };
  })

//Authentication Header-------------------------------
const tok = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY4NTgzODAxLCJpYXQiOjE2NTY1ODM4MDEsImp0aSI6Ijg3NjAwNDAxNjE2MjQzNDI5MDNjOWIxMTVkMjQ4MTJhIiwidXNlcl9pZCI6MX0.9EPq_L4FChcM4C9BtbDQCHCZa6fDmCyyJnE4Rj5LP6c"



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

//------------Put Ouders----------------------------
const ordersUpdate = () => ({
    type: types.UPDATE_ORDERS,
})



//------------Api Call Get Products----------------------------
export const loadOrders = () => {
    return function (dispatch) {
        axios.get(`https://merak-test.onrender.com/inventory/order/`, {headers: headers}).then((res) => {
            dispatch(getOrders(res.data));
        }).catch((err) => console.log(err));
    }
}

export const loadUnassigned = () => {
    return function (dispatch) {
        axios.get(`https://merak-test.onrender.com/inventory/order/?status=PENDING&assigned_status=false`, {headers: headers}).then((res) => {
            dispatch(getUnassigned(res.data));
        }).catch((err) => console.log(err));
    }
}

export const loadPending = () => {
    return function (dispatch) {
        axios.get(`https://merak-test.onrender.com/inventory/order/get_user_pending_order/`, {headers: headers}).then((res) => {
            dispatch(getPending(res.data));
        }).catch((err) => console.log(err));
    }
}

export const loadAccepted = () => {
    return function (dispatch) {
        axios.get(`https://merak-test.onrender.com/inventory/order/get_user_accepted_order/`, {headers: headers}).then((res) => {
            dispatch(getAccepted(res.data));
        }).catch((err) => console.log(err));
    }
}

export const putOrders = (uuid, product) => {
    return function (dispatch) {
        axios.patch(`https://merak-test.onrender.com/inventory/order/${uuid}/`, product, {headers: headers}).then((res) => {
            //dispatch(orderAdded());
            dispatch(loadOrders());
        }).catch((err) => console.log(err));
    }
}

export const acceptPendingOrder = (uuid) => {
    return function (dispatch) {
        axios.get(`https://merak-test.onrender.com/inventory/order/accept_pending_order/${uuid}/`, {headers: headers}).then((res) => {
            dispatch(loadAccepted())
            dispatch(loadUnassigned())
            dispatch(loadPending())
        }).catch((err) => console.log(err));
    }
}

export const declineAssignedOrder = (uuid) => {
    return function (dispatch) {
        axios.get(`https://merak-test.onrender.com/inventory/order/decline_assigned_order/${uuid}/`, {headers: headers}).then((res) => {
            dispatch(loadAccepted())
            dispatch(loadUnassigned())
            dispatch(loadPending())
        }).catch((err) => console.log(err));
    }
}

export const declineAcceptedOrder = (uuid) => {
    return function (dispatch) {
        axios.get(`https://merak-test.onrender.com/inventory/order/decline_accepted_order/${uuid}/`, {headers: headers}).then((res) => {
            dispatch(loadAccepted())
            dispatch(loadUnassigned())
            dispatch(loadPending())
        }).catch((err) => console.log(err));
    }
}


