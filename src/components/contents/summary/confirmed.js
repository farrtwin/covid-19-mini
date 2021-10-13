import React from 'react'
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 5000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 6000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 3000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 4180,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 2890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];


const Confirmed = () => {
    return (
        <div>
            <div className="card" style={{ textAlign: 'center', padding: '0px' }}>
                <div className="card-content">
                    <div className="content">
                        <p>Confirmed</p>
                        <p>+0</p>
                        <p>1.000</p>
                        <ResponsiveContainer width="100%" height={50}>
                            <LineChart width={300} height={100} data={data}>
                                <Line type="monotone" dataKey="uv" stroke="#B22222" strokeWidth={2} dot={false} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Confirmed
