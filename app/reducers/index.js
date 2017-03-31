import { combineReducers } from 'redux';

//Reducers
import userReducer from './user-reducers';

var reducers = combineReducers({
        userState: userReducer
    });

export default reducers;
