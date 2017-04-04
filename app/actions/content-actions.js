import * as types from './action-types';

export function updatePostList(postList){
    return{
        type: types.UPDATE_POST_LIST,
        postList
    };
}

export function updateTodoList(todoList){
    return{
        type: types.UPDATE_TODO_LIST,
        todoList
    };
}

export function updateAlbumList(albumList){
    return {
        type: types.UPDATE_ALBUM_LIST,
        albumList
    };
}
