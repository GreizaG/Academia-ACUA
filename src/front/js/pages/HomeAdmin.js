import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { NavbarAdmin } from "./NavbarAdmin";
import { MultiButton } from "../component/MultiButton";
import { Link } from "react-router-dom";
import { CardAdminProfessor } from "../component/Card/CardAdminProfessor";
import { ListAdminCourse } from "../component/Card/ListAdminCourse";
import { CardAdminStudent } from "../component/Card/CardAdminStudent";
import { Context } from "../store/appContext";
import { ProfessorList } from "../component/Card/ProfessorList";
import { StudentList } from "../component/Card/StudentList";


export const HomeAdmin = () => {

	const { store, actions } = useContext(Context);
	// useEffect(() => {
	// 	console.log("Se ejecuta getProfessors");
	// 	actions.getProfessors()
	// }, [])


	useEffect(() => {
		console.log("Se ejecuta por la dependencia")
		actions.getSingleAdmin()
		console.log(store.singleAdministrator)
		console.log(store.professors)
	}, [store.professors])



	return (
		<React.Fragment>
			<NavbarAdmin />
			<div className="container-fluid pb-5">
				<div className="welcome mt-3 mb-3 ms-5">
					<h3 className="mediumWeight fs-6 portraitSecundaryColor">Bienvenido {store.singleAdministrator.administrator?.name} {store.singleAdministrator.administrator?.last_name} </h3>
				</div>
				<div className="d-flex align-content-center justify-content-center mb-3 mt-3 py-4 jumbo rounded-3">
					<div className="container-fluid align-content-center">
						<h4 className="py-2 ps-5 ms-5 fs-3 fw-bold">Profesores</h4>
					</div>
				</div>
				{/*Menu tab nuevo */}
				<nav>
					<ul className="nav nav-tabs menuTabs mb-3 justify-content-center" id="myTab" role="tablist">
						<li className="nav-item" role="presentation">
							<button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
								<i className="fa-solid fa-table-cells portraitSecundaryColor"></i>
							</button>
						</li>
						<li className="nav-item" role="presentation">
							<button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
								<i className="fa-solid fa-list portraitSecundaryColor"></i>
							</button>
						</li>
					</ul>
				</nav>
				{/*Contenido de los tabs*/}
				<div class="tab-content" id="nav-tabContent">
					<div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
						<div className="container d-flex ms-5 ps-5 gap-4 flex-wrap mb-4">
							<>
								{store.professors && store.professors.map((professor) => {
									return (
										<CardAdminProfessor name={professor.name} last_name={professor.last_name} key={professor.number_cardID} id={professor.id} />
									)
								})}
							</>
						</div>
					</div>
					<div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
						<div className="container d-flex flex-column justify-content-center bg-white registerForm" style={{ width: 'fit-content' }}>
							<div className="d-flex flex-row container justify-content-center">
								<table className="table table-hover" style={{ width: '55vw' }}>
									<thead>
										<tr>
											<th className="text-center" scope="col">N°</th>
											<th className="text-center" >Nombre</th>
											<th className="text-center" >Apellido</th>
											<th className="text-center" >Tipo identificación</th>
											<th className="text-center" >N° identificación</th>
											<th className="text-center" >N° teléfono</th>
											<th className="text-center" >Provincia</th>
											<th className="text-center" >Canton</th>
											<th className="text-center" >Distrito</th>
										</tr>
									</thead>
									<tbody>
										{store.professors && store.professors.map((professor) => {
											return (
												<ProfessorList name={professor.name} last_name={professor.last_name} cardID_type={professor.cardID_type} number_cardID={professor.number_cardID} phone_number={professor.phone_number} province={professor.province} canton={professor.canton} district={professor.district} key={professor.number_cardID} id={professor.id} />
											)
										})}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className="container-fluid d-flex justify-content-center my-3">
					<Link to="/adminprofreg" className="text-decoration-none">
						<MultiButton color='purple' text='Agregar nuevo profesor' width='200' />
					</Link>
				</div>
				<div className="d-flex align-content-center justify-content-center mb-3 mt-3 py-4 jumbo rounded-3">
					<div className="container-fluid align-content-center">
						<h4 className="py-2 ps-5 ms-5 fs-3 fw-bold">Cursos</h4>
					</div>
				</div>
				<div className="continer-fluid d-flex justify-content-center">
					<div className="cardProfessor bg-white registerForm d-flex" style={{ width: '18rem' }}>
						<table className="table table-hover">
							<thead>
								<tr>
									<th scope="col">N°</th>
									<th scope="col">Nombre del curso</th>
								</tr>
							</thead>
							<tbody>
								{store.courses && store.courses.map(course =>
									(<ListAdminCourse name={course.name} key={course.name} id={course.id} />)
								)}
							</tbody>
						</table>
					</div>
				</div>
				<div className="mt-3 container-fluid d-flex justify-content-center">
					<Link to="/newcourse" className="text-decoration-none">
						<MultiButton color='purple' text='Agregar nuevo curso' width='200' />
					</Link>
				</div>
				<div className="d-flex align-content-center justify-content-center mb-3 mt-3 py-4 jumbo rounded-3">
					<div className="container-fluid align-content-center">
						<h4 className="py-2 ps-5 ms-5 fs-3 fw-bold">Estudiantes</h4>
					</div>
				</div>
				{/* Menu tab nuevo/> */}
				<nav>
					<ul className="nav nav-tabs menuTabs mb-3 justify-content-center" id="myTab" role="tablist">
						<li className="nav-item" role="presentation">
							<button class="nav-link active" id="studCard-tab" data-bs-toggle="tab" data-bs-target="#nav-studCard-tab" type="button" role="tab" aria-controls="nav-studCard" aria-selected="true">
								<i className="fa-solid fa-table-cells portraitSecundaryColor"></i>
							</button>
						</li>
						<li className="nav-item" role="presentation">
							<button class="nav-link" id="nav-studList" data-bs-toggle="tab" data-bs-target="#nav-studList-tab" type="button" role="tab" aria-controls="nav-studList" aria-selected="false">
								<i className="fa-solid fa-list portraitSecundaryColor"></i>
							</button>
						</li>
					</ul>
				</nav>
				{/*Contenido de los tabs*/}
				<div class="tab-content" id="nav-tabContent">
					<div class="tab-pane fade show active" id="nav-studCard-tab" role="tabpanel" aria-labelledby="nav-studCard-tab" tabindex="0">
						<div className="container d-flex ms-5 ps-5 gap-4 flex-wrap mb-4">
							{/* <CarouselAdminStudents array={store.students} /> */}
							<>
								{store.students && store.students.map((student) => {
									return (
										<CardAdminStudent name={student.name} last_name={student.last_name} key={student.number_cardID} id={student.id} />
									)
								})}
							</>
						</div>
					</div>
					{/* Tab with professor list */}
					<div class="tab-pane fade" id="nav-studList-tab" role="tabpanel" aria-labelledby="nav-studList-tab" tabindex="0">
						<div className="container d-flex flex-column justify-content-center bg-white registerForm" style={{ width: 'fit-content' }}>
							<div className="d-flex flex-row container justify-content-center">
								<table className="table table-hover" style={{ width: '55vw' }}>
									<thead>
										<tr>
											<th className="text-center" scope="col">N°</th>
											<th className="text-center" >Nombre</th>
											<th className="text-center" >Apellido</th>
											<th className="text-center" >Tipo identificación</th>
											<th className="text-center" >N° identificación</th>
											<th className="text-center" >N° teléfono</th>
											<th className="text-center" >Provincia</th>
											<th className="text-center" >Canton</th>
											<th className="text-center" >Distrito</th>
										</tr>
									</thead>
									<tbody>
										{store.students && store.students.map((student) => {
											return (
												<StudentList name={student.name} last_name={student.last_name} cardID_type={student.cardID_type} number_cardID={student.number_cardID} phone_number={student.phone_number} province={student.province} canton={student.canton} district={student.district} key={student.number_cardID} id={student.id} />
											)
										})}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>

				<div className="container-fluid d-flex my-3 justify-content-center">
					<Link to="/adminstudreg" className="text-decoration-none">
						<MultiButton color='purple' text='Agregar nuevo estudiante' width='230' />
					</Link>
				</div>
			</div>
		</React.Fragment>
	)
}