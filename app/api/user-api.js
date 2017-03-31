import * as userActions from '../actions/user-actions';
import axios from 'axios';

export function loadUserList(){
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => dispatch(userActions.updateUserList(response.data)));
    }

}
