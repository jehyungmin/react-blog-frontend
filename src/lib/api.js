import axios from 'axios';
import queryString from 'query-string';

export const writePost = ({ title, content, tags, userId=0}) => 
axios.post(
    //'http://101.101.166.29:4000/api/posts/write', 
    '/api/posts/write', 
    // {title, body, tags}
    {title, content, tags, userId}
);
export const getPost = (id) => axios.get(`/api/posts/${id}`);

export const getPostList = ({tag, page}) => axios.get(`/api/posts/?${queryString.stringify({tag, page})}`);