import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogButton from "../component/LogButton";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";
import { ListProfRegCourses } from "../component/Card/ListProfREgCourses";
import { NavbarAdmin } from "./NavbarAdmin";
import { ListRegisteredCourses } from "../component/Card/ListRegisteredCourses";
import { MultiButton } from "../component/MultiButton";
import { ListProfPayReg } from "../component/Card/ListProfPayReg";

export const ProfPayReg = () => {
    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.getProfessorsPayment()
    }, [])

    console.log(store.professorsPayment)

    return (
        <React.Fragment>
            <NavbarAdmin />
            <div className="container-fluid pb-5">
                <div className="d-flex align-content-center justify-content-center mb-3 mt-3 py-4 jumbo rounded-3">
                    <div className="container-fluid align-content-center">
                        <h4 className="py-2 ps-5 ms-5 fs-3 fw-bold">Información bancaria profesores</h4>
                    </div>
                </div>
                <div className="container d-flex flex-column justify-content-center bg-white registerForm" style={{ width: 'fit-content' }}>
                    <div className="d-flex flex-row container justify-content-center">
                        <table className="table table-hover" style={{ width: '55vw' }}>
                            <thead>
                                <tr>
                                    <th className="text-center" scope="col">N°</th>
                                    <th className="text-center" >Nombre profesor</th>
                                    <th className="text-center" >Método de pago</th>
                                    <th className="text-center" >Número de teléfono</th>
                                    <th className="text-center" >N° cuenta IBAN</th>
                                </tr>
                            </thead>
                            <tbody>
                                {store.professorsPayment && store.professorsPayment.map(professorPayment =>
                                    (<ListProfPayReg method={professorPayment.payment_method} professor={`${professorPayment.professor_id.name}` + ' ' + `${professorPayment.professor_id.last_name}`} phone={professorPayment.phone_number} iban={professorPayment.iban_account} key={professorPayment.new_course_id} id={professorPayment.professor_payment_id} />)
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div className="container-fluid d-flex my-3 justify-content-between">
                        <Link to="/homeadmin" className="text-decoration-none me-5">
                            <MultiButton color='purple' text='Atrás' width='120' />
                        </Link>
                        <Link to="/professorpayment" className="text-decoration-none ms-5">
                            <MultiButton color='purple' text='Registrar' width='120' />
                        </Link>
                    </div>
                </div>

            </div>
        </React.Fragment >
    )
}