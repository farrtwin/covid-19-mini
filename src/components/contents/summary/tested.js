import React, { useEffect, useState } from 'react'
import { LineChart, Line, ResponsiveContainer } from 'recharts';



const Tested = () => {

    const [dataTested, setDataTested] = useState({});  //state
    const [dataTestedToltal, setDataTestedTotal] = useState({});
    const [dataTestedNew, setDataTestedNew] = useState({});
    const [dataTestedChart, setDataTestedChart] = useState([]);

    const fetchTested = () => {
        //fetch API
        fetch("http://localhost:5000/tested", {
            method: "GET",
        })
            .then((res) => res.json())
            .then((res) => {
                //set data to state
                setDataTested(res[0]);
                setDataTestedTotal(res[0]);
                setDataTestedNew(res[0]);
                setDataTestedChart(res[0].graph);
                // console.log(res[0].graph[3].confirmed) //bg infor
            })
            .catch((err) => { });
    };

    useEffect(() => {
        fetchTested()
    }, [])

    return (
        <div>
            <div className="card" style={{ textAlign: 'center', padding: '0px' }}>
                <div className="card-content">
                    <div className="content">
                        <p>{dataTested.province_name}</p>
                        <p>+{dataTestedNew.new}</p>
                        <p>{dataTestedToltal.old}</p>
                        <ResponsiveContainer width="100%" height={50}>
                            <LineChart width={300} height={100} data={dataTestedChart}>
                                <Line type="monotone" dataKey="confirmed" stroke="#663399" strokeWidth={2} dot={false} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tested
