import { takeLatest, call, put } from '@redux-saga/core/effects';
import * as actions from '../action';
import * as api from '../../api';

function* fetchPostSaga() {
    const posts = yield call(api.fetchPosts);
    console.log('[posts]', posts);
    yield put(actions.getPosts.getPostSuccess(posts));
}

function* mySaga() {
    yield takeLatest(actions.getPosts.getPostsRequest, fetchPostSaga);
}

// gernerator function ES6
export default mySaga;
