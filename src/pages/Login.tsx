import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Layout, Form, Input, Button } from 'antd';
// import { loginContainer, leftContainer, title } from './Login.module';
import {
    loginOutSideContainer,
    loginAnimationContainer,
    s_s_t, s_s_r, s_s_b, s_s_l,
    loginFormContainer,
    formDivT,
    formDivTButton,
    btn,
    btnStyle,
    formInputGroup,
    formInputField,
    formSubButton,
    formInputFieldFocus
} from './Login.module';
import { login } from '../apis/UserApi';
import { error } from 'console';
import { LoginResponse } from '../interface/UserInterface';

import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';

import './Login.module.css'

const { Content } = Layout;

const Login: React.FC = () => {
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
        <div style={loginOutSideContainer}>
            <div style={loginAnimationContainer}>
                <div style={loginFormContainer}>
                    <div style={formDivT}></div>
                    <div style={formDivTButton}>
                        <div style={{...btn, left: styles.btnLeft}}></div>
                        <button id='log' type='button' style={{ ...btnStyle, color: styles.logColor }} onClick={login}>登录</button>
                        <button id='reg' type='button' style={{ ...btnStyle, color: styles.regColor }} onClick={register}>注册</button>
                    </div>
                    {isLogin ? <LoginForm styles={styles} /> : <RegisterForm styles={styles} />}
                </div>
                <span style={s_s_t}></span>
                <span style={s_s_r}></span>
                <span style={s_s_b}></span>
                <span style={s_s_l}></span>
            </div>
        </div>
    );
}

export default Login;
