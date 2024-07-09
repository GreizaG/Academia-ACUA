import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavbarACUA } from '../component/NavbarACUA';
import { showNotification } from "../utils/ShowNotification";
import { Context } from "../store/appContext";
import { MultiButtonNew } from "../component/MultibuttonNew";

export const SignUp = () => {
  const [secondPassword, setSecondPassword] = useState('');
  const [colorBorder, setColorBorder] = useState('1px solid #ced4da')
  const [errorMessage, setErrorMessage] = useState('');
  const [errorFlag, setErrorFlag] = useState(false);
  const { actions } = useContext(Context);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    last_name: "",
    email: "",
    province: "",
    canton: "",
    distric: "",
    password: "",
    cardID_type: "",
    number_cardID: "",
    birthday: "",
    phone_number: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePasswords = (e) => {
    setSecondPassword(e.target.value);
  };

  useEffect(() => {
    const password = secondPassword;
    if (formData.password == '' && password == '') {
      setColorBorder('1px solid #ced4da')
    }
    else if (formData.password != password) {
      setColorBorder('1px solid red');
      setErrorMessage('Las contraseñas no coinciden')
      setErrorFlag(true)
    } else if (formData.password.trim().length < 5) {
      setErrorMessage('Las contraseña debe tener mas de 5 caracteres')
      setErrorFlag(true)
    }
    else {
      setColorBorder('1px solid green');
      setErrorMessage('')
      setErrorFlag(false)
    }
  }, [secondPassword, formData.password]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isCreated = await actions.newStudent(formData);
    if (errorFlag) {
      showNotification("Hay un problema con tu contraseña", "error");
    }
    else {
      if (isCreated) {
        showNotification("Estudiante registrado con éxito");
        navigate("/login");
      } else {
        showNotification("Ocurrió un error al registrarse", "error");
      }
    }
  };

  return (
    <React.Fragment>
      <div className="d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: '#f8f9fa' }}>
        <div style={{ position: 'relative', width: '100%' }}>
          <img src="https://i.postimg.cc/XJ784zpy/Whats-App-Image-2024-06-17-at-19-29-08.jpg"
            alt="Jumbotron" className="img-fluid mb-3" style={{ width: '100%', maxHeight: '150px', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', top: '55%', left: '45%', transform: 'translate(-45%, -50%)', color: 'black' }}>
            <h1 className="mediumWeight portraitSecundaryColor">¡Bienvenido estudiante!</h1>
            <p className="portraitSecundaryColor">Sé parte de la familia ACUA</p>
          </div>
        </div>
        <form className="mt-4 p-4 mb-4 bg-white registerForm d-flex flex-column justify-content-center" style={{ backgroundColor: '#e9ecef', maxWidth: '600px', width: '100%' }}>
          <h3 className="mb-4 pt-3 portraitSecundaryColor text-center">Registro de usuario</h3>
          <div className="d-flex mb-3 mt-3">
            <div className="me-2 flex-fill">
              <label className="form-label mediumWeight portraitSecundaryColor fs-6">Nombre</label>
              <input
                className="form-control"
                placeholder="Nombre"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                style={{ borderRadius: '15px', }}
                required
              />
            </div>
            <div className="ms-2 flex-fill">
              <label className="form-label mediumWeight portraitSecundaryColor fs-6">Apellido</label>
              <input
                className="form-control"
                placeholder="Apellido"
                name="last_name"
                value={formData.last_name}
                onChange={handleInputChange}
                style={{ borderRadius: '15px', }}
                required
              />
            </div>
          </div>
          <div className="mb-3 row mt-3">
            <div className="col-lg-6 col-sm-12">
              <label className="form-label mediumWeight portraitSecundaryColor">Fecha de Nacimiento</label>
              <input
                type="date"
                className="form-control"
                name="birthday"
                value={formData.birthday}
                onChange={handleInputChange}
                style={{ borderRadius: '15px', }}
                required
              />
            </div>
            <div className="col-lg-6 col-sm-12">
              <label className="form-label mediumWeight portraitSecundaryColor">Email</label>
              <input
                className="form-control"
                placeholder="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                style={{ borderRadius: '15px', }}
                required
              />
            </div>
          </div>
          <div className="mb-3 mt-3">
            <label className="form-label mediumWeight portraitSecundaryColor">Teléfono</label>
            <input
              className="form-control"
              placeholder="Teléfono"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleInputChange}
              style={{ borderRadius: '15px', }}
              required
            />
          </div>
          <div className="mb-3 row mt-3">
            <div className=" col-lg-5 col-sm-12">
              <label className="form-label mediumWeight portraitSecundaryColor mb-3">Tipo de Identificación</label><br></br>
              <select style={{ borderRadius: '12px' }} className="ms-3" name="cardID_type" onChange={handleInputChange}>
                <option value="value1" selected>-----------</option>
                <option value="value2">Cedula Nacional</option>
                <option value="value3">DIMEX</option>
                <option value="value3">Pasaporte</option>
              </select>
            </div>
            {/* <input
                className="form-control"
                placeholder="Tipo de Identificación"
                name="cardID_type"
                value={formData.cardID_type}
                onChange={handleInputChange}
                required
              /> */}
            <div className=" col-lg-7 col-sm-12">
              <label className="form-label mediumWeight portraitSecundaryColor">Número de Identificación</label>
              <input
                className="form-control"
                placeholder="Número de Identificación"
                name="number_cardID"
                value={formData.number_cardID}
                onChange={handleInputChange}
                style={{ borderRadius: '15px' }}
                required
              />
            </div>
          </div>
          <div className="mb-3 row mt-3">
            <div className="col-lg-6 col-sm-12">
              <label className="form-label mediumWeight portraitSecundaryColor">Contraseña</label>
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                style={{ borderRadius: '15px', border: `${colorBorder}` }}
                required
              />
            </div>
            <div className="col-lg-6 col-sm-12">
              <label className="form-label mediumWeight portraitSecundaryColor">Confirmar Contraseña</label>
              <input
                onChange={handlePasswords}
                type="password"
                className="form-control"
                placeholder="Confirmar Contraseña"
                style={{ borderRadius: '15px', border: `${colorBorder}` }}
                required
              />
            </div>
          </div>
          <div className="mensajeError" style={{ color: 'red' }}>{errorMessage}</div>
          <div className="d-flex flex-row justify-content-center gap-4 mb-3 mt-3">
            <Link to='/'>
              <MultiButtonNew color="purple" text="Atras" width="100" Btype='button' />
            </Link>
            <div onClick={handleSubmit} disabled={errorFlag}>
              <MultiButtonNew color="orange" text="Enviar" width="100" Btype='button' />
            </div>
          </div>
          <Link to={`/login`} className="mt-3 text-center">
            ¿Ya tienes un usuario? Inicia sesión aquí
          </Link>
        </form>
      </div>
    </React.Fragment>
  );
};
