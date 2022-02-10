import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import { Navbar } from "react-bootstrap";
import Header from "./components/common/Header";
import { Container } from "react-bootstrap";
import AssessmentD from "./components/home/AssessmentD";

const App = () => {
	return (
		<>
			<Router>
				<>
					<Navbar bg="light" expand="lg">
						<Container>
							<Navbar.Brand>Todo App</Navbar.Brand>
							<Navbar.Toggle aria-controls="basic-navbar-nav" />
							<Navbar.Collapse id="basic-navbar-nav">
								<Header />
							</Navbar.Collapse>
						</Container>
					</Navbar>
				</>
				<Routes>
					<Route exact path="/" element={<HomePage />} />
					<Route path="/assessmentd" element={<AssessmentD />} />
				</Routes>
			</Router>
		</>
	);
};

export default App;
