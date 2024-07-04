import React, { useEffect, useState } from 'react';
import { 
    Typography,
    message,
    Modal,
    Form,
    Input,
    Upload
 } from 'antd';

import type { Descriptions, UploadProps } from 'antd';

import {
    mainDiv,
    inlineHeaderDiv,
    inlineContentDiv,
    inlineContentInlineDiv
} from './Project.module';

import { ProjectInfo } from '../interface/ProjectInterface';
import { DataContainer } from '../utils/InterfaceClass';
import { getProjectInfo, delPro, modifyPro } from '../apis/Project';

import ClickForm from './ClickForm';
import CardBox from './CardBox';

import { DateSelect, SelectButton } from './DateSelect';
import { HeaderSider } from './Menu';
import SearchSelf from './Search';
import { useForm } from 'antd/es/form/Form';
import { title } from 'process';

const { Title } = Typography;

const headerLeft: React.CSSProperties = {
    width: '75%',
    height: '30%',
    textAlign: 'center'
}

const headerRight: React.CSSProperties = {
    width: '25%',
    height: '30%',
    textAlign: 'center'
}

const contentLeft: React.CSSProperties = {
    width: '75%',
    height: '70%'
}

const inlineContentLeft: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    width: '98%',
    height: '100%',
    margin: '20px 0 12px 20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)'
}

const contentRight: React.CSSProperties = {
    width: '25%',
    height: '70%',
}

const inlineContentRight: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    width: '85%',
    height: '100%',
    margin: '20px 0 12px 20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)'
}

const inlineContentInlineLeft: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
}

const inilneContentDivThree: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%'
}

/**
 * 初次进入该组件的时候应该去请求一遍card相关api.获取到card信息设置到Card对应的属性当中
 * 当新建项目的时候应该再次请求card信息api
 * 删除项目时cardNum也会被改变
 * **解决异步问题.常用useEffect让组件重新渲染**
 */
const Project: React.FC = () => {
    let [cardNum, setCardNum] = useState<number>(0);
    let [cardInfo, setCardInfo] = useState<ProjectInfo[]>([]);
    let [projectInfo, setProjectInfo] = useState({id: 0, name: '', desc: ''})
    let [form] = useForm();

    const outSetPro = (name: string, desc: string) => {
        form.setFieldsValue({
            title: name,
            description: desc
        });
    }

    const handleSetProCount = async () => {
        let currentCount: number = cardNum;
        currentCount++;
        setCardNum(currentCount);
    };

    const handleDelete = (id: number, name: string) => {
        Modal.confirm({
            title: '确认删除?',
            content: `确定要删除项目"${name}"吗？`,
            okText: '确认',
            cancelText: '取消',
            onOk: async () => {
                try {
                    let delRes: DataContainer<any> = await delPro(id);
    
                    if (delRes.code === 200) {
                        message.success(`删除成功!`);
                        let cal: number = cardNum - 1;
                        setCardNum(cal);
                    } else {
                        message.error(delRes.msg || '删除项目时发生错误');
                    }
                } catch (error) {
                    message.error(`删除失败!`);
                }
            },
            onCancel() {
                // 可选：处理取消操作
            },
        });
    };

    const handleModify = (id: number, name: string, desc: string) => {
        setProjectInfo({id, name, desc});
        Modal.confirm({
            title: '修改项目信息',
            content: (
                <Form
                    layout="vertical"
                    form={form}
                    name='project_modify'
                    initialValues={{
                        title: name,
                        description: desc
                    }}
                    onFinish={async (values) => {
                        console.log("====" + values + "====");
                        await modify(id, values);
                        form.resetFields();
                    }}
                >
                    <Form.Item
                        name='title'
                        label='项目名称'
                        rules={[{ required: true, message: '请输入项目名称!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name='description'
                        label='项目描述'
                    >
                        <Input.TextArea maxLength={100} />
                    </Form.Item>
                </Form>
            ),
            okText: '修改',
            cancelText: '取消',
            onOk: () => form.submit(),
            onCancel: () => {form.resetFields();},
            destroyOnClose: true,
            keyboard: false
        });
    };

    const modify = async (id: number, values: any) => {
        try {
            let modifyRes: any = await modifyPro(id, values.title, values.description);

            if (modifyRes.code === 200) {
                message.info('修改成功');
                fetchCardInfo();
            } else {
                message.error(modifyRes.msg || '修改项目时发生错误');
            }
        } catch (error) {
            message.error('修改失败');
        }
    }

    const fetchCardInfo = async () => {
        try {
            let response: DataContainer<ProjectInfo> = await getProjectInfo();

            if (response.code === 200) {
                let data: ProjectInfo[] = response.getSerializedData() as ProjectInfo[];
                setCardNum(data.length);
                setCardInfo(response.getSerializedData() as ProjectInfo[]);
            } else {
                console.log('fecth card info fail');
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() =>  {
        fetchCardInfo();
        outSetPro(projectInfo.name, projectInfo.desc);
    }, [cardNum, projectInfo]);

    return (
        <div style={mainDiv}>
            <div style={inlineHeaderDiv}>
                <div style={headerLeft}>
                    <Title level={3} style={{ color: 'black' }}>新建项目</Title>
                </div>
                <div style={headerRight}>
                    <SearchSelf />
                </div>
            </div>
            <div style={inlineContentDiv}>
                <div style={inlineContentInlineDiv}>
                    <div style={contentLeft}>
                        <div style={inlineContentLeft}>
                            <div style={inlineContentInlineLeft}>
                                <div style={{ width: '85%', height: '100%' }}>
                                    <Title level={5} style={{ margin: '25px 0 12px 20px', color: 'black'}}>我的项目</Title>
                                </div>
                                <div style={{ width: '15%', height: '100%' }}>
                                    <ClickForm onProAdd={handleSetProCount} />
                                </div>
                            </div>
                            <div style={{display: 'flex', height: '100%', width: '100%'}}>
                            {cardNum !== 0 && cardInfo.slice(0, 5).map((info, index) => (
                                <CardBox info={info} key={index} del={handleDelete} modify={handleModify} />
                            ))}
                            </div>
                            <div style={inilneContentDivThree}>
                                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', height: '100%'}}>
                                    <div style={{ width: '65%', height: '100%' }}>
                                        <Title level={5} style={{ margin: '25px 0 12px 20px', color: 'black'}}>异常用例列表</Title>
                                    </div>
                                    <div style={{ width: '20%', height: '100%' }}>
                                        <DateSelect />
                                    </div>
                                    <div style={{ width: '10%', height: '100%' }}>
                                        <SelectButton />
                                    </div>
                                </div>
                                <div style={{display: 'flex', width: '100%', height: '100%'}}>
                                    {/* <HeaderSider /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={contentRight}>
                        <div style={inlineContentRight}>
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project
