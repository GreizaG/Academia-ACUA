import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { MultiButtonNew } from "../component/MultibuttonNew";
import { showNotification } from "../utils/ShowNotification";

export const StudentPayment = () => {

    const navigate = useNavigate()
    const { store, actions } = useContext(Context)
    const [formData, setFormData] = useState({
        date: "",
        mount: "",
        student_id: 0,
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
        const isCreated = await actions.newStudentPayment(formData)
        console.log(isCreated)
        if (isCreated) {
            showNotification("Fecha de pago creada con éxito")
            navigate("/homeadmin")
        } else {
            showNotification("Ocurrió un error al tratar de agregar una nueva fecha de pago", "error")
        }

    }

    const handleSelectChange = (e) => {
        const selectedId = e.target.value
        const selectedObj = options.find(option => option.id === parseInt(selectedId))
        console.log(selectedObj)
        setSelectedOption(selectedObj)
        setFormData({
            ...formData,
            student_id: selectedObj?.id
        })
    }

    useEffect(() => {
        if (searchTerm.length > 0) {
            const searchStudent = async () => {
                try {
                    const response = await fetch(`${process.env.BACKEND_URL}/api/search/students`, {
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
            searchStudent()
        } else {
            setOptions([])
        }
    }, [searchTerm])

    return (
        <React.Fragment>
            <div className="d-flex flex-column justify-content-center align-items-center bg-white">
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
                        <h1>Información próximo pago estudiante</h1>
                    </div>
                </div>
                <form className="mt-5 p-5 mb-5 bg-white registerForm d-flex flex-column justify-content-center">
                    <div className="d-flex mb-3 row">
                        <div className="col-lg-12">
                            <label className="form-label fs-6 mb-2 mediumWeight portraitSecundaryColor ps-2">Fecha de próximo pago</label>
                            <input className="form-control mb-3" placeholder="Fecha Mes Año" name="date" value={formData.date} onChange={handleInputChange} style={{ borderRadius: '15px' }} />
                        </div>
                    </div>
                    <div className="row d-flex mb-3">
                        <div className="col-lg-12">
                            <label className="form-label fs-6 mb-2 mediumWeight portraitSecundaryColor ps-2">Monto</label>
                            <input className="form-control mb-3" placeholder="Monto en colones" name="mount" value={formData.mount} onChange={handleInputChange} style={{ borderRadius: '15px' }} />
                        </div>
                    </div>

                    {/* <div className="me-2 flex-fill">
                            <label className="form-label fs-4 mb-3" style={{ color: '#5751e1' }}>Fecha vencimiento</label>
                            <input className="form-control mb-3" placeholder="Fecha Mes Año" name="student_id" value={formData.student_id} onChange={handleInputChange} />
                        </div> */}
                    <div className="me-2 row">
                        <div className="col-lg-11">
                            <label htmlFor="searcInput" className="form-label fs-6 mb-2 mt-1 mediumWeight portraitSecundaryColor ps-2">
                                Buscar estudiante
                            </label>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-sm-12">
                            <input
                                className="form-control mb-3"
                                type="text"
                                id="searchInput"
                                placeholder="Buscar estudiante"
                                value={searchTerm}
                                onChange={(e) => { setSearchTerm(e.target.value) }}
                                style={{ borderRadius: '15px' }} />
                        </div>
                        <div className="col-lg-7 col-sm-12">
                            <select id="selectInput" className="form-control" value={selectedOption ? selectedOption.id : ""} onChange={handleSelectChange} style={{ borderRadius: '15px' }}>
                                <option value="">Seleccionar estudiante</option>
                                {options.map((option) => {
                                    return <option key={option.id} value={option.id} >{option.name} {option.last_name}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    {/* <label className="form-label fs-4 mb-3" style={{ color: '#5751e1' }}>ID estudiante</label>
                            <input className="form-control mb-3" placeholder="ID estudiante" name="student_id" value={formData.student_id} onChange={handleInputChange} /> */}
                    <div className="d-flex justify-content-around mt-4">
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
            </div >
        </React.Fragment >
    );
};
