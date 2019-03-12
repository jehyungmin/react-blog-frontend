import axios from 'axios';

export const writePost = ({ title, content, tags, userId=0}) => 
axios.post(
    //'http://101.101.166.29:4000/api/posts/write', 
    '/api/posts/write', 
    // {title, body, tags}
    {title, content, tags, userId}
);
export const getPost = (id) => axios.get(`/api/posts/${id}`);