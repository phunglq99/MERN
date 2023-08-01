import { takeLatest, call, put } from '@redux-saga/core/effects';
import * as actions from '../action';
import * as api from '../../api';

function* fetchPostSaga() {
    try {
        const posts = yield call(api.fetchPosts);
        console.log('[posts]', posts);
        yield put(actions.getPosts.getPostSuccess(posts.data));
    } catch (error) {
        console.log(error);
        yield put(actions.getPosts.getPostFailure(error));
    }
}

function* createPostSaga(action) {
    try {
        const post = yield call(api.createPosts, action.payload);
        console.log('[CreatePostSaga]', post);
        yield put(actions.createPosts.createPostSuccess(post.data));
    } catch (err) {
        console.log(err);
        yield put(actions.createPosts.createPostFailure(error));
    }
}

function* updatePostSaga(action) {
    try {
        const updatePost = yield call(api.updatePosts, action.payload);
        console.log('[UpdatePostSaga]', updatePost);
        yield put(actions.updatePosts.updatePostSuccess(updatePost.data));
    } catch (err) {
        console.log(err);
        yield put(actions.updatePosts.updatePostFailure(error));
    }
}

function* mySaga() {
    yield takeLatest(actions.getPosts.getPostsRequest, fetchPostSaga);
    yield takeLatest(actions.createPosts.createPostsRequest, createPostSaga);
    yield takeLatest(actions.updatePosts.updatePostsRequest, updatePostSaga);
}

// gernerator function ES6
export default mySaga;
