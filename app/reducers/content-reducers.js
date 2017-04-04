import * as types from '../actions/action-types';

const initialState={
    postList: [],
    todoList: [],
    albumList: []
};

const contentReducer = (state = initialState, action) => {
    switch(action.type){
        case types.UPDATE_POST_LIST:
            return Object.assign({}, state, {
                postList: action.postList
            });
        case types.UPDATE_TODO_LIST:
            return Object.assign({}, state, {
                todoList: action.todoList
            });
    }
    return state;
}

export default contentReducer;
