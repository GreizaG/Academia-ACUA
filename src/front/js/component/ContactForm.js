import React from 'react'
import { useState } from 'react'
import { MultiButton } from './MultiButton'
import { MultiButtonNew } from './MultibuttonNew'

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

        console.log(formData)
    }

    // const handleSubmit = async () => {
    //     // event.preventDefault();
    //     if (!validateEmail(formData.email)) {
    //         showNotification("Por favor, introduce una dirección de correo electrónico válida.", "error");
    //         return;
    //     }
    //     const isCreated = await actions.newContactForm(formData)
    //     console.log(isCreated)
    //     if (isCreated) {
    //         actions.getProfessors()
    //         showNotification("Profesor creado con éxito")
    //         navigate("/homeadmin")
    //     } else {
    //         showNotification("Ocurrió un error al tratar de agregar un profesor", "error")
    //     }
    // }

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
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" style={{ height: '200px', borderRadius: '15px' }} onChange={handleInputChange} name='body_text'></textarea>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-xl-3 col-lg-4 col-md-6 mt-2">
                                <input type="text" class="form-control" placeholder="Nombre *" aria-label="Username" aria-describedby="basic-addon1" id='contactName' onChange={handleInputChange} name='body_name' required style={{ borderRadius: '15px' }} />
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mt-2">
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email *' onChange={handleInputChange} name='body_email' style={{ borderRadius: '15px' }} />
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mt-2">
                                <select className="form-select" aria-label="Default select example" name='body_requeriment' onChange={handleInputChange} style={{ borderRadius: '15px' }}>
                                    <option selected disabled> Requerimiento </option>
                                    <option value="pagos_y_servicios">Pagos y servicios</option>
                                    <option value="informacion_de_pago">Informacion de pago </option>
                                    <option value="informacion_profesores">Informacion de profesores</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-6 mt-4 ms-4 d-flex justify-content-start">
                                <MultiButtonNew color="orange" text="Enviar" width="130" Btype='submit' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}
