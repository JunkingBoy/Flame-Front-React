import React, { useState } from 'react';

import { formInputField, formSubButton } from './FormBox.module';

import { login } from '../apis/UserApi';

import { checkInput } from '../utils/Check';
import { LoginResponse } from '../interface/UserInterface';

interface LoginFormProps {
    formInputGroupStyle?: React.CSSProperties;
}

const LoginForm: React.FC<LoginFormProps> = ({ formInputGroupStyle }) => {
    let [isBtnFocused, setIsBtnFocused] = useState(false);
    let [isLogInputFocused, setIsLogInputFocused] = useState(false);
    let [isPwdInputFocused, setIsPwdInputFocused] = useState(false);
    let [msg, setMsg] = useState('');

    const handleLogInputFocus = () => {
        setIsLogInputFocused(true);
    }

    const handleLogInputBlur = () => {
        setIsLogInputFocused(false);
    }

    const handlePwdInputFocus = () => {
        setIsPwdInputFocused(true);
    }

    const handlePwdInputBlur = () => {
        setIsPwdInputFocused(false);
    }

    const handleFocus = () => {
        setIsBtnFocused(true);
    }

    const handleBlur = () => {
        setIsBtnFocused(false);
    }

    const focusField: React.CSSProperties = {
        borderLeft: '2px solid transparent',
        borderBottom: '2px solid transparent',
        animation: 'animINP 5s linear infinite,animBTN 5s linear infinite'
    }

    const focusBtn: React.CSSProperties = {
        background: '#57AAB4',
        color: '#fff',
        borderRadius: '30px',
        boxShadow: '0 0 5px #57AAB4, 0 0 25px #57AAB4, 0 0 50px #57AAB4, 0 0 100px #03e9f4'
    }

    const logInputStyle = (isFocused: boolean) => ({
        ...formInputField,
        ...(isLogInputFocused ? focusField : {})
    });

    const pwdInputStyle = (isFocused: boolean) => ({
        ...formInputField,
        ...(isPwdInputFocused ? focusField : {})
    });

    const buttonStyle = {
        ...formSubButton,
        ...(isBtnFocused ? focusBtn : {}),
    };

    const loginSub = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // 阻止表单默认提交

        let usernameInput: HTMLInputElement = event.currentTarget.querySelector('input[type="text"]') as HTMLInputElement;
        let passwordInput: HTMLInputElement = event.currentTarget.querySelector('input[type="Password"]') as HTMLInputElement;

        let username: string = usernameInput.value;
        let password: string = passwordInput.value;

        let isValid: boolean = checkInput(username, password);
        if (!isValid) {
            setMsg('请输入合法用户名或密码!');
            return;
        }

        try {
            let response: LoginResponse = await login(username, password);

            if (response.code == 200) {
                setMsg('登录成功!');
            } else {
                setMsg('登录失败!' + response.code);
            }
        } catch (error) {
            setMsg('网络请求失败!');
        }
    }

    return (
        <form id='login' onSubmit={loginSub} style={formInputGroupStyle}>
            <input 
                type="text"
                style={logInputStyle(isLogInputFocused)}
                placeholder='username | 用户名'
                onFocus={handleLogInputFocus}
                onBlur={handleLogInputBlur}
                required
            />
            <input
                id='pwd'
                type="Password"
                style={pwdInputStyle(isPwdInputFocused)}
                placeholder='password | 密码'
                required
                onFocus={handlePwdInputFocus}
                onBlur={handlePwdInputBlur}
            />
            <input
                type="submit"
                style={buttonStyle}
                value={'登录'}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        </form>
    );
}

export { LoginForm }
