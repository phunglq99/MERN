import { createActions, createAction } from 'redux-actions';

export const getType = (reduxAction) => {
    return reduxAction().type;
};

export const getPosts = createActions({
    getPostsRequest: undefined,
    getPostSuccess: (payload) => payload,
    getPostFailure: (err) => err
});

export const createPosts = createActions({
    createPostsRequest: (payload) => payload,
    createPostSuccess: (payload) => payload,
    createPostFailure: (err) => err
});

export const showModal = createAction('SHOW-MODAL-CREATE-POST');
export const hideModal = createAction('HIDE-MODAL-CREATE-POST');

/*
    getType(getPosts.getPostSuccess)
    =>
    {
        type: `getPostSuccess`;
        payload: {
            name: test
        };
    }
*/
