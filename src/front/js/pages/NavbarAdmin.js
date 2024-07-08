import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogButton from "../component/LogButton";
import useAuth from "../component/frontAuth/useAuth";
import { useContext } from "react";
import { Context } from "../store/appContext";


export const NavbarAdmin = () => {
    const { store, actions } = useContext(Context)
    const { logout } = useAuth()

    return (
        <nav className="navbar navbar-expand-lg bg-white">
            <div className="container-fluid d-flex justify-content-around align-items-baseline">
                <div className="imagebox">
                    <>
                        <img className="logo" src="https://i.imgur.com/fkBV2BP.png" />
                    </>
                </div>
                <div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa-solid fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll fs-6">
                            <li>
                                <Link to="/homeadmin" className="text-decoration-none nav-link">
                                    <span className="me-2">Home</span>
                                </Link>
                            </li>
                            {/* <li className="nav-link">
                                <span className="me-4">Información personal</span>
                            </li> */}
                            <li>
                                <Link to="/registeredcourses" className="nav-link">
                                    <span className="me-2">Cursos registrados</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/professorspaymentregister" className="nav-link">
                                    <span className="me-2">IBAN profesores</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/professornextpayment" className="nav-link">
                                    <span className="me-2">Pago profesores</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/studentpayment" className="nav-link">
                                    <span className="me-2">Pago estudiantes</span>
                                </Link>
                            </li>
                        </ul>
                        <div className="ms-4">
                            <LogButton text="Salir" action={logout} />
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    );
};