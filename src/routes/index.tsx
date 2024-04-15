import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layouts";
import Home from "../pages/home";
import Bookmarks from "../pages/bookmarks";
import Posts from "../pages/posts";
import Videos from "../pages/videos";
import Photos from "../pages/photos";

export default function Router(){
    return(
        <BrowserRouter>
        <Routes>
            <Route element={<Layout/>} >
                <Route path="/" element={<Home/>}/>
                <Route path="/bookmarks" element={<Bookmarks/>} />
                <Route path="/photos" element={<Photos/>} />
                <Route path="/videos" element={<Videos/>} />
                <Route path="/posts" element={<Posts/>} />
            </Route>
        </Routes>
        </BrowserRouter>
    )
}