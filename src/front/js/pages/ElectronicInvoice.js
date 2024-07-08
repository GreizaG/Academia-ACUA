import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { showNotification } from "../utils/ShowNotification";
import { MultiButtonNew } from "../component/MultibuttonNew";

export const ElectronicInvoice = () => {

  const navigate = useNavigate()
  const { store, actions } = useContext(Context)
  const [formData, setFormData] = useState({
    name: "",
    cardID_type: "",
    number_cardID: 0,
    email: "",
    phone_number: 0,
    province: "",
    canton: "",
    district: "",
    student_id: store.singleStudent.student?.id
  })

  const [formState, setFormState] = useState({})

  useEffect(() => {
    actions.getSingleStudent();
  }, [])

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
      student_id: store.singleStudent.student?.id
    }))
  }

  const handleSubmit = async () => {
    const isCreated = await actions.newElectronicInvoice(formData)
    console.log(isCreated)
    if (isCreated) {
      showNotification("Registro de datos creado con exito")
      navigate("/homestudent")
    } else {
      showNotification("Error al registrar los datos", "error")
    }
  }

  const handleSelectChange = (e) => {
    const { value } = e.target;
    setFormState({
      ...formState,
      selectedOption: value
    })
  }

  const handleAll = () => {
    const strName = formData.name
    // const strCardIdType = formData.cardID_type
    const id = formData.number_cardID
    const phone = formData.phone_number
    const strEmail = formData.email
    const strProvince = formData.province
    const strCanton = formData.canton
    const strDistrict = formData.district

    if (strName.trim().length &&
      // strCardIdType.trim().length &&
      id.length &&
      phone.length &&
      strEmail.trim().length &&
      strProvince.trim().length &&
      strCanton.trim().length &&
      strDistrict.trim().length > 0) {
      handleSubmit()
    } else {
      showNotification("Debes agregar toda la información solicitada", "error")
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
          <div className="container justify-content-center">
            <h1>¡ Bienvenid@ !</h1>
            <hr />
            <h4 className="portraitSecundaryColor fst-italic ms-5">{store.singleStudent.student?.name} {store.singleStudent.student?.last_name}</h4>
          </div>
        </div>
      </div>
      <form className="mt-4 p-4 bg-white registerForm d-flex flex-column justify-content-center mb-4" style={{ backgroundColor: '#e9ecef' }}>
        <h4 className="mb-4 mediumWeight portraitSecundaryColor">Agrega información para tu factura electrónica</h4>
        <div className="d-flex mb-3">
          <div className="me-2 flex-fill">
            <label className="form-label mediumWeight portraitSecundaryColor">Nombre</label>
            <input className="form-control" style={{ borderRadius: '15px', }} placeholder="Nombre" name="name" value={formData.name} onChange={handleInputChange} />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-6 col-sm-12">
            <label className="form-label mediumWeight portraitSecundaryColor">Tipo de identificación</label><br></br>
            <select name="select" style={{ borderRadius: '15px', }} className="p-2" onChange={handleSelectChange} value={formState.selectedOption}>
              <option value="value1" selected>Seleccione</option>
              <option value="Cédula Nacional">Cedula Nacional</option>
              <option value="Cédula Juridica">Cedula Juridica</option>
              <option value="DIMEX">DIMEX</option>
            </select>
            {/* <input className="form-control" placeholder="Tipo de identificación" onChange={handleInputChange} /> */}
          </div>
          <div className="col-lg-6 col-sm-12">
            <label className="form-label mediumWeight portraitSecundaryColor">Número de identificación</label>
            <input className="form-control" style={{ borderRadius: '15px', }} placeholder="Número de identificación" name="number_cardID" value={formData.number_cardID} onChange={handleInputChange} />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-6 col-sm-12">
            <label className="form-label mediumWeight portraitSecundaryColor">Email</label>
            <input className="form-control" style={{ borderRadius: '15px', }} placeholder="Email" name="email" value={formData.email} onChange={handleInputChange} />
          </div>
          <div className="col-lg-6 col-sm-12">
            <label className="form-label mediumWeight portraitSecundaryColor">Número telefónico</label>
            <input className="form-control" style={{ borderRadius: '15px', }} placeholder="Número telefónico" name="phone_number" value={formData.phone_number} onChange={handleInputChange} />
          </div>
        </div>
        <div className="d-flex mb-3">
          <div className="me-2 flex-fill">
            <label className="form-label mediumWeight portraitSecundaryColor">Provincia</label>
            <input className="form-control" style={{ borderRadius: '15px', }} placeholder="Provincia" name="province" value={formData.province} onChange={handleInputChange} />
          </div>
          <div className="me-2 flex-fill">
            <label className="form-label mediumWeight portraitSecundaryColor">Cantón</label>
            <input className="form-control" style={{ borderRadius: '15px', }} placeholder="Cantón" name="canton" value={formData.canton} onChange={handleInputChange} />
          </div>
          <div className="me-2 flex-fill">
            <label className="form-label mediumWeight portraitSecundaryColor">Distrito</label>
            <input className="form-control" style={{ borderRadius: '15px', }} placeholder="Distrito" name="district" value={formData.district} onChange={handleInputChange} />
          </div>
        </div>
        {/* <div className="me-2 flex-fill">
          <label className="form-label">ID estudiante</label>
          <input className="form-control" placeholder="ID estudiante" name="student_id" value={store.singleStudent.student?.id} onChange={handleInputChange} />
        </div> */}
        <div className="d-flex flex-row justify-content-center gap-4 mt-3">
          <Link to="/homestudent">
            <MultiButtonNew color="purple" text="Atras" width="100" Btype='button' />
          </Link>
          <button type="button" class="btn btn-warning" onClick={handleAll} id="multiButton" style={{
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
        {/* <div className="container-fluid justify-content-between">
          <button type="submit" className="btn btn-warning w-100" style={{ borderRadius: '20px', boxShadow: '0px 4px 8px' }} onClick={handleSubmit}>Guardar</button>
        </div> */}
      </form >
    </div >
  );
};