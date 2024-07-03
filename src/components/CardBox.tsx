/*
 * @Author: Lucifer
 * @Data: Do not edit
 * @LastEditors: Lucifer
 * @LastEditTime: 2024-07-03 23:51:20
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
import type { ProgressProps, UploadProps } from 'antd';
import {
    EllipsisOutlined,
    EditOutlined,
    DiffFilled,
    UploadOutlined
 } from '@ant-design/icons';

import { ProjectInfo } from '../interface/ProjectInterface';
import { calCompletionRate } from '../utils/Calculate';

const { Meta } = Card;
const { confirm } = Modal;

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
const CardBox: React.FC<{ info: ProjectInfo, del: (id: number, name: string) => void, modify: (id: number, name: string, desc: string) => void, upload: () => void }> = ({ info, del, modify, upload }) => {
    let [percent, setPercent] = useState<number>(calCompletionRate(info.case));
    const [modalVisible, setModalVisible] = useState(false);

    const props: UploadProps = {
        name: 'file',
        action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
        headers: {
          authorization: 'authorization-text',
        },
        // onChange(info) {
        //   if (info.file.status !== 'uploading') {
        //     console.log(info.file, info.fileList);
        //   }
        //   if (info.file.status === 'done') {
        //     message.success(`${info.file.name} file uploaded successfully`);
        //   } else if (info.file.status === 'error') {
        //     message.error(`${info.file.name} file upload failed.`);
        //   }
        // },
    };

    const showModal = () => {
        console.log(111)
        setModalVisible(true);
        <Upload {...props}>
            <Button>
                <UploadOutlined /> 选择文件
            </Button>
        </Upload>
    };

    const handleOk = async () => {
        setModalVisible(false);
    };

    const handleCancel = () => {
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
            <Menu.Item key="func" onClick={() => upload()}>
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

    const uploadModal = (
        <Modal
            title="上传功能测试用例文件"
            visible={modalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <Upload beforeUpload={() => {
                return false;
            }}
            >
                <Button>
                    <UploadOutlined /> 选择文件
                </Button>
            </Upload>
        </Modal>
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
                // loading={true}
            >
                <Meta
                    title={info.project_name}
                    description={info.project_desc}
                />
                <Flex vertical  gap="middle">
                    <Progress percent={percent} strokeColor={twoColors} />
                </Flex>
                <Tooltip title="用例数量">
                    <span>用例数量: {info.case.all_case}</span>
                </Tooltip>
            </Card>
    );
}

export default CardBox;
