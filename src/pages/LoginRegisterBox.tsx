import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Layout } from 'antd';
import {
    loginOutSideContainer,
    loginAnimationContainer,
    s_s_t, s_s_r, s_s_b, s_s_l,
} from './Login.module';
import { FormBox } from './FormBox';

import './Login.module.css'

const LoginRegister: React.FC = () => {
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
