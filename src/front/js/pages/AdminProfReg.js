import React, { useState } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { MultiButton } from "../component/MultiButton";
import { showNotification } from "../utils/ShowNotification";
import { MultiButtonNew } from "../component/MultibuttonNew";
import { NavbarAdmin } from "./NavbarAdmin";

const AdminProfReg = () => {

    const navigate = useNavigate()
    const { store, actions } = useContext(Context)
    const [formData, setFormData] = useState({
        name: "",
        last_name: "",
        cardID_type: "",
        number_cardID: 0,
        email: "",
        phone_number: 0,
        password: ""
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
        const isCreated = await actions.newProfessor(formData)
        console.log(isCreated)
        if (isCreated) {
            actions.getProfessors()
            showNotification("Profesor creado con éxito")
            navigate("/homeadmin")
        } else {
            showNotification("Ocurrió un error al tratar de agregar un profesor", "error")
        }
    }

    const handleAll = () => {
        const strName = formData.name
        const strLastName = formData.last_name
        const id = formData.number_cardID
        const phone = formData.phone_number
        const strEmail = formData.email
        const strPass = formData.password

        if (strName.trim().length &&
            strLastName.trim().length &&
            id.length &&
            phone.length &&
            strEmail.trim().length &&
            strPass.trim().length > 0) {
            handleSubmit()
        } else {
            showNotification("Debes agregar toda la información solicitada", "error")
        }
    }

    return (
        <React.Fragment>
            <NavbarAdmin />
            <div className="d-flex flex-column justify-content-center align-items-center">
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
                        <h3>Registro de nuevo profesor</h3>
                    </div>
                </div>
                <form className="mt-5 p-5 mb-5 bg-white registerForm d-flex flex-column justify-content-center">
                    <h3 className="mb-3 mediumWeight portraitSecundaryColor text-center pb-4">Ingrese los datos</h3>
                    <div className="d-flex mb-3">
                        <div className="me-2 flex-fill">
                            <label className="form-label mediumWeight portraitSecundaryColor fs-6">Nombre</label>
                            <input className="form-control" placeholder="Nombre" name="name" value={formData.name} onChange={handleInputChange}
                                required style={{ borderRadius: '15px' }} />
                        </div>
                        <div className="ms-2 flex-fill">
                            <label className="form-label mediumWeight portraitSecundaryColor fs-6">Apellido</label>
                            <input className="form-control" placeholder="Apellido" name="last_name" value={formData.last_name} onChange={handleInputChange}
                                required style={{ borderRadius: '15px' }} />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label mediumWeight portraitSecundaryColor fs-6">Email</label>
                        <input type="email" className="form-control" placeholder="Email" name="email" value={formData.email} onChange={handleInputChange}
                            required style={{ borderRadius: '15px' }} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label mediumWeight portraitSecundaryColor fs-6">Número telefónico</label>
                        <input className="form-control" placeholder="Número telefónico" name="phone_number" value={formData.phone_number} onChange={handleInputChange}
                            required style={{ borderRadius: '15px' }} />
                    </div>
                    <div className="d-flex mb-3">
                        <div className="me-2 flex-fill">
                            <label className="form-label mediumWeight portraitSecundaryColor fs-6 mb-3">Tipo de identificación</label><br></br>
                            <select name="cardID_type" onChange={handleInputChange} style={{ borderRadius: '13px' }}>
                                <option value="value1" defaultValue disabled>-----------</option>
                                <option value="Cedula Naciona">Cedula Nacional</option>
                                <option value="DIMEX">DIMEX</option>
                                <option value="Pasaport">Pasaporte</option>
                            </select>

                            {/*<input className="form-control" placeholder="Tipo de identificación" name="cardID_type" value={formData.cardID_type} onChange={handleInputChange}*/}
                        </div>
                        <div className="ms-2 flex-fill">
                            <label className="form-label mediumWeight portraitSecundaryColor fs-6">Número de identificación</label>
                            <input className="form-control" placeholder="Número de identificación" name="number_cardID" value={formData.number_cardID} onChange={handleInputChange} required style={{ borderRadius: '13px' }} />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label mediumWeight portraitSecundaryColor fs-6">Contraseña</label>
                        <input type="password" className="form-control" placeholder="Contraseña" name="password" value={formData.password} onChange={handleInputChange} autoComplete="new-password" style={{ borderRadius: '13px' }} />
                    </div>
                    <div className="mb-4">
                        <label className="form-label mediumWeight portraitSecundaryColor fs-6">Confirmar contraseña</label>
                        <input type="password" className="form-control" placeholder="Confirmar contraseña" autoComplete="new-password" style={{ borderRadius: '13px' }} />
                    </div>
                    <div className=" container d-flex justify-content-between mb-3 gap-5 mt-3">
                        <Link to='/homeadmin'>
                            <MultiButtonNew color="purple" text="Atras" width="130" Btype='button' />
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
                        }}>Enviar</button>
                        {/* <Link className="text-decoration-none" to="/homeadmin"> */}
                        {/* <MultiButton color='purple' text='Guardar' width='200' /> */}
                        {/* </Link> */}
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
};

export default AdminProfReg;
