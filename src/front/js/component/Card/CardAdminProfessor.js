import React, { useContext } from "react";
import { MultiButton } from '../MultiButton'
import { Link } from 'react-router-dom'
import { Context } from '../../store/appContext'
import { MultiButtonNew } from "../MultibuttonNew";

export const CardAdminProfessor = ({ name, id, last_name }) => {
    const { store, actions } = useContext(Context);

    return (
        <div className="cardSize border" key={id} id={id} style={{ width: '14rem', borderRadius: '15px', height: '20rem', boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' }}>
            <div className="container d-flex justify-content-end mt-2">
                <MultiButtonNew text='Ver mas' color='purple' width='80' BType='button' />
            </div>
            <div className="img container card-img">
                <img src="https://i.imgur.com/qTL6olW.png" className="card-img-top" alt="..." style={{ padding: '30px', objectFit: 'cover' }} />
            </div>
            <div className="card-body">
                <p className="card-title fs-6 mediumWeight text-center">{name} {last_name}</p>
            </div>
            {/* <div className="cardProfessor, me-3">
                <div className="card cardProff" style={{ borderRadius: '20px' }}>
                    <div className="container d-flex justify-content-end mt-2">
                        <MultiButton color='purple' text='Ver más' width='100' />
                    </div>
                    <img src="https://i.imgur.com/qTL6olW.png" className="card-img-top" alt="..." style={{ padding: '30px' }} />
                    <div className="card-body">
                        <p className="card-title fs-5 mediumWeight text-center">{name} {last_name}</p>
                    </div>
                </div>
            </div> */}
        </div>
    )
}