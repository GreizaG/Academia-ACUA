import React, { useState } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { MultiButton } from "../component/MultiButton";
import { MultiButtonNew } from "../component/MultibuttonNew";
import { showNotification } from "../utils/ShowNotification";

export const NewCourse = () => {

    const navigate = useNavigate()
    const { store, actions } = useContext(Context)
    const [formData, setFormData] = useState({
        name: ""
    })

    // const flag = store.isProfessorCreated

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }))
    }

    const handleSubmit = async () => {
        // event.preventDefault();
        const isCreated = await actions.newCourse(formData)
        console.log(isCreated)
        if (isCreated) {
            showNotification("Nuevo curso creado con éxito")
            navigate("/homeadmin")
        } else {
            showNotification("Ocurrió un error al tratar de agregar un nuevo curso", "error")
        }
    }

    const handleAll = () => {
        const str = formData.name
        if (str.trim().length > 0) {
            handleSubmit()
        } else {
            showNotification("Debes agregar el nombre del curso", "error")
        }
    }

    return (
        <React.Fragment>
            <div className="d-flex flex-column justify-content-start align-items-center min-vh-100"
                style={{ backgroundColor: '#f8f9fa' }}>
                <div style={{ position: 'relative', width: '100%' }}>
                    <img src="https://i.postimg.cc/XJ784zpy/Whats-App-Image-2024-06-17-at-19-29-08.jpg"
                        alt="Jumbotron" className="img-fluid mb-3" style={{
                            width: '100%', maxHeight: '150px',
                            objectFit: 'cover'
                        }} />
                    <div style={{
                        position: 'absolute', top: '50%', left: '35%', transform: 'translate(-45%, -50%)',
                        color: 'black'
                    }}>
                        <h1>Registrar nuevo curso</h1>
                    </div>
                </div>
                <form className="mt-5 p-5 rounded shadow mb-5" style={{ backgroundColor: '#e9ecef' }}>
                    <div className="d-flex mb-3">
                        <div className="me-2 flex-fill">
                            <label className="form-label fs-4 mb-3" style={{ color: '#5751e1' }}>Introduzca nombre del nuevo curso</label>
                            <input className="form-control mb-3" placeholder="Nombre nuevo curso" name="name" value={formData.name} onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <Link to="/homeadmin" className="text-decoration-none">
                            <MultiButton color='purple' text='Volver' width='100' />
                        </Link>
                        <button type="button" class="btn btn-warning" id="multiButton" onClick={handleAll} style={{
                            backgroundColor: '#ffc224',
                            boxShadow: '4px 6px 0px #3d3d3d',
                            border: '1px solid #000000',
                            color: '#161439',
                            fontWeight: '600',
                            cursor: 'pointer',
                            width: '130px',
                            paddingBottom: '28px',
                        }}>Guardar</button>
                        {/* <Link to="/homeadmin" className="text-decoration-none">
                            <MultiButton color='purple' text='Guardar' width='100' onClick={handleSubmit} />
                        </Link> */}
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
};
