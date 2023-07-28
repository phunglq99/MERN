import { takeLatest, call, put } from '@redux-saga/core/effects';
import * as actions from '../action';
import * as api from '../../api';

function* fetchPostSaga() {
    try {
        const posts = yield call(api.fetchPosts);
        console.log('[posts]', posts);
        yield put(actions.getPosts.getPostSuccess(posts.data));
    } catch (error) {
        console.error(error);
        yield put(actions.getPosts.getPostFailure(error));
    }
}

function* createPostSage(action) {
    try {
        const post = yield call(api.createPosts, action.payload);
        console.log('[CreatepostSaga]', post);
        yield put(action.createPosts.createPostSuccess(post));
    } catch (err) {
        console.log(err);
        yield put(actions.createPosts.createPostFailure(error));
    }
}

function* mySaga() {
    yield takeLatest(actions.getPosts.getPostsRequest, fetchPostSaga);
    yield takeLatest(actions.createPosts.createPostsRequest, createPostSage);
}

// gernerator function ES6
export default mySaga;
