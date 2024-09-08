import { Link } from "react-router-dom";

const Post = ({ post: { id, title, body, views } }) => { 
    return (
        <div>
            <ul>
                <li>Id: {id}</li>
                <li>Title: {title}</li>
                <li>Description: {body}</li>
                <li>Vievs: {views}</li>
                <Link to={`/post/${id}`}>Details</Link>
            </ul>
        </div>
    );
}
 
export default Post