import React from 'react'
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 5400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 2398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 4800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 7908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 9800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 2800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 5300,
        amt: 2100,
    },
];

const Deceased = () => {
    return (
        <div>
         <div className="card" style={{ textAlign: 'center', padding: '0px' }}>
                <div className="card-content">
                    <div className="content">
                        <p>Deceased</p>
                        <p>+0</p>
                        <p>1.000</p>
                        <ResponsiveContainer width="100%" height={50}>
                            <LineChart width={300} height={100} data={data}>
                                <Line type="monotone" dataKey="pv" stroke="#FFA500" strokeWidth={2} dot={false} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Deceased
