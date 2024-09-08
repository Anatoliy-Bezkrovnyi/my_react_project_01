import axios from 'axios';

axios.defaults.baseURL = 'https://dummyjson.com';
export const fetchPosts = async () => { 
   const response = await axios.get('/posts');
   return response.data.posts;
}
 
export const fetchPost = async (id) => { 
  const response = await axios.get(`/post/${id}`);
  console.log(response.data);
  return response.data;
 }