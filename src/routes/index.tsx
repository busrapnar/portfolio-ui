import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layouts";
import Home from "../pages/home";
import Bookmarks from "../pages/bookmarks";
import Posts from "../pages/posts";
import Videos from "../pages/videos";
import Photos from "../pages/photos";
import Users from "../pages/users";
import Settings from "../pages/settings";
import SettingsLayout from "../layouts/settings";
import Account from "../pages/settings/account";
import Notifications from "../pages/settings/notifications";
import Appearance from "../pages/settings/appearance";
import Display from "../pages/settings/display";

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
                <Route path="/users" element={<Users/>} />
                <Route />
            </Route>
            <Route element={<SettingsLayout/>}>
                <Route path="/settings" element={<Settings/>} />
                <Route path="/settings/account" element={<Account/>}/>
                <Route path="/settings/notifications" element={<Notifications/>} />
                <Route path="/settings/apperance" element={<Appearance/>} />
                <Route path="/settings/display" element={<Display/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
    )
}