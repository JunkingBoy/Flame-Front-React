import React from 'react'
import { FunnelChart, Tooltip, Funnel, LabelList } from 'recharts';
import { Typography } from 'antd';

import { BugDetail } from '../interface/ProgramInterface';

const { Title } = Typography;

const SlefFunnel: React.FC<{funnelData: BugDetail[]}> = ({ funnelData }) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Title level={4} style={{ textAlign: 'center' }}>项目Bug漏斗分析</Title>
            <FunnelChart width={330} height={530}>
                <Tooltip />
                <Funnel
                    dataKey="value"
                    data={funnelData}
                    isAnimationActive
                >
                    <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
                </Funnel>
            </FunnelChart>
        </div>
    );
} 

export { SlefFunnel }
