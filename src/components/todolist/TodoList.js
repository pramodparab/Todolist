import React from "react";
import { Card, Container, ListGroup, Row, Col, Button } from "react-bootstrap";
import TextInput from "../common/TextInput";

const TodoList = () => {
	return (
		<Container
			className="m-2 justify-content-center"
			style={{ display: "flex" }}
		>
			<Card style={{ maxWidth: "100%", width: "100%" }}>
				<Card.Header>Todo list</Card.Header>
				<Card.Body>
					<Row className="d-flex justify-content-between">
						<Col className="pl-2 mb-4 ">
							<TextInput />
						</Col>
						<Col xs={5} className="mt-4 ">
							<Button>Add Task</Button>
						</Col>
					</Row>
				</Card.Body>

				<ListGroup variant="flush">
					<ListGroup.Item>Cras justo odio</ListGroup.Item>
					<ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
					<ListGroup.Item>Vestibulum at eros</ListGroup.Item>
				</ListGroup>
			</Card>
		</Container>
	);
};
export default TodoList;
