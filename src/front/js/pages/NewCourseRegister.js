import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { MultiButtonNew } from "../component/MultibuttonNew";
import { showNotification } from "../utils/ShowNotification";

export const NewCourseRegister = () => {

    const navigate = useNavigate()
    const { store, actions } = useContext(Context)
    const [formData, setFormData] = useState({
        professor_id: 0,
        course_id: 0,
        student_id: 0
    })

    const [searchStudentTerm, setSearchStudentTerm] = useState("")
    const [studentOptions, setStudentOptions] = useState([])
    const [selectedStudentOption, setSelectedStudentOption] = useState(null)

    const [searchProfessorTerm, setSearchProfessorTerm] = useState("")
    const [professorOptions, setProfessorOptions] = useState([])
    const [selectedProfessorOption, setSelectedProfessorOption] = useState(null)

    const [searchCourseTerm, setSearchCourseTerm] = useState("")
    const [courseOptions, setCourseOptions] = useState([])
    const [selectedCourseOption, setSelectedCourseOption] = useState(null)

    const [searchModalityTerm, setSearchModalityTerm] = useState("")
    const [modalityOptions, setModalityOptions] = useState([])
    const [selectedModalityOption, setSelectedModalityOption] = useState(null)

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,

        }))
    }

    const handleSubmit = async () => {
        // event.preventDefault();
        const isCreated = await actions.newCourseRegistration(formData)
        console.log(isCreated)
        if (isCreated) {
            showNotification("Nuevo curso registrado con éxito")
            navigate("/registeredcourses")
        } else {
            showNotification("Ocurrió un error al tratar de registrar un nuevo curso", "error")
        }

    }

    const handleSelectStudentChange = (e) => {
        const selectedStudentId = e.target.value
        const selectedStudentObj = studentOptions.find(studentOption => studentOption.id === parseInt(selectedStudentId))
        console.log(selectedStudentObj)
        setSelectedStudentOption(selectedStudentObj)
        setFormData({
            ...formData,
            // course_id: selectedObj?.id,
            // professor_id: selectedObj?.id,
            student_id: selectedStudentObj?.id
        })
    }

    const handleSelectProfessorChange = (e) => {
        const selectedProfessorId = e.target.value
        const selectedProfessorObj = professorOptions.find(professorOption => professorOption.id === parseInt(selectedProfessorId))
        console.log(selectedProfessorObj)
        setSelectedProfessorOption(selectedProfessorObj)
        setFormData({
            ...formData,
            // course_id: selectedObj?.id,
            professor_id: selectedProfessorObj?.id
            // student_id: selectedStudentObj?.id
        })
    }

    const handleSelectCourseChange = (e) => {
        const selectedCourseId = e.target.value
        const selectedCourseObj = courseOptions.find(courseOption => courseOption.id === parseInt(selectedCourseId))
        console.log(selectedCourseObj)
        setSelectedCourseOption(selectedCourseObj)
        setFormData({
            ...formData,
            course_id: selectedCourseObj?.id
            // professor_id: selectedObj?.id,
            // student_id: selectedStudentObj?.id
        })
    }

    const handleSelectModalityChange = (e) => {
        const selectedModalityId = e.target.value
        const selectedModalityObj = modalityOptions.find(modalityOption => modalityOption.id === parseInt(selectedModalityId))
        console.log(selectedModalityObj)
        setSelectedModalityOption(selectedModalityObj)
        setFormData({
            ...formData,
            modality_id: selectedModalityObj?.id
            // professor_id: selectedObj?.id,
            // student_id: selectedStudentObj?.id
        })
    }

    useEffect(() => {
        if (searchStudentTerm.length > 0) {
            const searchStudent = async () => {
                try {
                    const response = await fetch(`${process.env.BACKEND_URL}/api/search/students`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ 'term': searchStudentTerm })
                    });
                    if (response.ok) {
                        const data = await response.json()
                        setStudentOptions(data.result)
                    } else {
                        console.log("Error obteniendo data")
                    }
                } catch (error) {
                    console.log("Error obteniendo data", error)
                }
            };
            searchStudent()
        } else {
            setStudentOptions([])
        }
    }, [searchStudentTerm])

    useEffect(() => {
        if (searchProfessorTerm.length > 0) {
            const searchProfessor = async () => {
                try {
                    const response = await fetch(`${process.env.BACKEND_URL}/api/search/professors`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ 'term': searchProfessorTerm })
                    });
                    if (response.ok) {
                        const data = await response.json()
                        setProfessorOptions(data.result)
                    } else {
                        console.log("Error obteniendo data")
                    }
                } catch (error) {
                    console.log("Error obteniendo data", error)
                }
            };
            searchProfessor()
        } else {
            setProfessorOptions([])
        }
    }, [searchProfessorTerm])

    useEffect(() => {
        if (searchCourseTerm.length > 0) {
            const searchCourse = async () => {
                try {
                    const response = await fetch(`${process.env.BACKEND_URL}/api/search/courses`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ 'term': searchCourseTerm })
                    });
                    if (response.ok) {
                        const data = await response.json()
                        setCourseOptions(data.result)
                    } else {
                        console.log("Error obteniendo data")
                    }
                } catch (error) {
                    console.log("Error obteniendo data", error)
                }
            };
            searchCourse()
        } else {
            setCourseOptions([])
        }
    }, [searchCourseTerm])

    useEffect(() => {
        if (searchModalityTerm.length > 0) {
            const searchModality = async () => {
                try {
                    const response = await fetch(`${process.env.BACKEND_URL}/api/search/modalities`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ 'term': searchModalityTerm })
                    });
                    if (response.ok) {
                        const data = await response.json()
                        setModalityOptions(data.result)
                    } else {
                        console.log("Error obteniendo data")
                    }
                } catch (error) {
                    console.log("Error obteniendo data", error)
                }
            };
            searchModality()
        } else {
            setModalityOptions([])
        }
    }, [searchModalityTerm])

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
                        <h1>Registrar nuevo curso</h1>
                    </div>
                </div>
                <form className="mt-5 p-5 mb-5 bg-white registerForm d-flex flex-column justify-content-center">
                    <div className="d-flex mb-3 row">
                        <div className="me-2 row">
                            <div className="col-lg-11">
                                <label htmlFor="searchStudentInput" className="form-label fs-6 mb-2 mt-1 mediumWeight portraitSecundaryColor ps-2">
                                    Buscar estudiante
                                </label>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-5 col-sm-12">
                                <input
                                    className="form-control mb-3"
                                    type="text"
                                    id="searchStudentInput"
                                    placeholder="Buscar estudiante"
                                    value={searchStudentTerm}
                                    onChange={(e) => { setSearchStudentTerm(e.target.value) }}
                                    style={{ borderRadius: '15px' }} />
                            </div>
                            <div className="col-lg-7 col-sm-12">
                                <select id="selectStudentInput" className="form-control" value={selectedStudentOption ? selectedStudentOption.id : ""} onChange={handleSelectStudentChange} style={{ borderRadius: '15px' }}>
                                    <option value="">Seleccionar estudiante</option>
                                    {studentOptions.map((studentOption) => {
                                        return <option key={studentOption.id} value={studentOption.id} >{studentOption.name} {studentOption.last_name}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="me-2 flex-fill">
                            <div className="me-2 row">
                                <div className="col-lg-11">
                                    <label htmlFor="searchProfessorInput" className="form-label fs-6 mb-2 mt-1 mediumWeight portraitSecundaryColor ps-2">
                                        Buscar profesor
                                    </label>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-5 col-sm-12">
                                    <input
                                        className="form-control mb-3"
                                        type="text"
                                        id="searchProfessorInput"
                                        placeholder="Buscar profesor"
                                        value={searchProfessorTerm}
                                        onChange={(e) => { setSearchProfessorTerm(e.target.value) }}
                                        style={{ borderRadius: '15px' }} />
                                </div>
                                <div className="col-lg-7 col-sm-12">
                                    <select id="selectProfessorInput" className="form-control" value={selectedProfessorOption ? selectedProfessorOption.id : ""} onChange={handleSelectProfessorChange} style={{ borderRadius: '15px' }}>
                                        <option value="">Seleccionar profesor</option>
                                        {professorOptions.map((professorOption) => {
                                            return <option key={professorOption.id} value={professorOption.id} >{professorOption.name} {professorOption.last_name}</option>
                                        })}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="me-2 flex-fill">
                            <div className="me-2 row">
                                <div className="col-lg-11">
                                    <label htmlFor="searchCourseInput" className="form-label fs-6 mb-2 mt-1 mediumWeight portraitSecundaryColor ps-2">
                                        Buscar curso
                                    </label>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-5 col-sm-12">
                                    <input
                                        className="form-control mb-3"
                                        type="text"
                                        id="searchCourseInput"
                                        placeholder="Buscar curso"
                                        value={searchCourseTerm}
                                        onChange={(e) => { setSearchCourseTerm(e.target.value) }}
                                        style={{ borderRadius: '15px' }} />
                                </div>
                                <div className="col-lg-7 col-sm-12">
                                    <select id="selectCourseInput" className="form-control" value={selectedCourseOption ? selectedCourseOption.id : ""} onChange={handleSelectCourseChange} style={{ borderRadius: '15px' }}>
                                        <option value="">Seleccionar curso</option>
                                        {courseOptions.map((courseOption) => {
                                            return <option key={courseOption.id} value={courseOption.id} >{courseOption.name}</option>
                                        })}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="me-2 flex-fill">
                            <div className="me-2 row">
                                <div className="col-lg-11">
                                    <label htmlFor="searcnModalityInput" className="form-label fs-6 mb-2 mt-1 mediumWeight portraitSecundaryColor ps-2">
                                        Buscar modalidad
                                    </label>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-5 col-sm-12">
                                    <input
                                        className="form-control mb-3"
                                        type="text"
                                        id="searchModalityInput"
                                        placeholder="Buscar modalidad"
                                        value={searchModalityTerm}
                                        onChange={(e) => { setSearchModalityTerm(e.target.value) }}
                                        style={{ borderRadius: '15px' }} />
                                </div>
                                <div className="col-lg-7 col-sm-12">
                                    <select id="selectModalityInput" className="form-control" value={selectedModalityOption ? selectedModalityOption.id : ""} onChange={handleSelectModalityChange} style={{ borderRadius: '15px' }}>
                                        <option value="">Seleccionar modalidad</option>
                                        {modalityOptions.map((modalityOption) => {
                                            return <option key={modalityOption.id} value={modalityOption.id} >{modalityOption.name}</option>
                                        })}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        {/* <Link to="/homeadmin" className="text-decoration-none">
                            <MultiButton color='purple' text='Volver' width='100' onClick={handleSubmit} />
                        </Link>
                        <MultiButton color='purple' text='Guardar' width='100' onClick={handleSubmit} /> */}
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