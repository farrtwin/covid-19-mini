import React from 'react'
import ListProvince from './list_province'
import Active from './summary/active'
import Confirmed from './summary/confirmed'
import Deceased from './summary/deceased'
import Recovered from './summary/recovered'
import Tested from './summary/tested'
import Vaccine from './summary/vaccine'
import SummaryMonth from './summary_month'


const Content = () => {
    return (
        <div className="container" style={{marginTop:"12px"}}>
            <div className="columns is-desktop">
                <div className="column is-8">
                    <div className="columns is-desktop">
                        <div className="column is-2"><Confirmed/></div>
                        <div className="column is-2"><Active/></div>
                        <div className="column is-2"><Recovered/></div>
                        <div className="column is-2"><Deceased/></div>
                        <div className="column is-2"><Tested/></div>
                        <div className="column is-2"><Vaccine/></div>
                    </div>
                    <div className="columns">
                        <div className="column is-12"><ListProvince/></div>
                        
                    </div>
                </div>

                <div className="column is-4"><SummaryMonth/></div>
            </div>


        </div>
    )
}

export default Content
