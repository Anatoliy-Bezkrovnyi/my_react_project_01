import Post from "../Post/Post";
const PostList = ({ posts }) => { 

    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id}>
                    <Post post={post} />
                </li>
            ))}
        </ul>         
    );
}
 
export default PostList