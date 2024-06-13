/*
 * @Author: Lucifer
 * @Data: 路由筛选文件
 * @LastEditors: Lucifer
 * @LastEditTime: 2024-06-11 16:55:33
 * @Description: 在这个地方进行路由筛选然后进行加载
 */
import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from '../router/Index';

export default function DynamicRouter() {
  let elements = useRoutes(routes);
  return elements;
}
