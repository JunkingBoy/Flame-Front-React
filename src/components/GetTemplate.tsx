import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { DropdownProps, MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

import { getTemplate } from '../apis/UpDown';

const GetTemplate: React.FC = () => {
    let [open, setOpen] = useState(false);

    // 这里发送请求到后端获取对应的用例模板
    const handleMenuClick: MenuProps['onClick'] = async (e) => {
        if (e.key === '1') {
            setOpen(false);
            await getTemplate(e.key);
        }
    };

    const handleOpenChange: DropdownProps['onOpenChange'] = (nextOpen, info) => {
        if (info.source === 'trigger' || nextOpen) {
            setOpen(nextOpen);
        }
    };

    const items: MenuProps['items'] = [
    {
        label: '功能测试用例模板',
        key: '1',
    },
    {
        label: '接口测试用例模板',
        key: '2',
    }
    ];

    return (
        <Dropdown
            menu={{
                items,
                onClick: handleMenuClick,
            }}
            onOpenChange={handleOpenChange}
            open={open}
            >
            <a onClick={(e) => e.preventDefault()}>
                <Space>
                用例模板
                <DownOutlined />
                </Space>
            </a>
        </Dropdown>
    );
}

export default GetTemplate;
