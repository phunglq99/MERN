import React from 'react';
import moment from 'moment';

const Post = ({ post }) => {
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
            <div className="post_item-body">
                <h3 className="title">{post.title}</h3>
                <p>{post.content}</p>
            </div>
            <div className="post_item-footer">
                <div className="icon">
                    <i className="bi bi-heart-fill"></i>
                </div>
                <span>{post.likeCount} likes</span>
            </div>
        </div>
    );
};

export default Post;
