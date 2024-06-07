import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Layout, Form, Input, Button } from 'antd';
import { loginContainer, leftContainer, title } from './Login.module';
import { login } from '../apis/UserApi';
import { error } from 'console';
import { LoginResponse } from '../interface/UserInterface';

const { Content } = Layout;

const Login: React.FC = () => {
    let [loginMessage, setLoginMessage] = useState<string | null>(null);
    // let [aesData, setAES] = useState<string | null>(null);

    let navigate = useNavigate(); // hoooks无类型

    let onFinish = async (values: any) => {
        try {
            // let aes: any = await getAES();

            // setAES(aes.AESKey);

            // setEncryptionKey(aesData);

            let {username, password} = values;

            let response: LoginResponse = await login(username, password);

            if (response.status === 200) {
                //本地存储token
                const token = response.token;

                localStorage.setItem('token', token);
                navigate('/home');
                setLoginMessage('Login Successful');
            }else{
                let errorMsg = response.data[0].message;
                setLoginMessage(errorMsg);
            }
        }catch(error) {
            setLoginMessage('登录请求出错,请检查网络或稍后再试!');
        }
    }

    return (
        <Layout className='login-style' style={loginContainer}>
            
            <Content className='left-inline-style' style={leftContainer}>
                <Form
                    name='normal-login'
                    className='login-form'
                    initialValues={{remember: false}}
                    onFinish={onFinish}
                    style={title}
                >
                <Form.Item
                    name='username'
                    rules={[{ required: true, message: '用户名不能为空!' }]}
                >
                    <Input placeholder='Account | 用户名' autoComplete='username' />
                </Form.Item>
                <Form.Item
                    name='password'
                    rules={[{ required: true, message: '密码不能为空!' }]}
                >
                    <Input.Password placeholder='Password | 密码' autoComplete='password' />
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit' className='login-form-button' style={{width: '100%'}}>
                    登录
                    </Button>
                </Form.Item>
                <div style={{ textAlign: 'center', marginTop: '10px', marginBottom: '20px' }}>
                    <a href="/register" style={{ fontSize: '14px', color: '#1890ff' }}>没有账号？去注册</a>
                </div>
                </Form>
            </Content>
        </Layout>
    );
}

export default Login;
