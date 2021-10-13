import React from 'react'
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 4200,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 3498,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 2028,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 6800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 4800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const Vaccine = () => {
    return (
        <div>
          <div className="card" style={{ textAlign: 'center', padding: '0px' }}>
                <div className="card-content">
                    <div className="content">
                        <p>Vaccine</p>
                        <p>+0</p>
                        <p>1.000</p>
                        <ResponsiveContainer width="100%" height={50}>
                            <LineChart width={300} height={100} data={data}>
                                <Line type="monotone" dataKey="pv" stroke="#800080" strokeWidth={2} dot={false} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vaccine
