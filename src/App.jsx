import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/navigation";
import HomePage from "./pages/HomePage/HomePage";
import PostPage from "./pages/PostPage/PostPage";
import PostDetails from "./pages/PostDetails/PostDetails";



const App = () => {
  

  return (
    <div>
      <Navigation/>
      
      <Routes>        
        <Route path="/" element={<HomePage/>} />
        <Route path="/posts" element={<PostPage/>} />
        <Route path="/profile" element={<div>Profile page</div>} />
        <Route path="/post/:postId" element={<PostDetails/>} />
      </Routes>
      
    </div>
  );
};

export default App
