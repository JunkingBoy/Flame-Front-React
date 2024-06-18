import React from 'react'
import { Row, Col, Card, Statistic } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';

import { ProportionInfo } from '../interface/ProportionInterface';
import { ProgramInfo } from '../interface/ProgramInterface';

const outContainerCss: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '536px',
    height: '178px'
}
 
const firstInlineCss: React.CSSProperties = {
    width: '168px',
    height: '178px'
}

const secondInlineCss: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    width: '368px',
    height: '178px'
}

const HeaderContentData: React.FC<{ proportionData: ProportionInfo, nameData: ProgramInfo }> = ({ proportionData, nameData }) => {
    let { proProgramName, data } = proportionData;
    let { programName, allBug, finishBug, unWorkBug, isNotBug } = nameData;

    let bugFix: number = data[0]?.proportion || 0;
    let bugHit: number = data[1]?.proportion || 0;

    return (
        <div style={outContainerCss}>
            <div style={firstInlineCss}>
                <Row gutter={16}>
                    <Col span={24}>
                        <Card bordered={false} style={{ display: 'flex', flexDirection: 'column' }}>
                            <Statistic 
                                title="项目Bug修复率"
                                value={bugFix}
                                precision={2}
                                valueStyle={{ color: '#3f8600' }}
                                prefix={<ArrowUpOutlined  />}
                                suffix="%"
                            />
                            <Statistic 
                                title="项目Bug命中率"
                                value={bugHit}
                                precision={2}
                                valueStyle={{ color: '#3f8600' }}
                                prefix={<ArrowUpOutlined />}
                                suffix="%"
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
            <div style={secondInlineCss}>
                <div style={{ flex: '1', margin: '15px 0 0 20px' }}>
                    <p style={{ margin: '12px 15px', color: 'black' }}>项目名称: {programName}</p>
                    <p style={{ margin: '12px 15px', color: finishBug > allBug ? '#cf1322' : '#9254de' }}>项目Bug数量: {allBug}</p>
                    <p style={{ margin: '12px 15px', color: '#237804' }}>已修复Bug数量: {finishBug}</p>
                    <p style={{ margin: '12px 15px', color: '#ad2102' }}>未修复Bug数量: {unWorkBug}</p>
                    <p style={{ margin: '12px 15px', color: '#10239e' }}>非Bug数量: {isNotBug}</p>
                </div>
            </div>
        </div>
    );
}

export { HeaderContentData }
