import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Layout, Form, Input, Button } from 'antd';
import { loginContainer, leftContainer, title } from './Login.module';
import { register } from '../apis/UserApi';
import { RegisterResponse } from '../interface/UserInterface';

const { Content } = Layout;

export default function Register() {
  let [registerMessage, setRegisterMessage] = useState<string | null>(null);
  let [emailMessage, setEmailMessage] = useState<string | null>(null);
  let [phoneMessage, setPhoneMessage] = useState<string | null>(null);

  let navigate = useNavigate();

  const onFinish = async (values: any) => {
    try {
      let { email, phone, password, confirmPassword } = values;

      // 正则匹配email内容和phone内容
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const phonePattern = /^\+\d{1,4}\d{1,14}$/;

      if (emailPattern.test(email)) {
        if (phonePattern.test(phone.toString())) {
          let response: RegisterResponse = await register(email, phone, password, confirmPassword)

          // console.log(response.data[0].message);

          if (response.status === 200) {
            console.log(response.data[0].message);
            navigate('/', { replace: true });
            setRegisterMessage('Register Successful');
          } else {
            let errorMsg: string = response.data[0].message;
            setRegisterMessage(errorMsg);
          }
        } else {
          setPhoneMessage('Invalid phone number format!');
        }
      } else {
        setEmailMessage('Invalid email format!');
      }
    }catch(error) {
      setRegisterMessage('登录请求出错,请检查网络或稍后再试!')
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
                name='email'
                rules={[{ required: true, message: '邮箱不能为空!' }]}
              >
                <Input placeholder='Email | 邮箱' autoComplete='email' />
              </Form.Item>
              <Form.Item
                name='phone'
                rules={[{ required: true, message: '手机号不能为空!' }]}
              >
                <Input placeholder='Phone | 手机号' autoComplete='phone' />
              </Form.Item>
              <Form.Item
                name='password'
                rules={[{ required: true, message: '密码不能为空!' }]}
              >
                <Input.Password placeholder='Password | 密码' autoComplete='password' />
              </Form.Item>
              <Form.Item
                name='confirmPassword'
                rules={[{ required: true, message: '确认密码不能为空!' }]}
              >
                <Input.Password placeholder='Confirm Password | 确认密码' autoComplete='confirmPassword' />
              </Form.Item>
              <Form.Item>
                <Button type='primary' htmlType='submit' className='register-form-button' style={{width: '100%'}}>
                  注册
                </Button>
              </Form.Item>
              <div style={{ textAlign: 'center', marginTop: '10px', marginBottom: '20px' }}>
                <a href="/" style={{ fontSize: '14px', color: '#1890ff' }}>已有账号？去登录</a>
              </div>
            </Form>
        </Content>
    </Layout>
  );
}
