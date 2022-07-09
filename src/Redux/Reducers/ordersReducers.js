import * as types from "../Constants/action-types";

const initialState = {
    accepted: [],
    pending: [],
    unassigned: [],
    orders: [],
    order: {},
    loading: true,
}


export const ordersReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ORDERS:
            return {
                ...state,
                orders: action.payload,
                loading: false,
            };
        case types.ACCEPTED_ORDERS:
            return {
                ...state,
                accepted: action.payload,
                loading: false,
            };
        case types.PENDING_ORDERS:
            return {
                ...state,
                pending: action.payload,
                loading: false,
            };
        case types.UNASSIGNED_ORDERS:
            return {
                ...state,
                unassigned: action.payload,
                loading: false,
            };

        case types.UPDATE_ORDERS:
            return {
                ...state,
                loading: false,
            }

        default:
            return state;
    }  
};
