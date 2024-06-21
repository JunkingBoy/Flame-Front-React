import React, { useState } from 'react'

import { RegisterResponse } from '../interface/UserInterface';

import { register } from '../apis/UserApi';

import { checkInput } from '../utils/Check';

import { formInputField, formSubButton } from './FormBox.module';

interface LoginFormProps {
    formInputGroupStyle?: React.CSSProperties;
}

const RegisterForm: React.FC<LoginFormProps> = ({ formInputGroupStyle }) => {
    let [isBtnFocused, setIsBtnFocused] = useState(false);
    let [isPhoneInputFocused, setIsPhoneInputFocused] = useState(false);
    let [isPwdInputFocused, setIsPwdInputFocused] = useState(false);
    let [isConfPwdInputFocused, setIsConfPwdInputFocused] = useState(false);
    let [msg, setMsg] = useState('');

    const handlePhoneInputFocus = () => {
        setIsPhoneInputFocused(true);
    }

    const handlePhoneInputBlur = () => {
        setIsPhoneInputFocused(false);
    }

    const handlePwdInputFocus = () => {
        setIsPwdInputFocused(true);
    }

    const handlePwdInputBlur = () => {
        setIsPwdInputFocused(false);
    }

    const handleConfPwdInputFocus = () => {
        setIsConfPwdInputFocused(true);
    }

    const handleConfPwdInputBlur = () => {
        setIsConfPwdInputFocused(false);
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

    const phoneInputStyle = (isFocused: boolean) => ({
        ...formInputField,
        ...(isPhoneInputFocused ? focusField : {})
    });

    const pwdInputStyle = (isFocused: boolean) => ({
        ...formInputField,
        ...(isPwdInputFocused ? focusField : {})
    });

    const confPwdInputStyle = (isFocused: boolean) => ({
        ...formInputField,
        ...(isConfPwdInputFocused ? focusField : {})
    });

    const buttonStyle = {
        ...formSubButton,
        ...(isBtnFocused ? focusBtn : {}),
    };

    const registerSub = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // 阻止表单默认提交

        let usernameInput: HTMLInputElement = event.currentTarget.querySelector('input[type="text"]') as HTMLInputElement;
        let passwordInput: HTMLInputElement = event.currentTarget.querySelector('input[id="pwd"]') as HTMLInputElement;
        let confPasswordInput: HTMLInputElement = event.currentTarget.querySelector('input[id="confpwd"]') as HTMLInputElement;

        let username: string = usernameInput.value;
        let password: string = passwordInput.value;
        let confirmPassword: string = confPasswordInput.value;

        if (password === confirmPassword) {
            // let isValid: boolean = checkInput(username, password);
            // if (!isValid) {
            //     setMsg('请输入合法用户名或密码!');
            //     return;
            // }

            let numberUsername: number = parseInt(username, 10);

            try {
                console.log(numberUsername, password, confirmPassword);
                let response: RegisterResponse = await register(numberUsername, password, confirmPassword);

                if (response.status == 200) {
                    setMsg('注册成功!');
                } else {
                    setMsg('注册失败!' + response.status);
                }
            } catch (error) {
                setMsg('网络请求失败!');
            }
        } else {
            setMsg('两次输入密码不相同,请重新输入!');
        }
    }

    return (
        <form id='register' onSubmit={registerSub} style={formInputGroupStyle}>
            <input
                type="text"
                style={phoneInputStyle(isPhoneInputFocused)}
                placeholder='phone | 手机号'
                onFocus={handlePhoneInputFocus}
                onBlur={handlePhoneInputBlur}
                required
            />
            <input
                id='pwd'
                type='Password'
                style={pwdInputStyle(isPwdInputFocused)}
                placeholder='password | 密码'
                onFocus={handlePwdInputFocus}
                onBlur={handlePwdInputBlur}
                required
            />
            <input
                id='confpwd'
                type='Password'
                style={confPwdInputStyle(isConfPwdInputFocused)}
                placeholder='confirmPassword | 确认密码'
                onFocus={handleConfPwdInputFocus}
                onBlur={handleConfPwdInputBlur}
                required
            />
            <input
                type="submit"
                style={buttonStyle}
                value={'注册'}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        </form>
    );
}

export { RegisterForm }
