import React from 'react';
import { useSelector } from 'react-redux';

const CreatePostModal = () => {
    const isShow = useSelector((state) => state.createPost.isShow);
    console.log(isShow);
    return (
        <div className={`post_modal ${isShow ? 'show' : 'hide'}`}>
            Create Post Modal
        </div>
    );
};

export default CreatePostModal;
