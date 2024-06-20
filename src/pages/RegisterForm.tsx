import React from 'react'

import { 
    formInputGroup,
    formInputField,
    formSubButton
 } from './Login.module';

const RegisterForm: React.FC<{ styles: any }> = ({ styles }) => {
    return (
        <div>
            <form id='register' style={{...formInputGroup, left: styles.registerLeft}}>
                <input
                    type="text"
                    style={formInputField}
                    placeholder='Phone | 电话号码'
                    required
                />
                <input
                    id="pwd"
                    type='Password'
                    style={formInputField}
                    placeholder='Password | 密码'
                    required
                />
                <input
                    id="confpwd"
                    type='Password'
                    style={formInputField}
                    placeholder='ConfirmPassword | 确认密码'
                    required
                />
                <input
                    type='submit'
                    style={formSubButton}
                    value='注册'
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

export { RegisterForm }
