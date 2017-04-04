import * as types from './action-types';

export function updateTodoId(todoId){
    return{
        type: types.UPDATE_TODO_ID,
        todoId
    };
}
