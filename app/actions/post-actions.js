import * as types from './action-types';

export function updatePostList(postList){
    return{
        type: types.UPDATE_POST_LIST,
        postList
    };
}

export function updatePostId(postId){
    return{
        type: types.UPDATE_POST_ID,
        postId
    };
}
