import React, {useEffect, useState} from 'react'
import { LineChart, Line, ResponsiveContainer } from 'recharts';


const Confirmed = () => {
    const [dataConfirmed, setDataConfirmed] = useState({});  //state
    const [dataConfirmedToltal, setDataConfirmedTotal] = useState({});
    const [dataConfirmedNew, setDataConfirmedNew] = useState({});
    const [dataConfirmedChart, setDataConfirmedChart] = useState([]);

    const fetchConfirmed = () => {
        //fetch API
        fetch("http://localhost:5000/confirmed", {
            method: "GET",
        })
            .then((res) => res.json())
            .then((res) => {
                //set data to state
                setDataConfirmed(res[0]);
                setDataConfirmedTotal(res[0]);
                setDataConfirmedNew(res[0]);
                setDataConfirmedChart(res[0].graph);
                // console.log(res[0].graph[3].confirmed) //bg infor
            })
            .catch((err) => { });
    };

    useEffect(() => {
      fetchConfirmed()
    }, [])

    return (
        <div>
            <div className="card" style={{ textAlign: 'center', padding: '0px' }}>
                <div className="card-content">
                    <div className="content">
                        <p>{dataConfirmed.province_name}</p>
                        <p>+{dataConfirmedNew.new}</p>
                        <p>{dataConfirmedToltal.old}</p>
                        <ResponsiveContainer width="100%" height={50}>
                            <LineChart width={300} height={100} data={dataConfirmedChart}>
                                <Line type="monotone" dataKey="confirmed" stroke="#B22222" strokeWidth={2} dot={false} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Confirmed
