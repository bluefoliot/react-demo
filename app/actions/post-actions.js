import * as types from './action-types';

export function updatePostId(postId){
    return{
        type: types.UPDATE_POST_ID,
        postId
    };
}
