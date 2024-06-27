import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import {
    ScheduleFilled,
    ProjectFilled,
    EditFilled,
    CodeFilled,
    CheckSquareFilled,
    PieChartFilled,
    FundFilled,
    DatabaseFilled,
    SignalFilled,
    DollarOutlined,
    ContainerFilled,
    FileAddFilled,
    ApiFilled,
    ToolFilled
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
            getItems('新建项目', '/home/project', <FileAddFilled />),
            getItems('测试计划', '/home/testplan', <EditFilled />),
            getItems('执行用例', '/home/testcase', <ToolFilled />, [
                getItems('功能用例', '/home/testcase/func', <CodeFilled />),
                getItems('接口用例', '/home/testcase/api', <ApiFilled />)
            ]),
            getItems('测试结果', '/home/testresult', <CheckSquareFilled />),
            getItems('测试报告', '/home/testreport', <PieChartFilled />),
        ]),
        getItems('导出', 'bug1', <DatabaseFilled />, [
            getItems('个人数据', '/home/bug/count', <SignalFilled />),
            getItems('项目数据', '/home/bug/count', <ProjectFilled />),
            getItems('测试用例', '/home/bug/count', <ContainerFilled />)
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

const HeaderSider: React.FC<HeaderSiderProps> = ({ programNameList, onProClick }) => {
    const items: MenuItem[] = programNameList.map((proName, proIndex) => {
        let key: string = `sub${proIndex + 1}`;
        return {
            key,
            label: proName,
            icon: <DollarOutlined />,
        }
    });

    /**
     * 这里希望直接传入label作为参数
     * 需要操作的是key的字符串 -> 通过索引拿到proName
     * key.replace('sub', '') -> 移除'sub'前缀
     * parseInt(..., 10)将剩余的字符串转换为十进制整数,并减去1
     * @param label
     */
    const menuClick: MenuProps['onClick'] = ({ key }) => {
        let index: number = parseInt(key.replace('sub', ''), 10) - 1;
        if (index >= 0 && index < programNameList.length) {
            onProClick(programNameList[index]);
        }
    };

    return (
        <div style={headerSiderDiv}>
            <Menu 
                theme="light"
                defaultSelectedKeys={['sub1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={items}
                style={headerSiderDivMenu}
                onClick={menuClick}
            />
        </div>
    );
}

export {SiderMenu, HeaderSider};
