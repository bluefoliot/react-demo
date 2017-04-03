import * as types from '../actions/action-types';

const initialState={
    userList: [],
    userId : ''
};

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case types.UPDATE_USER_LIST:
            return Object.assign({}, state, {
                userList: action.userList
            });
        case types.UPDATE_USER_ID:
            return Object.assign({}, state, {
                userId: action.userId
            });
        }
    return state;
}

export default userReducer;
