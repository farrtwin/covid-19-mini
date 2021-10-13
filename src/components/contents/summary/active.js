import React from 'react'
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 4000,
        
    },
    {
        name: 'Page B',
        uv: 3000,
     
    },
    {
        name: 'Page C',
        uv: 2000,
      
    },
    {
        name: 'Page D',
        uv: 2780,
    
    },
    {
        name: 'Page E',
        uv: 1890,
     
    },
    {
        name: 'Page F',
        uv: 2390,
     
    },
    {
        name: 'Page G',
        uv: 3490,
    
    },
];

const Active = () => {
    return (
        <div>
            <div className="card" style={{ textAlign: 'center', padding: '0px' }}>
                <div className="card-content">
                    <div className="content">
                        <p>Active</p>
                        <p>+0</p>
                        <p>1.000</p>
                        <ResponsiveContainer width="100%" height={50}>
                            <LineChart width={300} height={100} data={data}>
                                <Line type="monotone" dataKey="uv" stroke="#483D8B" strokeWidth={2} dot={false} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Active
