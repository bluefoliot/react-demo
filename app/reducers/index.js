import { combineReducers } from 'redux';

//Reducers
import userReducer from './user-reducers';
import postReducer from './post-reducers';
import todoReducer from './todo-reducers';

var reducers = combineReducers({
        userState: userReducer,
        postState: postReducer,
        todoState: todoReducer
    });

export default reducers;
