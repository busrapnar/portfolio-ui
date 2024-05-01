import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layouts";
import Home from "../pages/home";
import Bookmarks from "../pages/bookmarks";
import Posts from "../pages/posts";
import PostDetail from "../pages/posts/post-details";
import Projects from "../pages/projects";
import Contact from "../pages/contact";
export default function Router(){
    return(
        <BrowserRouter>
        <Routes>
            <Route element={<Layout/>} >
                <Route path="/" element={<Home/>}/>
                <Route path="/bookmarks" element={<Bookmarks/>} />
                <Route path="/projects" element={<Projects/>} />
                <Route path="/posts" element={<Posts/>} />
                <Route path="/posts/post-detail" element={<PostDetail/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route />
            </Route>
        </Routes>
        </BrowserRouter>
    )
}