import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import {
    ScheduleFilled,
    FileWordFilled,
    FileFilled,
    PieChartOutlined,
    FundFilled,
    BugFilled,
    SignalFilled,
    DollarOutlined
  } from '@ant-design/icons';

import { HeaderSiderProps } from '../interface/MenuInterface';
import { headerSiderDiv, headerSiderDivMenu } from './Menu.module';

type MenuItem = Required<MenuProps>['items'][number];

function getItems(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
      } as MenuItem;
}

const SiderMenu: React.FC = () => {
    let [currentPath, setCurrentPath] = useState<string>('')
    let siderRoute = useNavigate();

    const items: MenuItem[] = [
        getItems('个人数据', '/home', <FundFilled className='work-output' />),
        getItems('开始测试', 'sub1', <ScheduleFilled className='start-work' />, [
            getItems('测试计划', '/home/testplan', <FileWordFilled />),
            getItems('测试用例', '/home/testcase', <FileFilled />),
            getItems('测试报告', '/home/testreport', <PieChartOutlined />),
        ]),
        getItems('Bug管理', 'bug1', <BugFilled className='bug-manage' />, [
            getItems('Bug统计', '/home/bug/count', <SignalFilled />)
        ])
    ];

    const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
        siderRoute(key as string);
        setCurrentPath(key as string);
    };

    return (
        <Menu
            theme="dark"
            defaultSelectedKeys={['/home']}
            mode="inline"
            items={items}
            onClick={handleMenuClick}
        />
    );
}

const HeaderSider: React.FC<HeaderSiderProps> = ({ programNameList }) => {
    const items: MenuItem[] = programNameList.map((proName, proIndex) => {
        let key: string = `sub${proIndex + 1}`;
        return {
            key,
            label: proName,
            icon: <DollarOutlined />,
        }
    });

    return (
        <div style={headerSiderDiv}>
            <Menu 
                theme="light"
                defaultSelectedKeys={['sub1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={items}
                style={headerSiderDivMenu}
            />
        </div>
    );
}

export {SiderMenu, HeaderSider};
