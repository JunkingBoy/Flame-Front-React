import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import hotflame from '../images/hotflame.png';

import { SiderMenu } from '../components/Menu';

const { Sider } = Layout;

const Home: React.FC = () => {
    let [collapsed, setCollapsed] = useState(false);

    /**
     * collapsible -> 布尔值 -> 表示是否可折叠
     * collapsed -> 布尔值 -> 表示当前折叠状态
     * 给侧边栏加入一个点击事件,来改变当前折叠状态
     * 侧边栏菜单固定
     * defaultSelectedKeys为进来默认选中的侧边栏
     */
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible={true} collapsed={collapsed} onCollapse={(value) => {setCollapsed(value)}}>
                <div style={{ padding: '25px 0 10px 25px', boxSizing: 'border-box' }}>
                    <img width="30px" src={hotflame} alt="" />
                </div>
                <SiderMenu />
            </Sider>
            <Outlet />
        </Layout>
    );
}

export default Home;
