import React, { useCallback } from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { updatePosts } from '../../../redux/action';

const Post = ({ post }) => {
    const dispatch = useDispatch();

    const handleLikeCount = useCallback(() => {
        dispatch(
            updatePosts.updatePostsRequest({
                ...post,
                likeCount: post.likeCount + 1
            })
        );
    }, [dispatch, post]);

    return (
        <div className="post_item border p-3">
            <div className="post_item-header">
                <div className="logo">
                    <span>A</span>
                </div>
                <div className="title">
                    <h5>{post.author}</h5>
                    <span>
                        {moment(post.updatedAt).format('HH:MM MMM DD, YYYY')}
                    </span>
                </div>
                <div className="icon">
                    <i className="bi bi-three-dots-vertical"></i>
                </div>
            </div>
            <img className="post_image" src={post.attachment} alt="123" />
            <div className="post_item-body">
                <h3 className="title">{post.title}</h3>
                <p>{post.content}</p>
            </div>
            <div className="post_item-footer">
                <div className="icon" onClick={handleLikeCount}>
                    <i className="bi bi-heart-fill"></i>
                </div>
                <span>{post.likeCount} likes</span>
            </div>
        </div>
    );
};

export default Post;
