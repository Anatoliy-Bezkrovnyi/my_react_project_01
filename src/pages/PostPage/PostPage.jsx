import { fetchPosts } from "../../api/post-api";
import { useEffect } from "react";
import { useState } from "react";
import Error from "../../components/Error/Error";
import Loading from "../../components/Loading/Loading";
import PostList from "../../components/PostList/PostList";
import { useSearchParams } from "react-router-dom";
import Filter from "../../components/Filter/Filter";


const PostPage = () => { 
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [params] = useSearchParams();
    const filteredValue = params.get('title') ?? '';

    

    
    
    
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

   

    const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(filteredValue.toLowerCase()))

    return (
        <div>
            {isLoading && <Loading/>}
            {error && <Error />}
            <Filter/>
            {filteredPosts.length > 0 && <PostList posts={filteredPosts}/>}
        </div>
    )
}
 
export default PostPage;