import * as types from '../actions/action-types';

const initialState={
    todoList: [],
    todoId : ''
};

const todoReducer = (state = initialState, action) => {
    switch(action.type){
        case types.UPDATE_TODO_LIST:
            return Object.assign({}, state, {
                todoList: action.todoList
            });
        case types.UPDATE_TODO_ID:
            return Object.assign({}, state, {
                todoId: action.todoId
            });
        }
    return state;
}

export default todoReducer;
