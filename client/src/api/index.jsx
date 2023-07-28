import axios from 'axios';

const baseURL = 'http://localhost:5000';

export const fetchPosts = () => axios.get(`${baseURL}/posts`);
export const createPosts = (payload) => axios.post(`${baseURL}/posts`, payload);
