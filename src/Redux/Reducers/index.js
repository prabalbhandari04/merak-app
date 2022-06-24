import {combineReducers} from 'redux';
import { ordersReducers } from './ordersReducers';

const reducers = combineReducers({
    data: ordersReducers,
})

export default reducers;