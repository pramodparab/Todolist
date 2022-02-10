import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
	const activeStyle = { color: "#FF4500" };

	return (
		<Nav className="me-auto p-1" onSelect={(selectedKey) => activeStyle}>
			<Nav.Item className="p-1">
				<Link to="/">Home Page</Link>
				{" | "}
			</Nav.Item>

			<Nav.Item className="p-1">
				<Link to="/assessmentd">Assessment deatils</Link>{" "}
			</Nav.Item>
		</Nav>
	);
};
export default Header;
