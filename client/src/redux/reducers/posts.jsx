import { INIT_state } from '../../constant';
import { getPosts, getType, createPosts, updatePosts } from '../action';

export default function postsReducers(state = INIT_state.posts, action) {
    switch (action.type) {
        case getType(getPosts.getPostsRequest):
            return {
                ...state,
                isLoading: true
            };
        case getType(getPosts.getPostSuccess):
            return {
                ...state,
                isLoading: false,
                data: action.payload
            };
        case getType(getPosts.getPostFailure):
            return {
                ...state,
                isLoading: false
            };
        case getType(createPosts.createPostSuccess):
            return {
                ...state,
                isLoading: false,
                data: [...state.data, action.payload]
            };
        case getType(updatePosts.updatePostSuccess):
            return {
                ...state,
                isLoading: false,
                data: state.data.map((post) =>
                    post._id === action.payload._id ? action.payload : post
                )
            };
        default:
            return state;
    }
}
