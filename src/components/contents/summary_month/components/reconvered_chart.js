import React from 'react'
import {
    BarChart,
    Bar,

    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,

    ResponsiveContainer,
} from 'recharts';


const ReconveredChart = ({reconveredData}) => {
    return (
        <div>
            <div className="card">
                <div className="card-content" style={{ padding: '10px' }}>
                    <div className="content">
                    <p>Recovered</p>
                        <ResponsiveContainer width="100%" height={175}>
                            <BarChart
                                width={500}
                                height={300}
                                data={reconveredData}
                                margin={{
                                    top: 5,
                                    right: 0,
                                    left: 0,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" padding={{ left: 10, right: 10 }}/>
                                <YAxis />
                                <Tooltip />


                                <Bar dataKey="pv" fill="#228B22" />

                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReconveredChart
