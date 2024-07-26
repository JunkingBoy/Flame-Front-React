/*
 * @Author: Lucifer
 * @Data: Do not edit
 * @LastEditors: Lucifer
 * @LastEditTime: 2024-07-26 19:26:25
 * @Description: 
 */
import React, { useState } from 'react';
import { 
    Flex,
    Progress,
    Tooltip,
    Card,
    Dropdown,
    Menu,
    Modal,
    Button,
    message,
    Upload
 } from 'antd';
import type { ProgressProps } from 'antd';
import {
    EllipsisOutlined,
    EditOutlined,
    DiffFilled,
    UploadOutlined
 } from '@ant-design/icons';

import { ProjectInfo } from '../interface/ProjectInterface';
import { calCompletionRate } from '../utils/Calculate';
import { pushFile } from '../apis/UpDown';

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
const CardBox: React.FC<{ info: ProjectInfo, del: (id: number, name: string) => void, modify: (id: number, name: string, desc: string) => void }> = ({ info, del, modify }) => {
    let [percent, setPercent] = useState<number>(calCompletionRate(info.case));
    const [modalVisible, setModalVisible] = useState(false);

    const props = {
        name: 'file',
        customRequest: async (options: any) => {
            // todo: 上传文件是否之前不知道是否成功.如果成功返回全部.如果失败返回失败字段.所以这个传参是否需要
            let upRes: any = await pushFile(options.file, 'func', info.project_id.toString());

            if (upRes.code === 200) {
                message.success('上传成功');
            } else {
                message.error('上传失败');
            }
        },
        onChange(info: any) {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            Modal.success({
              content: `${info.file.name} file uploaded successfully.`,
            });
          } else if (info.file.status === 'error') {
            Modal.error({
              content: `${info.file.name} file upload failed.`,
            });
          }
        },
    };

    const showModal = () => {
        setModalVisible(true);
    };

    const handleSwitch = () => {
        setModalVisible(false);
    };

    const delMenu = (
        <Menu>
            <Menu.Item key="delete" onClick={() => del(info.project_id, info.project_name)}>
            删除
            </Menu.Item>
        </Menu>
    );

    const addMenu = (
        <Menu>
            <Menu.Item key="func" onClick={() => showModal()}>
            新增功能测试用例
            </Menu.Item>
            {/* <Menu.Item key="api" onClick={() => del(info.project_name, info.project_id)}>
            新增接口测试用例
            </Menu.Item> */}
        </Menu>
    );

    const editMenu = (
        <Menu>
            <Menu.Item key="edit" onClick={() => modify(info.project_id, info.project_name, info.project_desc)}>
            修改项目信息
            </Menu.Item>
        </Menu>
    );

    return (
            <Card
                style={{ margin: '5px 10px 0 15px', borderRadius: '10px', width: '18%' }}
                actions={[
                    <Dropdown overlay={addMenu}>
                        <DiffFilled key='setting' />
                    </Dropdown>,
                    <Dropdown overlay={editMenu}>
                        <EditOutlined key='edit' />
                    </Dropdown>,
                    <Dropdown overlay={delMenu}>
                        <EllipsisOutlined key='ellipsis' />
                    </Dropdown>
                ]}
                hoverable={true}
            >
                <Meta
                    title={info.project_name}
                    description={info.project_desc}
                />
                <Flex vertical  gap="middle">
                    <Progress percent={percent} strokeColor={twoColors} />
                </Flex>
                <Tooltip title="用例数量">
                    {/* <span>用例数量: {info.case.all_case}</span> */}
                </Tooltip>
                <Modal title="上传文件" visible={modalVisible} onOk={handleSwitch} onCancel={handleSwitch} okText='确认' cancelText='取消'>
                    <Upload {...props} accept='.xlsx,.xls'>
                        <Button icon={<UploadOutlined />}>点击上传</Button>
                    </Upload>
                </Modal>
            </Card>
    );
}

const PlanCard: React.FC<{ info: ProjectInfo }> = ({ info }) => {
    const addMenu = (
        <Menu>
            <Menu.Item key="func">
            新建计划
            </Menu.Item>
        </Menu>
    );

    const editMenu = (
        <Menu>
            <Menu.Item key="edit">
            修改计划用例
            </Menu.Item>
        </Menu>
    );

    return (
        <Card
            style={{ margin: '15px 10px 15px 50px', borderRadius: '10px', width: '70%' }}
            actions={[
                <Dropdown overlay={addMenu}>
                    <DiffFilled key='setting' />
                </Dropdown>,
                <Dropdown overlay={editMenu}>
                    <EditOutlined key='edit' />
                </Dropdown>
            ]}
            hoverable={true}
        >
            <Meta
                title={info.project_name}
                description={info.project_desc}
            />
        </Card>
    )
}

export {
    CardBox,
    PlanCard
};
