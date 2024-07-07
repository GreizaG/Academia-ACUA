import React from 'react'
import { MultiButton } from '../MultiButton'
import { Link } from 'react-router-dom'

export const CardAdminStudent = ({ name, id, last_name }) => {
    return (
        <div className="cardSize border" key={id} id={id} style={{ width: '14rem', borderRadius: '15px', height: '20rem', boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' }}>
            <div className="img container card-img">
                <img src="https://i.imgur.com/qTL6olW.png" className="card-img-top" alt="..." style={{ height: 'auto', padding: '30px' }} />
                <div className="card-body">
                    <p className="card-title fs-6 mediumWeight text-center">
                        {name} {last_name}
                    </p>
                </div>
            </div>
        </div>
    )
}