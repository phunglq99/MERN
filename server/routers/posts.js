import express from 'express';
import { getPosts } from '../controllers/posts.js';
import { createPost } from '../controllers/posts.js';
import { updatePost } from '../controllers/posts.js';

const router = express.Router();
// [GET]/posts
router.get('/', getPosts);
router.post('/', createPost);
router.post('/update', updatePost);

export default router;