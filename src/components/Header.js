import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../images/logo.png";

const Header = () => {
	return (
		<>
			<div className="header" />

			<div className="logo">
				<img src={logo} className="img-fluid" alt="EAA" />
			</div>

			<div className="title">
				<h1 className="display-4">Chapter 174</h1>
				<h3>Cincinnati, OH</h3>
			</div>

			<div className="nav">
				<NavLink activeClassName="active" exact to="/">
					<i className="fas fa-plane" /> Home
				</NavLink>
				<NavLink activeClassName="active" to="/about">
					<i className="far fa-question-circle" /> About
				</NavLink>
				<NavLink activeClassName="active" to="/ye">
					<i className="fas fa-feather" /> Young Eagles
				</NavLink>
				<NavLink activeClassName="active" to="/gallery">
					<i className="fas fa-camera" /> Gallery
				</NavLink>
				<NavLink activeClassName="active" to="/contact">
					<i className="far fa-comments" /> Contact
				</NavLink>
			</div>
		</>
	);
};

export default Header;
