import axios from 'axios';
import queryString from 'query-string';
//포스트 쓰기
export const writePost = ({ title, content, tags, userId=0}) => 
axios.post(
    //'http://101.101.166.29:4000/api/posts/write', 
    '/api/posts/write', 
    // {title, body, tags}
    {title, content, tags, userId}
);
//포스트 읽기
export const getPost = (id) => axios.get(`/api/posts/${id}`);
//포스트 목록
export const getPostList = ({tag, page}) => axios.get(`/api/posts/?${queryString.stringify({tag, page})}`);

//포스트 수정
export const editPost = ({id, title, content, tags, userId=0}) => 
    axios.patch(`/api/posts/${id}`, {title, content, tags, userId});