import * as userActions from '../actions/user-actions';
import * as postActions from '../actions/post-actions';
import * as todoActions from '../actions/todo-actions';
import * as contentActions from '../actions/content-actions';
import axios from 'axios';

function getApi(firstApi, id, secondApi){
    let url = 'https://jsonplaceholder.typicode.com/' + firstApi;
    if(id){
        url += '/' + id;
        if(secondApi){
            url += '/' + secondApi;
        }
    }
    return axios.get(url);
}

export function loadUserList(){
    return dispatch => {
        getApi('users')
        .then(response => dispatch(userActions.updateUserList(response.data)));
    }
}

export function loadPostListByUser(userId){
    return dispatch => {
        getApi('users', userId, 'posts')
        .then(response => {
            dispatch(userActions.updateUserId(userId))
            dispatch(contentActions.updatePostList(response.data))
        });
    }
}

export function loadTodoListByUser(userId){
    return dispatch => {
        getApi('users', userId, 'todos')
        .then(response => {
            dispatch(userActions.updateUserId(userId))
            dispatch(contentActions.updateTodoList(response.data))
        });
    }
}
