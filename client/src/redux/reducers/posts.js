import { INIT_state } from "../../constant";
import { getPosts, getType } from "../action";


export default function postsReducers(state= INIT_state.posts, action) {
    switch(action.type) {
        case getType(getPosts.getPostsRequest):
            return {
                ...state,
                isLoading: true,
            }
        case getType(getPosts.getPostSuccess):
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }
        case getType(getPosts.getPostFailure):
            return {
                ...state,
                isLoading: false,
            }
        default:
            return state;
    }
}