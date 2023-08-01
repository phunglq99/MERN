import { PostModel } from '../models/PostModel.js';

export const getPosts = async (req, res) => {
    try {
        const posts = await PostModel.find();
        // console.log('posts', posts);
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

export const createPost = async (req, res) => {
    try {
        const newPost = req.body;
        newPost.title = newPost.title || 'Default Title';
        const posts = new PostModel(newPost);
        await posts.save();

        res.status(200).json(posts);
    } catch (err) {
        console.log('err: ', err);
    }
};

export const updatePost = async (req, res) => {
    try {
        const updatePost = req.body;
        const posts = await PostModel.findByIdAndUpdate(
            { _id: updatePost._id },
            updatePost,
            { new: true }
        ); //updatePost: dữ liệu muốn update
        res.status(200).json(posts);
    } catch (err) {
        console.log('err: ', err);
    }
};
