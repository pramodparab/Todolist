import React from "react";
import { Container } from "react-bootstrap";
import TodoList from "../todolist/TodoList";

const HomePage = () => {
	return (
		<Container className="justify-content-center">
			<TodoList />
		</Container>
	);
};
export default HomePage;
