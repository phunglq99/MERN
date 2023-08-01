import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FileBase64 from 'react-file-base64';
import { createPosts, getType, hideModal } from '../../redux/action';

const CreatePostModal = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        title: '',
        content: '',
        attachment: ''
    });
    const bodyRef = useRef();
    const isShow = useSelector((state) => state.createPost.isShow);
    console.log(isShow);

    useEffect(() => {
        const currentBodyRef = bodyRef.current;
        if (!isShow) {
            currentBodyRef.addEventListener('click', handleCloseModal);
        }
        return () => {
            currentBodyRef.removeEventListener('click', handleCloseModal);
        };
    }, []);

    const handleCloseModal = () => {
        dispatch(hideModal());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPosts.createPostsRequest(data));
        dispatch(hideModal());
    };

    return (
        <div className={`post_modal ${isShow ? 'show' : 'hide'}`}>
            <div className="overlay" ref={bodyRef}></div>
            <div className="post_modal-card">
                <form className="post_modal-item" onSubmit={handleSubmit}>
                    <h3>Create Post</h3>
                    <div className="post_modal-input">
                        <div className="post_modal-field">
                            <span>Title</span>
                            <input
                                type="text"
                                value={data.title}
                                onChange={(e) =>
                                    setData({ ...data, title: e.target.value })
                                }
                            />
                        </div>
                        <div className="post_modal-field">
                            <span>Content</span>
                            <textarea
                                name="content"
                                id="content"
                                cols="30"
                                rows="5"
                                value={data.content}
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        content: e.target.value
                                    })
                                }
                            />
                        </div>
                        <FileBase64
                            accept="image/*"
                            type="file"
                            multiple={false}
                            value={data.attachment}
                            onDone={({ base64 }) =>
                                setData({ ...data, attachment: base64 })
                            }
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default CreatePostModal;
