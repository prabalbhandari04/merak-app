import {combineReducers} from 'redux';
import { ordersReducers } from './ordersReducers';
import { usersReducers } from './userReducers';
import { attendanceReducers } from './attendanceReducer';

const reducers = combineReducers({
    data: ordersReducers,
    data1: usersReducers,
    data2: attendanceReducers
})

export default reducers;