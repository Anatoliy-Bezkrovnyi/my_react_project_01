import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Post = ({ post: { id, title, body, views } }) => { 
 const location = useLocation();

    return (
        <div>
            <ul>
                <li>Id: {id}</li>
                <li>Title: {title}</li>
                <li>Description: {body}</li>
                <li>Vievs: {views}</li>
                <Link to={`/post/${id}`} state ={ location }>Details</Link>
            </ul>
        </div>
    );
}
 
export default Post