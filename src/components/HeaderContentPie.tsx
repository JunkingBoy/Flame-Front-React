import React from 'react'
import { PieChart, Pie, Cell } from 'recharts';

import { ExtractProToPie } from '../interface/ExtractInterface';

const HeaderContentPie: React.FC<{ data: ExtractProToPie[] }> = ({ data }) => {
    const colors: string[] = ['#82ca9d', '#ff4d4f', '#40a9ff'];

    return (
        <PieChart width={230} height={178}>
            <Pie data={data} dataKey='value' nameKey='name' cx="50%" cy="50%" outerRadius={50} fill="#8884d8" label>
                {
                    data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index]}/>
                      ))
                }
            </Pie>
        </PieChart>
    );
}

export { HeaderContentPie }
