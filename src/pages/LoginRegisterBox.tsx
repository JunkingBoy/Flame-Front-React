import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { Layout, Form, Input, Button } from 'antd';
import {
    loginOutSideContainer,
    loginAnimationContainer,
    s_s_t, s_s_r, s_s_b, s_s_l,
} from './Login.module';
import { formDivTButton } from './ButtonBox.module';
import { login } from '../apis/UserApi';
import { error } from 'console';
import { LoginResponse } from '../interface/UserInterface';

import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';
import { FormBox } from './FormBox';

import './Login.module.css'

const { Content } = Layout;

const LoginRegister: React.FC = () => {
    let [loginMessage, setLoginMessage] = useState<string | null>(null);
    let [isLogin, setIsLogin] = useState(true);
    // let [aesData, setAES] = useState<string | null>(null);
    let [styles, setStyles] = useState({
        loginLeft: '0px',
        registerLeft: '500px',
        btnLeft: '0px',
        logColor: '#252525',
        regColor: 'rgb(234, 234, 235)',
        afterLeft: '50%',
        afterTop: '0'
    });

    let navigate = useNavigate(); // hoooks无类型

    let onFinish = async (values: any) => {
        // try {
            // let aes: any = await getAES();

            // setAES(aes.AESKey);

            // setEncryptionKey(aesData);

        //     let {username, password} = values;

        //     let response: LoginResponse = await login(username, password);

        //     if (response.status === 200) {
        //         //本地存储token
        //         const id = response.id.toString();
        //         const token = response.token;

        //         localStorage.setItem('user_id', id);
        //         localStorage.setItem('token', token);
        //         navigate('/home');
        //         setLoginMessage('Login Successful');
        //     }else{
        //         let errorMsg = response.data[0].message;
        //         setLoginMessage(errorMsg);
        //     }
        // }catch(error) {
        //     setLoginMessage('登录请求出错,请检查网络或稍后再试!');
        // }
    }

    const register = () => {
        setStyles({
            loginLeft: '-500px',
            registerLeft: '0px',
            btnLeft: '110px',
            logColor: 'rgb(234, 234, 235)',
            regColor: '#252525',
            afterLeft: '0',
            afterTop: '0'
        });
        setIsLogin(false);
    };

    const login = () => {
        setStyles({
            loginLeft: '0px',
            registerLeft: '500px',
            btnLeft: '0px',
            logColor: '#252525',
            regColor: 'rgb(234, 234, 235)',
            afterLeft: '50%',
            afterTop: '0'
        });
        setIsLogin(true);
    };


    return (
        <Layout style={loginOutSideContainer}>
            <div style={loginAnimationContainer}>
                <FormBox />
                <span style={s_s_t} />
                <span style={s_s_r} />
                <span style={s_s_b} />
                <span style={s_s_l} />
            </div>
        </Layout>
    );
}

export default LoginRegister;
