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
import { ListElectInvReg } from "../component/Card/ListElectInvReg";

export const ElectInvRegReg = () => {
    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.getElectronicInvoices()
    }, [])

    console.log(store.electronicinvoices.electinvs)

    return (
        <React.Fragment>
            <NavbarAdmin />
            <div className="container-fluid pb-5">
                <div className="d-flex align-content-center justify-content-center mb-3 mt-3 py-4 jumbo rounded-3">
                    <div className="container-fluid align-content-center">
                        <h4 className="py-2 ps-5 ms-5 fs-3 fw-bold">Información factura electrónica estudiantes</h4>
                    </div>
                </div>
                <div className="continer-fluid d-flex justify-content-center">
                    <div className="d-flex flex-row container justify-content-center">
                        <table className="table table-hover" style={{ width: '1200px' }}>
                            <thead>
                                <tr>
                                    <th className="text-center" scope="col">N°</th>
                                    <th className="text-center" >Estudiante</th>
                                    <th className="text-center" >Nombre factura</th>
                                    <th className="text-center" >Tipo de identificación</th>
                                    <th className="text-center" >N° de identificación</th>
                                    <th className="text-center" >Email</th>
                                    <th className="text-center" >N° Teléfono</th>
                                    <th className="text-center" >Provincia</th>
                                    <th className="text-center" >Canton</th>
                                    <th className="text-center" >Distrito</th>
                                </tr>
                            </thead>
                            <tbody>
                                {store.electronicinvoices?.electinvs && store.electronicinvoices?.electinvs.map((electronicInvoice, index) =>
                                (<ListElectInvReg name={electronicInvoice.name}
                                    student={`${electronicInvoice.student_id.name}` + ' ' + `${electronicInvoice.student_id.last_name}`}
                                    cardID_type={electronicInvoice.cardID_type} number_cardID={electronicInvoice.number_cardID}
                                    email={electronicInvoice.email} phone_number={electronicInvoice.phone_number}
                                    province={electronicInvoice.province} canton={electronicInvoice.canton} district={electronicInvoice.district}
                                    key={electronicInvoice.electronic_invoice_id} id={index + 1} />)
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="container-fluid d-flex my-3 justify-content-between">
                    <Link to="/studentpayment" className="text-decoration-none ms-5">
                        <MultiButton color='purple' text='Registrar próximo pago' width='220' />
                    </Link>
                    <Link to="/homeadmin" className="text-decoration-none me-5">
                        <MultiButton color='purple' text='Atrás' width='220' />
                    </Link>
                </div>
            </div>
        </React.Fragment>
    )
}