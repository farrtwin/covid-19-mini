import React from 'react'
import ActiveChart from './components/active_chart'
import ConfirmedChart from './components/confirmed_chart'
import DeceasedChart from './components/deceased_chart'
import ReconveredChart from './components/reconvered_chart'
import TestedChart from './components/tested_chart'
import VaccineChart from './components/vaccine_chart'

const data = [
    { name: '1', pv: 456 },
    { name: '2', pv: 230 },
    { name: '3', pv: 345 },
    { name: '4', pv: 450 },
    { name: '5', pv: 321 },
    { name: '6', pv: 235 },
    { name: '7', pv: 267 },
    { name: '8', pv: -378 },
    { name: '9', pv: -210 },
    { name: '10', pv: -23 },
    { name: '12', pv: 45 },
    { name: '13', pv: 90 },
    { name: '14', pv: 130 },
    { name: '15', pv: 11 },
    { name: '16', pv: 107 },
    { name: '17', pv: 926 },
    { name: '18', pv: 653 },
    { name: '19', pv: 366 },
    { name: '20', pv: 486 },
    { name: '21', pv: 512 },
    { name: '22', pv: 302 },
    { name: '23', pv: 425 },
    { name: '24', pv: 467 },
    { name: '25', pv: -190 },
    { name: '26', pv: 194 },
    { name: '27', pv: 371 },
    { name: '28', pv: 376 },
    { name: '29', pv: 295 },
    { name: '30', pv: 322 },
    { name: '31', pv: 246 },

];

const SummaryMonth = () => {
    return (
        <div>
            <div className="select is-primary">
               
                <select>
                    <option>Month</option>
                    <option>Jan</option>
                    <option>Feb</option>
                    <option>March</option>
                </select>
                
            </div>

            <div className="column">

                <div className="columns">
                    <div className="column">
                        <ConfirmedChart confirmData={data} />
                    </div>
                </div>

                <div className="columns">
                    <div className="column">
                        <ActiveChart activeData={data} />
                    </div>
                </div>

                <div className="columns">
                    <div className="column">
                        <ReconveredChart reconveredData={data} />
                    </div>
                </div>
        
                <div className="columns">
                    <div className="column">
                        <DeceasedChart deceasedData={data} />
                    </div>
                </div>

                <div className="columns">
                    <div className="column">
                        <TestedChart testedData={data} />
                    </div>
                </div>

                <div className="columns">
                    <div className="column">
                        <VaccineChart vaccineData={data} />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default SummaryMonth
