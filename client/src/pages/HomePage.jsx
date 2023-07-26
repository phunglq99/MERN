import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import PostList from '../components/PostList';
import PostAdd from '../components/PostAdd';
import CreatePostModal from '../components/CreatePostModal';
import { showModal } from '../redux/action';

const HomePage = () => {
    const dispatch = useDispatch();
    const openModalCreatePost = () => {
        dispatch(showModal());
    };
    return (
        <div className="container position-relative">
            <CreatePostModal />
            <Header />
            <PostList />
            <PostAdd onClick={openModalCreatePost} />
        </div>
    );
};

export default HomePage;
