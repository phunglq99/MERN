import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '~/redux/action';
import Post from './Post';

const PostList = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.data);
    // console.log('PostList [post]', posts);
    useEffect(() => {
        dispatch(action.getPosts.getPostsRequest());
    }, [dispatch]);

    return (
        <div className="post_list">
            {posts.map((post, index) => (
                <Post key={index} post={post} />
            ))}
        </div>
    );
};

export default PostList;
