import React from 'react'
import { PieChart, Pie } from 'recharts';

import { ExtractProToPie } from '../interface/ExtractInterface';

const HeaderContentPie: React.FC<{ data: ExtractProToPie[] }> = ({ data }) => {
    console.log(data);
    return (
        <PieChart width={230} height={178}>
            <Pie data={data} dataKey='value' nameKey='name' cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
        </PieChart>
    );
}

export { HeaderContentPie }
