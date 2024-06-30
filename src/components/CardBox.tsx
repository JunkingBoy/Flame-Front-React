import React, { useState } from 'react';
import { Flex, Progress, Tooltip, Card } from 'antd';
import type { ProgressProps } from 'antd';
import {
    EllipsisOutlined,
    EditOutlined,
    DiffFilled
 } from '@ant-design/icons';

import { ProjectInfo } from '../interface/ProjectInterface';
import { DataContainer } from '../utils/InterfaceClass';
import { ProCalContainer } from '../utils/InterfaceClass';

const { Meta } = Card;

const mainBox: React.CSSProperties = {
    display:'flex',
    flexDirection:'column',
    width:'100%',
    height:'100%'
}

const headerBox: React.CSSProperties = {
    width:'25%',
    height:'100%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
}

const twoColors: ProgressProps['strokeColor'] = {
    '0%': '#108ee9',
    '100%': '#87d068',
};

/**
 * 卡片布局
 * 抽象出传入的数据 -> 敲定api
 * @returns 返回页面盒子组件
 */
const CardBox: React.FC<{ info: ProjectInfo }> = ({ info }) => {
    /**
     * 处理传入的info对象
     */
    // let [calInfo, setCalInfo] = useState<DataContainer<ProjectInfo>>();

    // const cal: number = new ProCalContainer<ProjectInfo>(info).getCompletenes(info.case.pass_case, info.case.all_case);

    return (
        <Card
            style={{ margin: '5px 10px 0 15px', borderRadius: '10px', width: '18%' }}
            actions={[
                <DiffFilled key='setting' />,
                <EditOutlined key='edit' />,
                <EllipsisOutlined key='ellipsis' />
            ]}
            hoverable={true}
            loading={true}
        >
            <Meta
                title={info.project_name}
                description={info.project_desc}
            />
            <Flex vertical  gap="middle">
                {/* 75修改为接收的值 */}
                <Progress percent={75} strokeColor={twoColors} />
            </Flex>
            <Tooltip title="用例数量">
                <span>用例数量: {info.case.all_case}</span>
            </Tooltip>
        </Card>
    );
}

export default CardBox;
