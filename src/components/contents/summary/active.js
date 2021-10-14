import React, {useEffect, useState} from 'react'
import { LineChart, Line, ResponsiveContainer } from 'recharts';



const Active = () => {
    const [dataActive, setDataActive] = useState({});  //state
    const [dataActiveToltal, setDataActiveTotal] = useState({});
    const [dataActiveNew, setDataActiveNew] = useState({});
    const [dataActiveChart, setDataActiveChart] = useState([]);

    const fetchActive = () => {
        //fetch API
        fetch("http://localhost:5000/Active", {
            method: "GET",
        })
            .then((res) => res.json())
            .then((res) => {
                //set data to state
                setDataActive(res[0]);
                setDataActiveTotal(res[0]);
                setDataActiveNew(res[0]);
                setDataActiveChart(res[0].graph);
                // console.log(res[0].graph[3].confirmed) //bg infor
            })
            .catch((err) => { });
    };

    useEffect(() => {
        fetchActive()
    }, [])

    return (
        <div>
            <div className="card" style={{ textAlign: 'center', padding: '0px' }}>
                <div className="card-content">
                    <div className="content">
                        <p>{dataActive.province_name}</p>
                        <p>+{dataActiveNew.new}</p>
                        <p>{dataActiveToltal.old}</p>
                        <ResponsiveContainer width="100%" height={50}>
                            <LineChart width={300} height={100} data={dataActiveChart}>
                                <Line type="monotone" dataKey="confirmed" stroke="#483D8B" strokeWidth={2} dot={false} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Active
