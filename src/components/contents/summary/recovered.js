import React, { useEffect, useState} from 'react'
import { LineChart, Line, ResponsiveContainer } from 'recharts';



const Recovered = () => {

    const [dataRecovered, setDataRecovered] = useState({});  //state
    const [dataRecoveredToltal, setDataRecoveredTotal] = useState({});
    const [dataRecoveredNew, setDataRecoveredNew] = useState({});
    const [dataRecoveredChart, setDataRecoveredChart] = useState([]);

    const fetchRecovered = () => {
        //fetch API
        fetch("http://localhost:5000/Recovered", {
            method: "GET",
        })
            .then((res) => res.json())
            .then((res) => {
                //set data to state
                setDataRecovered(res[0]);
                setDataRecoveredTotal(res[0]);
                setDataRecoveredNew(res[0]);
                setDataRecoveredChart(res[0].graph);
                // console.log(res[0].graph[3].confirmed) //bg infor
            })
            .catch((err) => { });
    };

    useEffect(() => {
        fetchRecovered()
    }, [])

    return (
        <div>
            <div className="card" style={{ textAlign: 'center', padding: '0px' }}>
                <div className="card-content">
                    <div className="content">
                        <p>{dataRecovered.province_name}</p>
                        <p>+{dataRecoveredNew.new}</p>
                        <p>{dataRecoveredToltal.old}</p>
                        <ResponsiveContainer width="100%" height={50}>
                            <LineChart width={300} height={100} data={dataRecoveredChart}>
                                <Line type="monotone" dataKey="confirmed" stroke="#228B22" strokeWidth={2} dot={false} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recovered
