import * as types from '../actions/action-types';

const initialState={
    userList: []
};

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case types.UPDATE_USER_LIST:
            return Object.assign({}, state, {
                userList: action.userList
            });
        }
    return state;
}

export default userReducer;
