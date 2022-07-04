import * as types from "../Constants/action-types";

const initialState = {
    loading: true,
}


export const attendanceReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.ATTEND_IN:
            return {
                ...state,
                loading: false,
            }
        case types.ATTEND_OUT:
            return {
                ...state,
                loading: false,
            }

        default:
            return state;
    }  
};
