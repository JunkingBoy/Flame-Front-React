/*
 * @Author: Lucifer
 * @Data: 路由的树形结构
 * @LastEditors: Lucifer
 * @LastEditTime: 2024-06-16 02:01:01
 * @Description: 该文件仅仅返回路由的树形结构.处理该结构放在另一个组件当中
 */
import { Children } from "react";
import { Register } from "../config/Lazy";
import Login from "../pages/Login";
import NotFind from "../pages/NotFind";
import Home from "../pages/Home";
import Auth from "./RouteAuth";

const routes = [
    { path: "/", element: <Login /> },
    { path: "/register", element: <Register /> },
    {
        // path: "/home", element: <Home />, Children: 
        // [
        //     { path: "main", element: <Main /> }
        // ]
        path: "/home", element: <Auth><Home /></Auth>
    },
    { path: "/*", element: <NotFind /> }
]

export default routes;
