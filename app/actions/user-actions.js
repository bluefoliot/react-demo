import * as types from './action-types';

export function updateUserList(userList){
    return{
        type: types.UPDATE_USER_LIST,
        userList
    };
}
