import * as types from "../Constants/action-types";

const initialState = {
    users: [],
    user: {},
    tokens: {},
    loading: true,
}


export const usersReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USERS:
            return {
                ...state,
                user: action.payload,
                loading: false,
            };

        case types.LOGIN_USERS:
            return {
                ...state,
                tokens: action.payload,
                loading: false,
            }

        default:
            return state;
    }  
};
