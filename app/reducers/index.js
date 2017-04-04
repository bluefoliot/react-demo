import { combineReducers } from 'redux';

//Reducers
import userReducer from './user-reducers';
import contentReducer from './content-reducers';

var reducers = combineReducers({
        userState: userReducer,
        contentState: contentReducer
    });

export default reducers;
