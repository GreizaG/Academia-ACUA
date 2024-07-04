import React from 'react'
import { useState } from 'react'

export const ContactForm = () => {

    const [formData, setFormData] = useState({
        body_name: "",
        body_text: "",
        body_email: "",
        body_requeriment: "",
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }))
    }



    return (
        <React.Fragment>
            <div className="contactForm">
                <div className="bodyContact" style={{ padding: '25px' }}>
                    <form action="">
                        <div className="row justify-content-center">
                            <div className="col-xl-11">
                                <h2 className='text-dark bigWeight fs-2'>Envianos un mensaje</h2>
                                <p className='text-secondary text-left'>Tu direccion de email no será publicada, los campos obligatorios estan marcados con una * </p>
                            </div>
                        </div>
                        <div className="row justify-content-center pb-3">
                            <div className="col-xl-11">
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" style={{ height: '200px' }} onChange={handleInputChange} name='text_body'></textarea>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-xl-3 col-lg-4 col-md-6 mt-2">
                                <input type="text" class="form-control" placeholder="Nombre *" aria-label="Username" aria-describedby="basic-addon1" id='contactName' required />
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mt-2">
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email *' />
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mt-2">
                                <select className="form-select" aria-label="Default select example">
                                    <option selected disabled> Requerimiento </option>
                                    <option value="pagos_y_servicios">Pagos y servicios</option>
                                    <option value="informacion_de_pago">Informacion de pago </option>
                                    <option value="informacion_profesores">Informacion de profesores</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}
