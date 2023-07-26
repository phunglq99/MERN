import { combineReducers } from 'redux';
import posts from './posts';
import createPost from './createPost';

export default combineReducers({
    posts,
    createPost
});
