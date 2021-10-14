import React, { useEffect, useState } from 'react'

const ListProvince = () => {
    //state array
    const [listOfProvince, setListOfProvince] = useState([]);
    // //state object
    // const [listOfProvince1, setListOfProvince1] = useState({});
    // //state number
    // const [listOfProvince2, setListOfProvince2] = useState();

    //function fetch
    const fetcCovidByProvinces = () => {
        //fetch API
        fetch("http://localhost:5000/covid_province", {
            method: "GET",
        })
            .then((res) => res.json())
            .then((res) => {
                //set data to state
                setListOfProvince(res);
            })
            .catch((err) => { });
    };

    //use function on start page
    useEffect(() => {
        //function name
        fetcCovidByProvinces();
    }, []);
    return (
        <div>
            <div className="card" style={{ textAlign: 'center', padding: '0px', overflow: 'auto' }}>
                <div className="card-content">
                    <div className="content">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>State/UT</th>
                                    <th>Confirmed</th>
                                    <th>Active</th>
                                    <th>Recovered</th>
                                    <th>Deceased</th>
                                    <th>Tested</th>
                                    <th>Vaccine Doses <br /> Administered</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    listOfProvince.map((h, i) => (
                                        <tr key={i + 1}>
                                            <td>{i + 1}</td>
                                            <td>{h.province_name}</td>
                                            <td>{h.confirmed}</td>
                                            <td>{h.active}</td>
                                            <td>{h.recovered}</td>
                                            <td>{h.deceased}</td>
                                            <td>{h.tested}</td>
                                            <td>{h.vaccine_dose}</td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default ListProvince
