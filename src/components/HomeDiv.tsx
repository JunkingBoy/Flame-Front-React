import { useEffect, useState } from "react";
import { homeHeaderStyle, homeContentStyle, homeContentRightStyle, homeHeaderContentStyle, homeRightStyleInlineTop, homeRightStyleInlineUnder } from "../pages/Home.module";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
  } from "recharts";
  import { Typography } from 'antd';

import { UserProBugData, UserCareerData } from "../interface/UserInterface";
import { HeaderDataProps } from "../interface/MenuInterface";
import { ExtractProToPie } from "../interface/ExtractInterface";
import { ProportionInfo, UserCareerPercent } from "../interface/ProportionInterface";
import { ProgramInfo, ProgramBugDetail, BugDetail } from "../interface/ProgramInterface";

import { HeaderSider } from "./Menu";
import { Pie } from "./PieBox";
import { HeaderContentData } from "./HeaderContentData";
import { RightRadar } from "./Radar";
import { SlefFunnel } from "./FunneSlef";

import { extractPieData, extractPieDataToProData, extractFunnelData } from "../utils/Extract";
import { calProportion, calPercent } from "../utils/Calculate";

const { Title } = Typography;

const HomeHeaderDiv: React.FC<HeaderDataProps> = ({ programNameList, pagePieDataObj }) => {
    let [currentPro, setCurrentPro] = useState<string>('');
    let [currentPieData, setCurrentPieData] = useState<ExtractProToPie[]>([]);
    let [currentContentData, setCurrentContentData] = useState<ProportionInfo>({proProgramName: '', data: []});
    let [currentContentNameData, setCurrentContentNameData] = useState<ProgramInfo>({programName: '', allBug: 0, finishBug: 0, unWorkBug: 0, isNotBug: 0});

    useEffect(() => {
        if (currentPro === undefined || currentPro === '') {
            let firstPagePieData: ExtractProToPie[] = extractPieData(programNameList[0], pagePieDataObj);
            let firstPro: ProportionInfo = calProportion(programNameList[0], pagePieDataObj);
            let firstNameInfo: ProgramInfo = extractPieDataToProData(programNameList[0], pagePieDataObj);
            setCurrentPieData(firstPagePieData);
            setCurrentContentData(firstPro);
            setCurrentContentNameData(firstNameInfo);
        } else {
            let firstPagePieData: ExtractProToPie[] = extractPieData(currentPro, pagePieDataObj);
            let firstPro: ProportionInfo = calProportion(currentPro, pagePieDataObj);
            let firstNameInfo: ProgramInfo = extractPieDataToProData(currentPro, pagePieDataObj);
            setCurrentPieData(firstPagePieData);
            setCurrentContentData(firstPro);
            setCurrentContentNameData(firstNameInfo);
        }
    }, [currentPro, programNameList]);

    const headerMenuClick = (proName: string) => {
        setCurrentPro(proName);
    }

    return (
        <div style={homeHeaderStyle}>
            <HeaderSider programNameList={programNameList} onProClick={headerMenuClick} />
            <div style={homeHeaderContentStyle}>
                <Pie data={currentPieData} />
                <HeaderContentData proportionData={currentContentData} nameData={currentContentNameData} />
            </div>
        </div>
    );
}

/**
 * @description 绘出平面直角坐标系柱状图
 * CartesianGrid组件:
 * 绘制直角坐标系的网格,strokeDasharray="3 3"定义了网格线为虚线样式,每个实线段3px,之后紧跟3px的空白.
 * XAxis组件:
 * x轴相关内容,datakey代表x轴数据对应的键名.tick={true}表示显示刻度线
 * YAxis组件:
 * 简单y轴组件.没有显示数据范围
 * Tooltip组件:
 * 提示框功能,当用户点击条形时（由trigger="click"定义）显示详细信息.
 * shared={false}意味着每次只显示被点击条形的数据详情
 * Bar组件:
 * 两个条形系列,分别对应allBug和finishBug数据键.
 * 它们共享同一个堆叠标识stackId='a',意味着这两个系列会堆叠显示.
 * fill属性设置了条形的颜色
 * @param pagedata
 * @returns null
 */
const HomeContentDiv: React.FC<{ pagedata: UserProBugData[] }> = ({ pagedata }) => {
    return (
        <div style={homeContentStyle}>
            <Title level={4} style={{ textAlign: 'center' }}>近七日Bug数量分析</Title>
            <BarChart
                width={850}
                height={500}
                data={pagedata}
                margin={{
                    top: 30,
                    right: 5,
                    left: 5,
                    bottom: 20,
                }}
                reverseStackOrder
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey="datetime"
                    tick={true}
                />
                <YAxis />
                <Tooltip shared={false} trigger="hover" />
                <Legend />
                <Bar dataKey="allBug" stackId='a' fill="#8884d8" />
                <Bar dataKey="finishBug" stackId='a' fill="#82ca9d" />
            </BarChart>
        </div>
    );
}

const homeRightInlineCss: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    width: '320px',
    height: '185px'
}

const HomeRightDiv: React.FC<{ user: string, radarData: UserCareerData[], allProList: string[], proDetailData: ProgramBugDetail[] }> = ({ user, radarData, allProList, proDetailData }) => {
    let [currentPro, setCurrentPro] = useState<string>('');
    let [currentProUnderData, setCurrentProUnderData] = useState<BugDetail[]>([]);
    let [dataPercent, setDataPercent] = useState<UserCareerPercent>();

    useEffect(() => {
        if (currentPro === undefined || currentPro === '') {
            let funnelData: BugDetail[] = extractFunnelData(allProList[0], proDetailData);
            setCurrentProUnderData(funnelData);
        } else {
            let funnelData: BugDetail[] = extractFunnelData(currentPro, proDetailData);
            setCurrentProUnderData(funnelData);
        }
        let response: UserCareerPercent = calPercent(radarData);
        setDataPercent(response);
    }, [currentPro, radarData, allProList]);

    const headerMenuClick = (proName: string) => {
        setCurrentPro(proName);
    }

    let showData = () => {
        if (dataPercent) {
            return (
                <div style={homeRightInlineCss}>
                    <div style={{ flex: '1', margin: '15px 0 0 20px' }}>
                        <p style={{ margin: '15px 15px', color: 'black' }}>生涯提交Bug数: {dataPercent.careerBugPush}</p>
                        <p style={{ margin: '15px 15px', color: '#237804' }}>生涯Bug命中率: {dataPercent.isBugPercent + "%"}</p>
                        <p style={{ margin: '15px 15px', color: '#36cfc9' }}>生涯Bug修复率: {dataPercent.repairBugPercent + "%"}</p>
                        <p style={{ margin: '15px 15px', color: 'black' }}>生涯需求补充数: {dataPercent.needCount}</p>
                        <p style={{ margin: '15px 15px', color: '#614700' }}>生涯用例/Bug覆盖率: {dataPercent.caseBugCover}</p>
                    </div>
                </div>
            );
        } else {
            return <></>
        }
    }

    return (
        <div style={homeContentRightStyle}>
            <div style={homeRightStyleInlineTop}>
                <RightRadar userName={user} data={radarData} />
                {showData()}
            </div>
            <div style={homeRightStyleInlineUnder}>
                <HeaderSider programNameList={allProList} onProClick={headerMenuClick} />
                <SlefFunnel funnelData={currentProUnderData} />
            </div>
        </div>
    );
}

export {HomeHeaderDiv, HomeContentDiv, HomeRightDiv}