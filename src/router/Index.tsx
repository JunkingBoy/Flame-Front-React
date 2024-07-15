/*
 * @Author: Lucifer
 * @Data: 路由的树形结构
 * @LastEditors: Lucifer
 * @LastEditTime: 2024-06-25 15:40:19
 * @Description: 该文件仅仅返回路由的树形结构.处理该结构放在另一个组件当中
 */
import { Children } from "react";
// import { Register } from "../config/Lazy";
import Login from "../pages/LoginRegisterBox";
import NotFind from "../pages/NotFind";
import Home from "../pages/Home";
import Project from "../components/Project";
import PC from "../components/PersonalCenter";

import Auth from "./RouteAuth";
import { Plan } from "../components/Plan";

const routes = [
    { path: "/", element: <Login /> },
    // { path: "/register", element: <Register /> },
    {
        // path: "/home", element: <Home />, Children: 
        // [
        //     { path: "main", element: <Main /> }
        // ]
        // path: "/home", element: <Auth><Home /></Auth>
        path: "/home", 
        element: <Home />, 
        children:
        [
            { index: true, element: <PC /> },
            { path: "project", element: <Project /> },
            { path: "plan", element: <Plan /> }
        ]
    },
    { path: "/*", element: <NotFind /> }
]

export default routes;
