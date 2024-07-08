import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogButton from "../component/LogButton";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { NavbarProfessor } from "./NavbarProfessor";
import "../../styles/home.css";
import { ListProfRegCourses } from "../component/Card/ListProfREgCourses";
import { ProfNextPay } from "./ProfNextPay";

export const HomeProfessor = () => {
    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.getProfessorCourses()
        actions.getSingleProfPay()
        actions.getProfNextPay()

    }, [])

    console.log(store.singleProfessor)
    console.log(store.singleProfessor.professor?.name)
    console.log(store.singleProfPay)
    console.log(store.singleProfPay.professor_payment?.payment_method)
    console.log(store.professorCourses)
    console.log(store.profNextPay.prof_next_pay?.date)

    return (
        <React.Fragment>
            <NavbarProfessor />
            <div className="container-fluid pb-5">
                <div className="d-flex align-content-center justify-content-center mb-3 mt-3 py-4 jumbo rounded-3">
                    <div className="container-fluid align-content-center">
                        <h4 className="py-2 ps-5 ms-5 fs-3 fw-bold">Cursos asignados</h4>
                    </div>
                </div>
                <div className="continer-fluid d-flex ps-5 ms-5">
                    <div className="cardProfessor" style={{ width: '18rem' }}>
                        <table className="table table-hover" style={{ width: '600px' }}>
                            <thead>
                                <tr>
                                    <th className="text-center" scope="col">N°</th>
                                    <th className="text-center" scope="col">Nombre del curso</th>
                                    <th className="text-center" scope="col">Nombre del estudiante</th>
                                </tr>
                            </thead>
                            <tbody>
                                {store.professorCourses?.professor_courses && store.professorCourses?.professor_courses.map((professorCourse, index) =>
                                    (<ListProfRegCourses course={professorCourse.course_name} student={`${professorCourse.student_name}` + ' ' + `${professorCourse.student_last_name}`} key={professorCourse.new_course_id} id={index + 1} />)
                                )}
                            </tbody>
                        </table>
                    </div>
                    {/* <div className="cardProfessor" style={{ width: '20rem' }}>
                        <div className="card cardProff" style={{ borderRadius: '20px' }}>
                            <img src="https://i.imgur.com/qTL6olW.png" className="card-img-top" alt="..." style={{ height: 'auto', padding: '30px' }} />
                            <div className="card-body">
                                <p className="card-title fs-5 mediumWeight text-center">Greiza García</p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-secondary" style={{ fontSize: '15px' }}>Curso: Guitarra eléctrica</li>
                                </ul>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="d-flex align-content-center justify-content-center mb-3 mt-3 py-4 jumbo rounded-3">
                    <div className="container-fluid align-content-center">
                        <h4 className="py-2 ps-5 ms-5 fs-3 fw-bold">Información próximo pago</h4>
                    </div>
                </div>
                <div className="continer-fluid d-flex ps-5 ms-5 my-5">
                    <div className="cardProfessor" style={{ width: '40rem' }}>
                        <div className="container d-flex card-body card cardProff" style={{ borderRadius: '20px' }}>
                            <table className="table table-borderless text-end">
                                <tr className="pb-4">
                                    <td className="text-secondary fs-4 fw-semibold">Fecha pago:</td>
                                    <td className="fw-lighter fs-4">{store.profNextPay.prof_next_payment?.date}</td>
                                </tr>
                                <tr className="pb-4">
                                    <td className="text-secondary fs-4 fw-semibold">Monto por hora:</td>
                                    <td className="fw-lighter fs-4">{store.profNextPay.prof_next_payment?.mount_per_hour}</td>
                                </tr>
                                <tr>
                                    <td className="text-secondary fs-4 fw-semibold">Cantidad de horas registradas:</td>
                                    <td className="fw-lighter fs-4">{store.profNextPay.prof_next_payment?.registered_hours}</td>
                                </tr>
                                <tr>
                                    <td className="text-secondary fs-4 fw-semibold">Total pago:</td>
                                    <td className="fw-lighter fs-4">{store.profNextPay.prof_next_payment?.total_payment}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="d-flex align-content-center justify-content-center mb-3 mt-3 py-4 jumbo rounded-3">
                    <div className="container-fluid align-content-center">
                        <h4 className="py-2 ps-5 ms-5 fs-3 fw-bold">Información Bancaria</h4>
                    </div>
                </div>
                <div className="continer-fluid d-flex ps-5 ms-5 my-5">
                    <div className="cardProfessor" style={{ width: '40rem' }}>
                        <div className="container d-flex card-body card cardProff" style={{ borderRadius: '20px' }}>
                            <table className="table table-borderless text-end">
                                <tr className="pb-4">
                                    <td className="text-secondary fs-4 fw-semibold">Forma de pago:</td>
                                    <td className="fw-lighter fs-4">{store.singleProfPay.professor_payment?.payment_method}</td>
                                </tr>
                                <tr className="pb-4">
                                    <td className="text-secondary fs-4 fw-semibold">N° IBAN</td>
                                    <td className="fw-lighter fs-4">{store.singleProfPay.professor_payment?.iban_account}</td>
                                </tr>
                                <tr>
                                    <td className="text-secondary fs-4 fw-semibold">Teléfono:</td>
                                    <td className="fw-lighter fs-4">{store.singleProfPay.professor_payment?.phone_number}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}