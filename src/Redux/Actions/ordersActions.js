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
export const loadOrders = () => {
    return function (dispatch) {
        axios.get(`https://merak-test.onrender.com/inventory/order/`, {headers: headers}).then((res) => {
            dispatch(getOrders(res.data));
        }).catch((err) => console.log(err));
    }
}

export const loadUnassigned = () => {
    return function (dispatch) {
        console.log(headers)
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


