import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogButton from "../component/LogButton";
import useAuth from "../component/frontAuth/useAuth";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { showNotification } from "../utils/ShowNotification";
import { MultiButtonNew } from "../component/MultibuttonNew";

const FormProfessor = () => {

    const { store, actions } = useContext(Context)
    const { logout } = useAuth()
    const [isDisabled, setIsDisabled] = useState(true)
    const [professorData, setProfessorData] = useState({})

    useEffect(() => {
        actions.getSingleProfessor()
    }, [])

    console.log(store.singleProfessor)
    console.log(store.singleProfessor.professor?.name)

    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: store.singleProfessor.professor?.name,
        last_name: store.singleProfessor.professor?.last_name,
        cardID_type: store.singleProfessor.professor?.cardID_type,
        number_cardID: store.singleProfessor.professor?.number_cardID,
        email: store.singleProfessor.professor?.email,
        phone_number: store.singleProfessor.professor?.phone_number,
        province: "",
        canton: "",
        district: ""
    })

    useEffect(() => {
        actions.getSingleProfessor();
    }, [])

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const isCreated = await actions.updateProfessor(formData)
        console.log(isCreated)
        if (isCreated) {
            showNotification("Datos modificados con éxito")
            navigate("/homeprofessor")
        } else {
            showNotification("Ocurrió un error al tratar de modificar tu información", "error")
        }
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center"
            style={{ backgroundColor: '#f8f9fa' }}>
            <div style={{ position: 'relative', width: '100%' }}>
                <img src="https://i.postimg.cc/XJ784zpy/Whats-App-Image-2024-06-17-at-19-29-08.jpg"
                    alt="Jumbotron" className="img-fluid mb-3 pt-2" style={{
                        width: '100%', maxHeight: '150px',
                        objectFit: 'cover'
                    }} />
                <div style={{
                    position: 'absolute', top: '50%', left: '35%', transform: 'translate(-45%, -50%)',
                    color: '#5751e1'
                }}>
                    <h2>¡ Bienvenid@ a tu perfil !</h2>
                    <hr />
                    <h4 className="fw-lighter fst-italic">{store.singleProfessor.professor?.name} {store.singleProfessor.professor?.last_name}</h4>
                </div>
            </div>
            <form className="mt-4 p-4 bg-white registerForm d-flex flex-column justify-content-center mb-4" onSubmit={handleSubmit}>
                <div className="headerForm d-flex flex-row justify-content-between pb-4 pt-3">
                    <h3 className="mb-3 pt-2 pb-2 mediumWeight text-center portraitSecundaryColor">Tu informacion personal</h3>
                    <div className="editOption p-1 mb-4 d-flex flex-row justify-content-center align-items-center gap-2" onClick={() => { setIsDisabled(false) }}>
                        <span className="mediumWeight  fs-6"> Editar </span>
                        <i class="fa-solid fa-pencil fs-6 "></i>
                    </div>
                </div>
                <div className="d-flex mb-3 pt-2">
                    <div className="me-2 flex-fill">
                        <label className="form-label mediumWeight portraitSecundaryColor">Nombre</label>
                        <input className="form-control" style={{ borderRadius: '15px', }} value={store.singleProfessor.professor?.name} placeholder="Nombre" name="name" onChange={handleInputChange} disabled={isDisabled} />
                    </div>
                    <div className="ms-2 flex-fill">
                        <label className="form-label mediumWeight portraitSecundaryColor">Apellido</label>
                        <input className="form-control" style={{ borderRadius: '15px', }} placeholder="Apellido" value={store.singleProfessor.professor?.last_name} name="last_name" onChange={handleInputChange} disabled={isDisabled} />
                    </div>
                </div>
                {/* <div className="mb-3 pt-2">
                    <label className="form-label">Fecha de nacimiento</label>
                    <div className="d-flex">
                        <input className="form-control me-2" placeholder="Día" style={{ maxWidth: '80px' }} onClick={handleInputChange} />
                        <input className="form-control me-2" placeholder="Mes" style={{ maxWidth: '100px' }} onClick={handleInputChange} />
                        <input className="form-control" placeholder="Año" style={{ maxWidth: '100px' }} onClick={handleInputChange} />
                    </div>
                </div> */}
                <div className="row mb-3 pt-2">
                    <div className="col-lg-6 col-sm-12">
                        <label className="form-label mediumWeight portraitSecundaryColor">Email</label>
                        <input className="form-control" style={{ borderRadius: '15px', }} placeholder="Email" value={store.singleProfessor.professor?.email} name="email" onChange={handleInputChange} disabled={isDisabled} />
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <label className="form-label mediumWeight portraitSecundaryColor">Número telefónico</label>
                        <input className="form-control" style={{ borderRadius: '15px', }} placeholder="Número telefónico" value={store.singleProfessor.professor?.phone_number} name="phone_number" onChange={handleInputChange} disabled={isDisabled} />
                    </div>
                </div>
                <div className="row mb-3 pt-2">
                    <div className="col-lg-6 col-sm-12">
                        <label className="form-label mediumWeight portraitSecundaryColor">Tipo de identificación</label><br></br>
                        <select name="select" className="p-1 mt-2" style={{ borderRadius: '15px', }} disabled={isDisabled}>
                            <option value="value1" selected>-----------</option>
                            <option value="value2">Cedula Nacional</option>
                            <option value="value3">DIMEX</option>
                            <option value="value3">Pasaporte</option>
                        </select>
                        {/* <input className="form-control" placeholder="Tipo de identificación" onClick={handleInputChange}/> */}
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <label className="form-label mediumWeight portraitSecundaryColor">Número de identificación</label>
                        <input className="form-control" style={{ borderRadius: '15px', }} placeholder="Número de identificación" value={store.singleProfessor.professor?.number_cardID} name="number_cardID" onChange={handleInputChange} disabled={isDisabled} />
                    </div>
                </div>
                <div className="d-flex mb-3 pt-2">
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
                <div className="container d-flex-inline ps-0 mb-3 pt-2 fst-italic" style={{ color: '#5751e1' }}>
                    <span>Gestiona tu contraseña</span>
                </div>
                <div className="mb-3 pt-2">
                    <label className="form-label">Contraseña</label>
                    <input type="password" className="form-control" placeholder="Contraseña" onClick={handleInputChange} />
                </div>
                <div className="mb-4">
                    <label className="form-label">Confirmar contraseña</label>
                    <input type="password" className="form-control" placeholder="Confirmar contraseña" onClick={handleInputChange} />
                </div> */}
                <div className="container d-flex flex-row justify-content-center gap-4 pb-4 mt-3">
                    <Link to="/homeprofessor">
                        <MultiButtonNew color="purple" text="Atras" width="100" Btype='button' />
                    </Link>
                    {/* <Link to={`/login`} className="mt-3 ms-5 me-5">
                        ¿Ya tienes un usuario? Inicia sesión aquí
                    </Link> */}
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
            </form>
        </div>
    );
};

export default FormProfessor;
