import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogButton from "../component/LogButton";
import useAuth from "../component/frontAuth/useAuth";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { showNotification } from "../utils/ShowNotification";

const ProfessorDescription = () => {

    const { store, actions } = useContext(Context)

    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        years_of_experience: "",
        specialist_in: "",
        studies: "",
        professor_id: store.singleProfessor.professor?.id
    })

    useEffect(() => {
        actions.getSingleProfessor();
    }, [])

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
            professor_id: store.singleProfessor.professor?.id
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const isCreated = await actions.newProfessorDescription(formData)
        console.log(isCreated)
        if (isCreated) {
            showNotification("Datos agregados con éxito")
            navigate("/homeprofessor")
            console.log(formData)
        } else {
            showNotification("Ocurrió un error al tratar agregar tu información", "error")
            console.log(formData)
            console.log(store.singleProfessor.professor?.id)
        }
    }

    console.log(formData)

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
                    <h2>Experiencia y formación académida</h2>
                    <hr />
                    <h4 className="fw-lighter fst-italic">{store.singleProfessor.professor?.name} {store.singleProfessor.professor?.last_name}</h4>
                </div>
            </div>
            <form className="mt-4 p-4 rounded shadow mb-4" style={{ backgroundColor: '#e9ecef' }} onSubmit={handleSubmit}>
                <div className="d-flex mb-3">
                    <div className="me-2 flex-fill">
                        <label className="form-label">Años de experiencia</label>
                        <input className="form-control" value={formData.years_of_experience} placeholder="Años de experiencia" name="years_of_experience" onChange={handleInputChange} />
                    </div>
                    <div className="ms-2 flex-fill">
                        <label className="form-label">Especialista en</label>
                        <input className="form-control" placeholder="Especialista en" value={formData.specialist_in} name="specialist_in" onChange={handleInputChange} />
                    </div>
                </div>
                <div className="row justify-content-center pb-3">
                    <div className="col-xl-11">
                        <textarea className="form-control" id="exampleFormControlTextarea1" value={formData.studies} rows="4" style={{ height: '200px', borderRadius: '15px' }} onChange={handleInputChange} name='studies'></textarea>
                    </div>
                </div>
                {/* <div className="me-2 mb-3 flex-fill">
                    <label className="form-label">ID profesor</label>
                    <input className="form-control" disabled placeholder="ID professor" name="professor_id" value={formData.professor_id} onChange={handleInputChange} />
                </div> */}
                <div className="container-fluid justify-content-between">
                    <button type="submit" className="btn btn-primary btn-sm">Guardar</button>
                    <Link to="/homeprofessor">
                        <button type="button" className="btn btn-warning btn-sm ms-5">Cancelar</button>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default ProfessorDescription;