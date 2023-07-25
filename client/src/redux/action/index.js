import { createActions } from 'redux-actions';

export const getType = (reduxAction) => {
    return reduxAction().type;
};

export const getPosts = createActions({
    getPostsRequest: undefined,
    getPostSuccess: (payload) => payload,
    getPostFailure: (err) => err,
});

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
