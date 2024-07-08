import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { showNotification } from "../utils/ShowNotification";
import useAuth from "../component/frontAuth/useAuth";
import { MultiButtonNew } from "../component/MultibuttonNew";

const FormStudent = () => {
    const { store, actions } = useContext(Context)
    const [isDisabled, setIsDisabled] = useState(true)
    const [studentData, setStudentData] = useState({})

    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: store.singleStudent.student?.name,
        last_name: store.singleStudent.student?.last_name,
        cardID_type: store.singleStudent.student?.cardID_type,
        number_cardID: store.singleStudent.student?.number_cardID,
        email: store.singleStudent.student?.email,
        phone_number: store.singleStudent.student?.phone_number,
        province: "",
        canton: "",
        district: ""
    })

    useEffect(() => {
        actions.getSingleStudent();
    }, [])

    // const flag = store.isProfessorCreated

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const isCreated = await actions.updateStudent(formData)
        console.log(isCreated)
        if (isCreated) {
            showNotification("Datos modificados con éxito")
            setIsDisabled(true)
            navigate("/homestudent")
        } else {
            showNotification("Ocurrió un error al tratar de modificar tu información", "error")
            // navigate('/homestudent')
        }
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center"
            style={{ backgroundColor: '#f8f9fa' }}>
            <div style={{ position: 'relative', width: '100%' }}>
                <img src="https://i.postimg.cc/XJ784zpy/Whats-App-Image-2024-06-17-at-19-29-08.jpg"
                    alt="Jumbotron" className="img-fluid mb-3" style={{
                        width: '100%', maxHeight: '150px',
                        objectFit: 'cover'
                    }} />
                <div style={{
                    position: 'absolute', top: '50%', left: '35%', transform: 'translate(-45%, -50%)',
                    color: '#5751e1'
                }}>
                    <h2>¡ Bienvenid@ a tu perfil !</h2>
                    <hr />
                    <h4 className="fw-lighter fst-italic">{store.singleStudent.student?.name} {store.singleStudent.student?.last_name}</h4>
                </div>
            </div>
            <form className="mt-4 p-4 mb-4 bg-white registerForm d-flex flex-column justify-content-center" onSubmit={handleSubmit}>
                <div className="headerForm d-flex flex-row justify-content-between">
                    <h3 className="mb-3 pb-2 mediumWeight text-center portraitSecundaryColor">Tu informacion personal</h3>
                    <div className="editOption p-1 mb-4 d-flex flex-row justify-content-center align-items-center gap-2" onClick={() => { setIsDisabled(false) }}>
                        <span className="mediumWeight  fs-6"> Editar </span>
                        <i class="fa-solid fa-pencil fs-6 "></i>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-lg-6 col-sm-12">
                        <label className="form-label mediumWeight portraitSecundaryColor">Nombre</label>
                        <input className="form-control" style={{ borderRadius: '15px', }} placeholder="Nombre" name="name" value={store.singleStudent.student?.name} onChange={handleInputChange} disabled={isDisabled} />
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <label className="form-label mediumWeight portraitSecundaryColor">Apellido</label>
                        <input className="form-control" style={{ borderRadius: '15px', }} placeholder="Apellido" name="last_name" value={store.singleStudent.student?.last_name} onChange={handleInputChange} disabled={isDisabled} />
                    </div>
                </div>
                {/* <div className="mb-3">
                    <label className="form-label">Fecha de nacimiento</label>
                    <div className="d-flex">
                        <input className="form-control me-2" placeholder="Día" style={{ maxWidth: '80px' }} onChange={handleInputChange} />
                        <input className="form-control me-2" placeholder="Mes" style={{ maxWidth: '100px' }} onChange={handleInputChange} />
                        <input className="form-control" placeholder="Año" style={{ maxWidth: '100px' }} onChange={handleInputChange} />
                    </div>
                </div> */}
                <div className="mb-3 row">
                    <div className="col-lg-6 col-sm-12">
                        <label className="form-label mediumWeight portraitSecundaryColor">Email</label>
                        <input className="form-control" style={{ borderRadius: '15px', }} placeholder="Email" name="email" value={store.singleStudent.student?.email} onChange={handleInputChange} disabled={isDisabled} />
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <label className="form-label mediumWeight portraitSecundaryColor">Número telefónico</label>
                        <input className="form-control" style={{ borderRadius: '15px', }} placeholder="Número telefónico" name="phone_number" value={store.singleStudent.student?.phone_number} onChange={handleInputChange} disabled={isDisabled} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-lg-6 col-sm-12">
                        <label className="form-label mb-3 mediumWeight portraitSecundaryColor">Tipo de identificación</label><br></br>
                        <select name="cardID_type" disabled={isDisabled} value={store.singleStudent.student?.cardID_type} onChange={handleInputChange} style={{ borderRadius: '15px', }} className="p-1">
                            <option value="value1" selected>-----------</option>
                            <option value="Cedula_Nacional">Cedula Nacional</option>
                            <option value="DIMEX">DIMEX</option>
                            <option value="Pasaporte">Pasaporte</option>
                        </select>
                        {/* <input className="form-control" placeholder="Tipo de identificación" onChange={handleInputChange}/> */}
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <label className="form-label mediumWeight portraitSecundaryColor">Número de identificación</label>
                        <input className="form-control" style={{ borderRadius: '15px', }} placeholder="Número de identificación" name="number_cardID" value={store.singleStudent.student?.number_cardID} onChange={handleInputChange} disabled={isDisabled} />
                    </div>
                </div>
                <div className="d-flex mb-3">
                    <div className="me-2 flex-fill">
                        <label className="form-label mediumWeight portraitSecundaryColor">Provincia</label>
                        <input className="form-control" style={{ borderRadius: '15px', }} placeholder="Provincia" name="province" value={formData.province} onChange={handleInputChange} disabled={isDisabled} />
                    </div>
                    <div className="me-2 flex-fill">
                        <label className="form-label mediumWeight portraitSecundaryColor">Cantón</label>
                        <input className="form-control" style={{ borderRadius: '15px', }} placeholder="Cantón" name="canton" value={formData.canton} onChange={handleInputChange} disabled={isDisabled} />
                    </div>
                    <div className="me-2 flex-fill">
                        <label className="form-label mediumWeight portraitSecundaryColor">Distrito</label>
                        <input className="form-control" style={{ borderRadius: '15px', }} placeholder="Distrito" name="district" value={formData.district} onChange={handleInputChange} disabled={isDisabled} />
                    </div>
                </div>
                {/* <hr />
                <div className="container d-flex-inline ps-0 mb-3 fst-italic" style={{ color: '#5751e1' }}>
                    <span>Gestiona tu contraseña</span>
                </div>
                <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input type="password" className="form-control" placeholder="Contraseña" onChange={handleInputChange} />
                </div>
                <div className="mb-4">
                    <label className="form-label">Confirmar contraseña</label>
                    <input type="password" className="form-control" placeholder="Confirmar contraseña" onChange={handleInputChange} />
                </div> */}
                <div className="d-flex flex-row justify-content-center gap-4 pt-4">
                    <Link to="/homestudent">
                        <MultiButtonNew color="purple" text="Atras" width="100" Btype='button' />
                    </Link>
                    <button type="submit" class="btn btn-warning" id="multiButton" style={{
                        backgroundColor: '#ffc224',
                        boxShadow: '4px 6px 0px #3d3d3d',
                        border: '1px solid #000000',
                        color: '#161439',
                        fontWeight: '600',
                        cursor: 'pointer',
                        width: '100px',
                        paddingBottom: '28px',
                    }}>Guardar</button>
                </div>
                {/* <div className="mb-4">
                    <button type="button" className="btn btn-primary btn-sm" onChange={handleSubmit}>Guardar</button>
                </div>
                <Link to={`/login`} className="mt-3">
                    ¿Ya tienes un usuario? Inicia sesión aquí</Link> */}
            </form>
        </div>
    );
};

export default FormStudent;
