import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogButton from "../component/LogButton";
import useAuth from "../component/frontAuth/useAuth";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { showNotification } from "../utils/ShowNotification";
import { MultiButtonNew } from "../component/MultibuttonNew";

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
        }
    }

    // const handleAll = () => {
    //     const strYears = formData.years_of_experience
    //     const strSpecialist = formData.specialist_in
    //     const strStudies = formData.studies
    //     const id = formData.professor_id

    //     if (strYears.trim().length &&
    //         strSpecialist.trim().length &&
    //         strStudies.trim().length &&
    //         id.length > 0) {
    //         handleSubmit()
    //     } else {
    //         showNotification("Debes agregar toda la información solicitada", "error")
    //     }
    // }

    console.log(formData)
    console.log(store.singleProfessor.professor?.id)

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
            <form className="mt-4 p-4 bg-white registerForm d-flex flex-column justify-content-center mb-4" onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <div className="col-lg-6 col-sm-12">
                        <label className="form-label mediumWeight portraitSecundaryColor">Años de experiencia</label>
                        <input className="form-control" style={{ borderRadius: '15px', }} value={formData.years_of_experience} placeholder="Años de experiencia" name="years_of_experience" onChange={handleInputChange} />
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <label className="form-label mediumWeight portraitSecundaryColor">Especialista en</label>
                        <input className="form-control" style={{ borderRadius: '15px', }} placeholder="Especialista en" value={formData.specialist_in} name="specialist_in" onChange={handleInputChange} />
                    </div>
                </div>
                <div className="row justify-content-center pb-3">
                    <div className="col-lg-12">
                        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Comentanos un poco más sobre ti" value={formData.studies} rows="4" style={{ height: '200px', borderRadius: '15px' }} onChange={handleInputChange} name='studies'></textarea>
                    </div>
                </div>
                {/* <div className="me-2 mb-3 flex-fill">
                    <label className="form-label mediumWeight portraitSecundaryColor">ID profesor</label>
                    <input className="form-control" disabled placeholder="ID professor" name="professor_id" value={formData.professor_id} onChange={handleInputChange} />
                </div> */}
                <div className="d-flex flex-row justify-content-around gap-4">
                    <Link to="/homeprofessor">
                        <MultiButtonNew color="purple" text="Cancelar" width="100" Btype='button' />
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
            </form>
        </div>
    );
};

export default ProfessorDescription;