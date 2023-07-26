import React from 'react';

const PostAdd = ({ onClick }) => {
    return (
        <button type="button" className="post_add" onClick={onClick}>
            <span>+</span>
        </button>
    );
};

export default PostAdd;
