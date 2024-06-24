import React from 'react'
import { MultiButton } from '../MultiButton'
import { Link } from 'react-router-dom'

export const CardAdminStudent = ({ name, id, last_name }) => {
    return (
        <div className="cardProfessor me-3" style={{ width: '18rem' }}>
            <div className="card cardProff" style={{ borderRadius: '20px' }}>
                <img src="https://i.imgur.com/qTL6olW.png" className="card-img-top" alt="..." style={{ height: 'auto', padding: '30px' }} />
                <div className="card-body">
                    <p className="card-title fs-5 mediumWeight text-center">
                        {name} {last_name}
                    </p>
                </div>
            </div>
        </div>
    )
}