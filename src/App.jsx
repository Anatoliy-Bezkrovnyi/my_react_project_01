import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/navigation";
//import HomePage from "./pages/HomePage/HomePage";
//import PostPage from "./pages/PostPage/PostPage";
//import PostDetails from "./pages/PostDetails/PostDetails";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading/Loading";

const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const PostPage = lazy(() => import('./pages/PostPage/PostPage'))
const PostDetails = lazy(() => import('./pages/PostDetails/PostDetails'))

const App = () => {
  

  return (
    <div>
      <Navigation/>
      <Suspense fallback={<Loading/>}>
      
      <Routes>        
        <Route path="/" element={<HomePage/>} />
        <Route path="/posts" element={<PostPage/>} />        
        <Route path="/post/:postId" element={<PostDetails />} >
          <Route path="reactions" element={<div>Reactions</div>} />
        </Route >
      </Routes>
      </Suspense>
    </div>
  );
};

export default App
