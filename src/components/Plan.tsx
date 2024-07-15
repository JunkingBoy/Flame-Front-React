import React, { useEffect, useState } from 'react';
import {
    Button
} from 'antd';

import { planMainDiv } from './Plan.module';

import { DataContainer } from '../utils/InterfaceClass';
import { ProjectInfo } from '../interface/ProjectInterface';
import { getProjectInfo } from '../apis/Project';

import { PlanCard } from './CardBox';
import { CalendarSelf } from './Calendar';

const left: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    width: '20%',
    height: '100%',
    textAlign: 'center',
    margin: '15px 10px 15px 25px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)'
}

const middle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    width: '55%',
    height: '100%',
    textAlign: 'center',
    margin: '20px 0 12px 20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
    borderRadius: '8px'
}

const right: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    width: '25%',
    height: '100%',
    textAlign: 'center',
    margin: '20px 25px 12px 20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
    borderRadius: '8px'
}

const Plan: React.FC = () => {
    let [ planCardNum, setPlanCardNum ] = useState<number>(0);
    let [ planCardInfo, setPlanCardInfo ] = useState<ProjectInfo[]>([])

    const fetchCardInfo = async () => {
        try {
            let response: DataContainer<ProjectInfo> = await getProjectInfo();

            if (response.code === 200) {
                let data: ProjectInfo[] = response.getSerializedData() as ProjectInfo[];
                setPlanCardNum(data.length);
                setPlanCardInfo(response.getSerializedData() as ProjectInfo[]);
            } else {
                console.log('fecth card info fail');
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchCardInfo();
    }, [planCardNum]);

    return (
        <div style={planMainDiv}>
            <div style={left}>
                {planCardNum !== 0 && planCardInfo.slice(0, 5).map((info, index) => (
                    <PlanCard info={info} key={index} />
                ))}
            </div>
            <div style={middle}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '90%', height: '45%' }}>
                    <div style={{width: '85%', height: '85%'}}>
                        <div>计划列表</div>
                        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <Button>
                            删除
                            </Button>
                        </div>
                    </div>
                    <div style={{width: '85%', height: '15%'}}>
                        <div>用例列表</div>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
                            <Button>
                                新增用例
                            </Button>
                            <Button>
                                开始执行
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div style={right}>
                <div style={{display: 'flex', justifyContent: 'center', margin: '10px 10px 10px 10px'}}>
                    <CalendarSelf />
                </div>
                <div>2</div>
            </div>
        </div>
    );
}

export {
    Plan
}
