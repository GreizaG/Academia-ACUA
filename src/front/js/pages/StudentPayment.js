import React, { useState } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { MultiButton } from "../component/MultiButton";
import { showNotification } from "../utils/ShowNotification";

export const StudentPayment = () => {

    const navigate = useNavigate()
    const { store, actions } = useContext(Context)
    const [formData, setFormData] = useState({
        date: "",
        mount: "",
        student_id: 0,
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
        const isCreated = await actions.newStudentPayment(formData)
        console.log(isCreated)
        if (isCreated) {
            showNotification("Fecha de pago creada con éxito")
            navigate("/homeadmin")
        } else {
            showNotification("Ocurrió un error al tratar de agregar una nueva fecha de pago", "error")
        }

    }

    return (
        <React.Fragment>
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
                        <h1>Información próximo pago estudiante</h1>
                    </div>
                </div>
                <form className="mt-5 p-5 rounded shadow mb-5" style={{ backgroundColor: '#e9ecef' }}>
                    <div className="d-flex mb-3 row">
                        <div className="me-2 flex-fill">
                            <label className="form-label fs-4 mb-3" style={{ color: '#5751e1' }}>Fecha de próximo pago</label>
                            <input className="form-control mb-3" placeholder="Fecha Mes Año" name="date" value={formData.date} onChange={handleInputChange} />
                        </div>
                        <div className="me-2 flex-fill">
                            <label className="form-label fs-4 mb-3" style={{ color: '#5751e1' }}>Monto</label>
                            <input className="form-control mb-3" placeholder="Monto en colones" name="mount" value={formData.mount} onChange={handleInputChange} />
                        </div>
                        {/* <div className="me-2 flex-fill">
                            <label className="form-label fs-4 mb-3" style={{ color: '#5751e1' }}>Fecha vencimiento</label>
                            <input className="form-control mb-3" placeholder="Fecha Mes Año" name="student_id" value={formData.student_id} onChange={handleInputChange} />
                        </div> */}
                        <div className="me-2 flex-fill">
                            <label className="form-label fs-4 mb-3" style={{ color: '#5751e1' }}>ID estudiante</label>
                            <input className="form-control mb-3" placeholder="ID estudiante" name="student_id" value={formData.student_id} onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Guardar</button>
                        {/* <Link to="/homeadmin" className="text-decoration-none">
                            <MultiButton color='purple' text='Volver' width='100' onClick={handleSubmit} />
                        </Link>
                        <MultiButton color='purple' text='Guardar' width='100' onClick={handleSubmit} /> */}
                        <Link to="/homeadmin" className="text-decoration-none">
                            <button type="button" className="btn btn-warning">Cancelar</button>
                        </Link>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
};
