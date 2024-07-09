import React, { useContext, useState, useEffect } from "react";
import { MultiButton } from '../MultiButton'
import { Link, useParams } from 'react-router-dom'
import { Context } from '../../store/appContext'
import { MultiButtonNew } from "../MultibuttonNew";


export const CardAdminStudent = ({ name, id, last_name, student_id }) => {
    const { store, actions } = useContext(Context);

    const [isModalStudentOpen, setIsModalStudentOpen] = useState(false)

    useEffect(() => {
        // actions.getSingleProfessorDescription()
    }, [])

    const handleStudentCourses = (studentId) => {
        actions.getRegisteredCourses(studentId)
    }

    console.log(store.getRegisteredCourses)

    return (
        <div className="cardSize border" key={id} id={id} style={{ width: '14rem', borderRadius: '15px', height: '20rem', boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' }}>
            <div className="container d-flex justify-content-end mt-2" data-bs-toggle="modal" data-bs-target="#exampleStudentModal" onClick={() => {
                setIsModalStudentOpen(!isModalStudentOpen)
                handleStudentCourses(student_id)
            }}>
                <MultiButtonNew text='Ver mas' color='purple' width='80' BType='button' />
            </div>
            <div className="img container card-img">
                <img src="https://i.imgur.com/qTL6olW.png" className="card-img-top" alt="..." style={{ padding: '30px', objectFit: 'cover' }} />
            </div>
            <div className="card-body">
                <p className="card-title fs-6 mediumWeight text-center">{name} {last_name}</p>
            </div>
            <div className="modal fade" id="exampleStudentModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ borderRadius: '15px', border: '1px solid #5751e1' }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 portraitSecundaryColor mediumWeight" id="exampleModalLabel">{name} {last_name}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => {
                                setIsModalStudentOpen(!isModalStudentOpen)
                            }}></button>
                        </div>
                        <div className="modal-body">
                            <div className="input-group">
                                <span className="input-group-text mediumWeight portraitSecundaryColor" style={{ borderRadius: '15px 0px 0px 15px' }}>Cursos inscritos:</span>
                                <input type='text' className="form-control" aria-label="With input type='text'" style={{ borderRadius: '0px 15px 15px 0px' }} value="Aquí van los cursos registrados"></input>
                            </div>
                        </div>
                        {/* <div className="modal-footer">
                            <div className="button" onClick={() => { setIsModalOpen(!isModalOpen) }}>
                                <MultiButtonNew color="purple" text="Cerrar" width="100" Btype='button' />
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}