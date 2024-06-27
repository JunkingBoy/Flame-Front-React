import React from 'react';
import { Typography } from 'antd';

import {
    mainDiv,
    inlineHeaderDiv,
    inlineContentDiv,
    inlineContentInlineDiv
} from './Project.module';

import ClickForm from './ClickForm';
import CardBox from './CardBox';

import SearchSelf from './Search';

const { Title } = Typography;

const headerLeft: React.CSSProperties = {
    width: '75%',
    height: '30%',
    textAlign: 'center'
}

const headerRight: React.CSSProperties = {
    width: '25%',
    height: '30%',
    textAlign: 'center'
}

const contentLeft: React.CSSProperties = {
    width: '75%',
    height: '70%'
}

const inlineContentLeft: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    width: '98%',
    height: '100%',
    margin: '20px 0 12px 20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)'
}

const contentRight: React.CSSProperties = {
    width: '25%',
    height: '70%',
}

const inlineContentRight: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    width: '85%',
    height: '100%',
    margin: '20px 0 12px 20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)'
}

const inlineContentInlineLeft: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
}

const Project: React.FC = () => {
    return (
        <div style={mainDiv}>
            <div style={inlineHeaderDiv}>
                <div style={headerLeft}>
                    <Title level={3} style={{ color: 'black' }}>新建项目</Title>
                </div>
                <div style={headerRight}>
                    <SearchSelf />
                </div>
            </div>
            <div style={inlineContentDiv}>
                <div style={inlineContentInlineDiv}>
                    <div style={contentLeft}>
                        <div style={inlineContentLeft}>
                            <div style={inlineContentInlineLeft}>
                                <div style={{ width: '85%', height: '100%' }}>
                                    <Title level={5} style={{ margin: '25px 0 12px 20px', color: 'black'}}>我的项目</Title>
                                </div>
                                {/* 开发上传组件 */}
                                <div style={{ width: '15%', height: '100%' }}>
                                    <ClickForm />
                                </div>
                            </div>
                            <CardBox />
                            <div>3</div>
                        </div>
                    </div>
                    <div style={contentRight}>
                        <div style={inlineContentRight}>
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project
