import React, { useEffect, useState } from 'react'
import { LineChart, Line, ResponsiveContainer } from 'recharts';



const Vaccine = () => {

    const [dataVaccine, setDataVaccine] = useState({});  //state
    const [dataVaccineToltal, setDataVaccineTotal] = useState({});
    const [dataVaccineNew, setDataVaccineNew] = useState({});
    const [dataVaccineChart, setDataVaccineChart] = useState([]);

    const fetchVaccine = () => {
        //fetch API
        fetch("http://localhost:5000/vaccine_dose_administration", {
            method: "GET",
        })
            .then((res) => res.json())
            .then((res) => {
                //set data to state
                setDataVaccine(res[0]);
                setDataVaccineTotal(res[0]);
                setDataVaccineNew(res[0]);
                setDataVaccineChart(res[0].graph);
                // console.log(res[0].graph[3].confirmed) //bg infor
            })
            .catch((err) => { });
    };

    useEffect(() => {
        fetchVaccine()
    }, [])
    return (
        <div>
            <div className="card" style={{ textAlign: 'center', padding: '0px' }}>
                <div className="card-content">
                    <div className="content">
                        <p>{dataVaccine.province_name}</p>
                        <p>+{dataVaccineNew.new}</p>
                        <p>{dataVaccineToltal.old}</p>
                        <ResponsiveContainer width="100%" height={50}>
                            <LineChart width={300} height={100} data={dataVaccineChart}>
                                <Line type="monotone" dataKey="confirmed" stroke="#800080" strokeWidth={2} dot={false} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vaccine
