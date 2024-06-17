import { useEffect, useState } from "react";
import { homeHeaderStyle, homeContentStyle, homeContentRightStyle, homeHeaderContentStyle } from "../pages/Home.module";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
  } from "recharts";

import { UserProBugData } from "../interface/UserInterface";
import { HeaderDataProps } from "../interface/MenuInterface";
import { ExtractProToPie } from "../interface/ExtractInterface";

import { HeaderSider } from "./Menu";
import { HeaderContentPie } from "./HeaderContentPie";

import { extractPieData } from "../utils/Extract";

const HomeHeaderDiv: React.FC<HeaderDataProps> = ({ programNameList, pagePieDataObj }) => {
    let [currentPro, setCurrentPro] = useState<string>('');
    let [currentPieData, setCurrentPieData] = useState<ExtractProToPie[]>([]);

    useEffect(() => {
        let firstPagePieData: ExtractProToPie[] = extractPieData(currentPro, pagePieDataObj);
        setCurrentPieData(firstPagePieData);
    }, [currentPro]);

    const headerMenuClick = (proName: string) => {
        setCurrentPro(proName);
    }

    return (
        <div style={homeHeaderStyle}>
            <HeaderSider programNameList={programNameList} onProClick={headerMenuClick} />
            <div style={homeHeaderContentStyle}>
                <HeaderContentPie data={currentPieData} />
                <div>Column 3</div>
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
            <BarChart
                width={850}
                height={500}
                data={pagedata}
                margin={{
                    top: 80,
                    right: 5,
                    left: 5,
                    bottom: 0,
                }}
                reverseStackOrder
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey="datetime"
                    tick={true}
                />
                <YAxis />
                <Tooltip shared={false} trigger="click" />
                <Legend />
                <Bar dataKey="allBug" stackId='a' fill="#8884d8" />
                <Bar dataKey="finishBug" stackId='a' fill="#82ca9d" />
            </BarChart>
        </div>
    );
}

const HomeRightDiv: React.FC = () => {
    return (
        <div style={homeContentRightStyle}>

        </div>
    );
}

export {HomeHeaderDiv, HomeContentDiv, HomeRightDiv}