import * as types from '../actions/action-types';

const initialState={
    postList: [],
    postId : ''
};

const postReducer = (state = initialState, action) => {
    switch(action.type){
        case types.UPDATE_POST_LIST:
            return Object.assign({}, state, {
                postList: action.postList
            });
        case types.UPDATE_POST_ID:
            return Object.assign({}, state, {
                postId: action.postId
            });
        }
    return state;
}

export default postReducer;
