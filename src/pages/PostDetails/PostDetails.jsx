import { Link, Outlet, useParams } from "react-router-dom"
import { useEffect, useRef } from "react";
import { useState } from "react";
import { fetchPost } from "../../api/post-api";
import Error from "../../components/Error/Error";
import Loading from "../../components/Loading/Loading";
import { useLocation } from "react-router-dom";




const PostDetails = () => { 

    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const location = useLocation();  
    
    const locationObj = useRef(location.state ?? '/posts');

    
    
    
    useEffect(() => {
        const getPost = async () => {
            setIsLoading(true);
            setError(false);
           try {
               const data = await fetchPost(postId);               
               setPost(data);
           } catch (error) {
               setError(true);               
            }
            finally {
                setIsLoading(false);
            }
        }
        postId && getPost();                  
       
    }, [postId]);
    
    return (
        <div>
            <Link to={locationObj.current}>Back</Link>
            <br/>
            {isLoading && <Loading />}
            {error && <Error />}
            {post && (<div> Description 
                <li>Id: {post.id}</li>
                <li>Title: {post.title}</li>
                <li>Description: {post.body}</li>
                <li>Vievs: {post.views}</li>
            </div>)}
            <Link to={'reactions'} state={location.state}>Reactions</Link>
            <br />
            <Outlet />
        </div>          
        
    )
}
 
export default PostDetails