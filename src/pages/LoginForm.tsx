import React, { useState } from 'react';
import { 
    formInputField,
    formInputGroup,
    formSubButton
 } from './Login.module';

const LoginForm: React.FC<{ styles: any }> = ({ styles }) => {
    return (
        <div>
            <form id='login' style={{...formInputGroup, left: styles.loginLeft}}>
                <input 
                    type='text'
                    style={formInputField}
                    placeholder='User | 用户名'
                />
                <input
                    id='pwd'
                    type='Password'
                    style={formInputField}
                    placeholder='Password | 密码'
                />
                <input
                    type='submit'
                    style={formSubButton}
                    value='登录'
                    onFocus={(e) => {
                        e.currentTarget.style.background = '#57AAB4';
                        e.currentTarget.style.color = '#fff';
                        e.currentTarget.style.borderRadius = '30px';
                        e.currentTarget.style.boxShadow = '0 0 5px #57AAB4, 0 0 25px #57AAB4, 0 0 50px #57AAB4, 0 0 100px #03e9f4'
                    }}
                />
            </form>
        </div>
    );
}

export { LoginForm }
