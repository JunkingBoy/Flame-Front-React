import { homeHeaderStyle, homeContentStyle, homeContentRightStyle } from "../pages/Home.module";
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

const HomeHeaderDiv: React.FC = () => {
    return (
        <div style={homeHeaderStyle}>
            
        </div>
    );
}

const HomeContentDiv: React.FC<{ pagedata: UserProBugData[] }> = ({pagedata}) => {
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
                    dataKey="name"
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