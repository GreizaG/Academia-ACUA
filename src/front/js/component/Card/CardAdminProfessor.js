import React, { useContext, useState, useEffect } from "react";
import { MultiButton } from '../MultiButton'
import { Link, useParams } from 'react-router-dom'
import { Context } from '../../store/appContext'
import { MultiButtonNew } from "../MultibuttonNew";


export const CardAdminProfessor = ({ name, id, last_name, years_of_experience, specialist_in, studies }) => {
    const { store, actions } = useContext(Context);

    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        // actions.getSingleProfessorDescription()
    }, [])

    const handleSingleProfessorDesc = (professorId) => {
        actions.getSingleProfessorDescription(professorId)
    }

    return (
        <div className="cardSize border" key={id} id={id} style={{ width: '14rem', borderRadius: '15px', height: '20rem', boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' }}>
            <div className="container d-flex justify-content-end mt-2" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => {
                setIsModalOpen(!isModalOpen)
                handleSingleProfessorDesc(id)
            }}>
                <MultiButtonNew text='Ver mas' color='purple' width='80' BType='button' />
            </div>
            <div className="img container card-img">
                <img src="https://i.imgur.com/qTL6olW.png" className="card-img-top" alt="..." style={{ padding: '30px', objectFit: 'cover' }} />
            </div>
            <div className="card-body">
                <p className="card-title fs-6 mediumWeight text-center">{name} {last_name}</p>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">{name} {last_name}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => {
                                setIsModalOpen(!isModalOpen)
                            }}></button>
                        </div>
                        <div className="modal-body">
                            <div class="input-group mb-2">
                                <span class="input-group-text">Años de experiencia:</span>
                                <textarea class="form-control" aria-label="With textarea" value={store.singleProfDescr[0]?.years_of_experience}></textarea>
                            </div>
                            <div class="input-group mb-2">
                                <span class="input-group-text">Especialista en:</span>
                                <textarea class="form-control" aria-label="With textarea" value={store.singleProfDescr[0]?.specialist_in}></textarea>
                            </div>
                            <div class="input-group">
                                <span class="input-group-text">Estudios realizados:</span>
                                <textarea class="form-control" aria-label="With textarea" value={store.singleProfDescr[0]?.studies}></textarea>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal" onClick={() => {
                                setIsModalOpen(!isModalOpen)
                            }}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}