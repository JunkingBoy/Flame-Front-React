import React, { useState } from 'react'

import { LoginRegisterChange } from './ButtonBox';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';

import { loginFormContainer, formDivLeft, formInputGroup } from './FormBox.module';

const FormBox: React.FC = () => {
    let [formBoxStyle, setFormBoxStyle] = useState(formDivLeft);
    let [logFormStyle, setLogFormStyle] = useState(formInputGroup);
    let [regFormStyle, setRegFormStyle] = useState(formInputGroup);
    let [isLogin, setIsLogin] = useState('log')

    const handlePositionChange = (newTop: string, newLeft: string, newLogFormLeft?: string, newRegFormLeft?: string) => {
        setFormBoxStyle(({...formBoxStyle, top: newTop, left: newLeft}));
        setLogFormStyle(({...logFormStyle, left: newLogFormLeft}));
        setRegFormStyle(({...regFormStyle, left: newRegFormLeft}));
    }

    const changeForm = (changeOrNot: string) => {
        setIsLogin(changeOrNot);
    }

    return (
        <div style={loginFormContainer}>
            <div style={formBoxStyle} onClick={() => handlePositionChange('0', '50%')}></div>
            <LoginRegisterChange onPositionChange={handlePositionChange} onChangeForm={changeForm} />
            {isLogin === 'log' ? <LoginForm formInputGroupStyle={logFormStyle} /> : <RegisterForm formInputGroupStyle={regFormStyle} onChangeForm={changeForm} />}
        </div>
    );
}

export { FormBox }
