import {combineReducers} from 'redux';
import { ordersReducers } from './ordersReducers';
import { usersReducers } from './userReducers';

const reducers = combineReducers({
    data: ordersReducers,
    data1: usersReducers
})

export default reducers;