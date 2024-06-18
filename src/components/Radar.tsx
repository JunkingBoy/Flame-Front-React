import React from 'react'
import { 
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
    Legend
 } from 'recharts';

import { UserCareerData } from '../interface/UserInterface';

const rightInlineRadarCss: React.CSSProperties = {
    width: '260px'
}

const RightRadar: React.FC<{ userName: string, data: UserCareerData[] }> = ({ userName, data }) => {
    return (
        <div style={rightInlineRadarCss}>
            <RadarChart outerRadius={60} width={250} height={185} data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 30000]} />
                <Radar name={userName} dataKey="A" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                <Legend />
            </RadarChart>
        </div>
    );
}

export {RightRadar}
