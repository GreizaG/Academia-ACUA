import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { MultiButtonNew } from "../component/MultibuttonNew";
import { showNotification } from "../utils/ShowNotification";
import { NavbarAdmin } from "./NavbarAdmin";

export const ProfessorPayment = () => {

    const navigate = useNavigate()
    const { store, actions } = useContext(Context)
    const [formData, setFormData] = useState({
        payment_method: "",
        phone_number: 0,
        iban_account: "",
        professor_id: 0,
    })

    const [searchTerm, setSearchTerm] = useState("")
    const [options, setOptions] = useState([])
    const [selectedOption, setSelectedOption] = useState(null)

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
        const isCreated = await actions.newProfessorPayment(formData)
        console.log(isCreated)
        if (isCreated) {
            showNotification("Nuevo pago creado con éxito")
            navigate("/professorspaymentregister")
        } else {
            showNotification("Ocurrió un error al tratar de agregar un nuevo pago", "error")
        }

    }

    const handleSelectChange = (e) => {
        const selectedId = e.target.value
        const selectedObj = options.find(option => option.id === parseInt(selectedId))
        console.log(selectedObj)
        setSelectedOption(selectedObj)
        setFormData({
            ...formData,
            professor_id: selectedObj?.id
        })
    }

    useEffect(() => {
        if (searchTerm.length > 0) {
            const searchProfessor = async () => {
                try {
                    const response = await fetch(`${process.env.BACKEND_URL}/api/search/professors`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ 'term': searchTerm })
                    });
                    if (response.ok) {
                        const data = await response.json()
                        setOptions(data.result)
                    } else {
                        console.log("Error obteniendo data")
                    }
                } catch (error) {
                    console.log("Error obteniendo data", error)
                }
            };
            searchProfessor()
        } else {
            setOptions([])
        }
    }, [searchTerm])



    return (
        <React.Fragment>
            <NavbarAdmin />
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
                        color: 'black'
                    }}>
                        <h3 className="mediumWeight">Información pago profesor</h3>
                    </div>
                </div>
                <form className="mt-5 p-5 mb-5 bg-white registerForm d-flex flex-column justify-content-center">
                    <div className="d-flex mb-3 row">
                        <div className="col-lg-5 col-sm-12">
                            <label className="form-label mediumWeight portraitSecundaryColor fs-6">Método de pago</label>
                            <input className="form-control mb-3" placeholder="Método de pago" name="payment_method" value={formData.payment_method} onChange={handleInputChange} style={{ borderRadius: '15px' }} />
                        </div>
                        <div className="col-lg-7 col-sm-12">
                            <label className="form-label mediumWeight portraitSecundaryColor fs-6" >Número de teléfono</label>
                            <input className="form-control mb-3" placeholder="Número de teléfono" name="phone_number" value={formData.phone_number} onChange={handleInputChange} style={{ borderRadius: '15px' }} />
                        </div>
                    </div>
                    <div className="me-2 flex-fill">
                        <label className="form-label mb-3 mediumWeight portraitSecundaryColor fs-6" >N° cuenta IBAN</label>
                        <input className="form-control mb-3" placeholder="N° cuenta IBAN" name="iban_account" value={formData.iban_account} onChange={handleInputChange} style={{ borderRadius: '15px' }} />
                    </div>
                    <div className="d-flex mb-3 row">
                        <div className="col-lg-12 col-sm-12">
                            <label htmlFor="searcInput" className="form-label mb-3 mediumWeight portraitSecundaryColor fs-6" >
                                Seleccione profesor
                            </label>
                        </div>
                        <div className="col-lg-5 col-sm-12">
                            <input
                                className="form-control mb-3"
                                type="text"
                                id="searchInput"
                                placeholder="Buscar profesor"
                                value={searchTerm}
                                onChange={(e) => { setSearchTerm(e.target.value) }}
                                style={{ borderRadius: '15px' }} />
                        </div>
                        <div className="col-lg-7 col-sm-12">
                            <select id="selectInput" className="form-control" value={selectedOption ? selectedOption.id : ""} onChange={handleSelectChange} style={{ borderRadius: '15px' }}>
                                <option value="">Seleccionar profesor</option>
                                {options.map((option) => {
                                    return <option key={option.id} value={option.id}>{option.name} {option.last_name}</option>
                                })}
                            </select>
                        </div>
                        {/* <label className="form-label fs-4 mb-3" >ID professor</label>
                            <input className="form-control mb-3" placeholder="ID professor" name="professor_id" value={formData.professor_id} onChange={handleInputChange} /> */}
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                        <Link to='/registeredcourses'>
                            <MultiButtonNew color="purple" text="Atras" width="100" Btype='button' />
                        </Link>
                        <button type="button" class="btn btn-warning" id="multiButton" onClick={handleSubmit} style={{
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
        </React.Fragment>
    );
};
