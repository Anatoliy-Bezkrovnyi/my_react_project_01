import { fetchPosts } from "../../api/post-api";
import { useEffect } from "react";
import { useState } from "react";
import Error from "../../components/Error/Error";
import Loading from "../../components/Loading/Loading";
import PostList from "../../components/PostList/PostList";

const PostPage = () => { 
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        const getPosts = async () => {
            setIsLoading(true);
            setError(false);
           try {
               const data = await fetchPosts();
               setPosts(data);
           } catch (error) {
                setError(true);
            }
            finally {
                setIsLoading(false);
            }
        }
        getPosts();
    }, []);

    return (
        <div>
            {isLoading && <Loading/>}
            {error && <Error/>}
            {posts.length > 0 && <PostList posts={posts}/>}
        </div>
    )
}
 
export default PostPage;