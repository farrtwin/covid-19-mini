import React, { useEffect, useState } from 'react'
import { LineChart, Line, ResponsiveContainer } from 'recharts';


const Deceased = () => {

    const [dataDeceased, setDataDeceased] = useState({});  //state
    const [dataDeceasedToltal, setDataDeceasedTotal] = useState({});
    const [dataDeceasedNew, setDataDeceasedNew] = useState({});
    const [dataDeceasedChart, setDataDeceasedChart] = useState([]);

    const fetchDeceased = () => {
        //fetch API
        fetch("http://localhost:5000/deceased", {
            method: "GET",
        })
            .then((res) => res.json())
            .then((res) => {
                //set data to state
                setDataDeceased(res[0]);
                setDataDeceasedTotal(res[0]);
                setDataDeceasedNew(res[0]);
                setDataDeceasedChart(res[0].graph);
                // console.log(res[0].graph[3].confirmed) //bg infor
            })
            .catch((err) => { });
    };

    useEffect(() => {
        fetchDeceased()
    }, [])

    return (
        <div>
            <div className="card" style={{ textAlign: 'center', padding: '0px' }}>
                <div className="card-content">
                    <div className="content">
                        <p>{dataDeceased.province_name}</p>
                        <p>+{dataDeceasedNew.new}</p>
                        <p>{dataDeceasedToltal.old}</p>
                        <ResponsiveContainer width="100%" height={50}>
                            <LineChart width={300} height={100} data={dataDeceasedChart}>
                                <Line type="monotone" dataKey="confirmed" stroke="#FFA500" strokeWidth={2} dot={false} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Deceased
