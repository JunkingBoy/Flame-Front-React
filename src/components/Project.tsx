import React, { useEffect, useState } from 'react';
import { Typography } from 'antd';

import {
    mainDiv,
    inlineHeaderDiv,
    inlineContentDiv,
    inlineContentInlineDiv
} from './Project.module';

import { ProjectInfo } from '../interface/ProjectInterface';

import ClickForm from './ClickForm';
import CardBox from './CardBox';

import SearchSelf from './Search';
import { DataContainer } from '../utils/InterfaceClass';
import { getProjectInfo } from '../apis/Project';

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

/**
 * 初次进入该组件的时候应该去请求一遍card相关api.获取到card信息设置到Card对应的属性当中
 * 当新建项目的时候应该再次请求card信息api
 */
const Project: React.FC = () => {
    let [cardNum, setCardNum] = useState<number>(0);
    let [cardInfo, setCardInfo] = useState<ProjectInfo[]>([]);

    const handleSetProCount = async () => {
        let currentCount: number = cardNum;
        currentCount++;
        setCardNum(currentCount);
    }

    const fetchCardInfo = async () => {
        try {
            let response: DataContainer<ProjectInfo> = await getProjectInfo();

            if (response.code === 200) {
                let data: ProjectInfo[] = response.getSerializedData() as ProjectInfo[];
                setCardNum(data.length);
                setCardInfo(response.getSerializedData() as ProjectInfo[]);
            } else {
                console.log('fecth card info fail');
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() =>  {
        fetchCardInfo();
    }, [cardNum]);

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
                                <div style={{ width: '15%', height: '100%' }}>
                                    <ClickForm onProAdd={handleSetProCount} />
                                </div>
                            </div>
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                            {cardNum !== 0 && cardInfo.slice(0, 5).map((info, index) => (
                                <CardBox info={info} key={index} />
                            ))}
                            </div>
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
