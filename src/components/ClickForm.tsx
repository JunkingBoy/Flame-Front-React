import React, { useState } from 'react';
import { Button, Form, Input, Modal } from 'antd';

import { createPro, getProjectInfo } from '../apis/Project';

import GetTemplate from './GetTemplate';

interface Values {
    title?: string;
    description?: string;
}

interface ProPromise {
    onProAdd: () => Promise<void>;
}

const clickFormCss: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%'
}

const ClickForm: React.FC<ProPromise> = ({ onProAdd }) => {
    let [form] = Form.useForm();
    let [formValues, setFormValues] = useState<Values>();
    let [open, setOpen] = useState(false);

    const onCreatePro = async (values: Values) => {
        try {
            let response: any = await createPro(values.title!, values.description!);
            if (response.code === 200) {
                setFormValues(values);
                setOpen(false);
                form.resetFields();
                await onProAdd();
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div style={clickFormCss}>
            <div style={{ width: '80%', height: '100%', margin: '20px 0 12px 20px' }}>
                <Button type="primary" onClick={() => setOpen(true)}>
                    添加项目
                </Button>
                <Modal
                    open={open}
                    title="新建项目"
                    okText="新建"
                    cancelText="取消"
                    okButtonProps={{ autoFocus: true, htmlType: 'submit' }}
                    onCancel={() => setOpen(false)}
                    destroyOnClose
                    maskClosable
                    modalRender={(dom) => (
                        <Form
                            layout="vertical"
                            form={form}
                            name="form_in_modal"
                            onFinish={(values) => onCreatePro(values)}
                        >
                            {dom}
                        </Form>
                    )}
                    >
                    <Form.Item
                        name="title"
                        label="项目名称"
                        rules={[{ required: true, message: '请输入项目名称!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item name="description" label="项目描述">
                        <Input.TextArea maxLength={100} />
                    </Form.Item>
                </Modal>
            </div>
            <div style={{ width: '80%', height: '100%', margin: '20px 0 12px 20px' }}>
                <GetTemplate />
            </div>
        </div>
    );
}

export default ClickForm;
