import * as userActions from '../actions/user-actions';
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
