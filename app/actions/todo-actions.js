import * as types from './action-types';

export function updateTodoList(todoList){
    return{
        type: types.UPDATE_TODO_LIST,
        todoList
    };
}

export function updateTodoId(todoId){
    return{
        type: types.UPDATE_TODO_ID,
        todoId
    };
}
