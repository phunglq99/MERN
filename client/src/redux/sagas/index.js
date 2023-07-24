import { takeLatest } from "@redux-saga/core/effects";
import * as action from '../action';

function* fetchPostSaga(action) {
    
}

function* mySaga() {
    yield takeLatest(action.getPosts.getPostsRequest, fetchPostSaga);
}

// gernerator function ES6
export default mySaga;