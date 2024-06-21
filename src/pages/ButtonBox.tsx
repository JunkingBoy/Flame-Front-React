
import React, { useState } from 'react'

import { formDivTButton, btn, btnStyle } from './ButtonBox.module';

interface LoginRegisterChangeProps {
    onPositionChange: (newTop: string, newLeft: string, newLogFormLeft?: string, newRegFormLeft?: string) => void;
    onChangeForm: (formType: string) => void;
}

const LoginRegisterChange: React.FC<LoginRegisterChangeProps> = ({ onPositionChange, onChangeForm }) => {
    let [divBtn, setDivBtn] = useState(btn);
    let [logBtnSty, setLogBtnSty] = useState(btnStyle);
    let [regBtnSty, setRegBtnSty] = useState(btnStyle);

    const handleLogClickChange = () => {
        setDivBtn({...divBtn, left: '0px'});
    }

    const handleRegClickChange = () => {
        setDivBtn({...divBtn, left: '110px'});
    }

    const handleHeadBtnLogClickChange = () => {
        setLogBtnSty({...regBtnSty, color: '#252525'});
        setRegBtnSty({...logBtnSty, color: 'rgb(234, 234, 235)'});
    }

    const handleHeadBtnRegClickChange = () => {
        setLogBtnSty({...logBtnSty, color: 'rgb(234, 234, 235)'});
        setRegBtnSty({...regBtnSty, color: '#252525'});
    }
    
    const logClick = (id: string) => {
        const newFormBoxTop = '0px';
        const newFormBoxLeft = '50%';
        const newLoginFormLeft = '0px';
        const newRegisterFormLeft = '500px';
        onPositionChange(newFormBoxTop, newFormBoxLeft, newLoginFormLeft, newRegisterFormLeft);
        onChangeForm(id);
        handleLogClickChange();
        handleHeadBtnLogClickChange();
    }

    const regClick = (id: string) => {
        const newFormBoxTop = '0px';
        const newFormBoxLeft = '0px';
        const newLoginFormLeft = '-500px';
        const newRegisterFormLeft = '0';
        onPositionChange(newFormBoxTop, newFormBoxLeft, newLoginFormLeft, newRegisterFormLeft);
        onChangeForm(id);
        handleRegClickChange();
        handleHeadBtnRegClickChange();
    }

    return (
        <div style={formDivTButton}>
            <div style={divBtn}></div>
            <button id='log' type='button' style={logBtnSty} onClick={() => logClick('log')}>登录</button>
            <button id='reg' type='button' style={regBtnSty} onClick={() => regClick('reg')}>注册</button>
        </div>
    );
}

export { LoginRegisterChange }
