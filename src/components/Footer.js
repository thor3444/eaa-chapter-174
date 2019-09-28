import React from "react";
import logo from "../images/rk.svg";

const Footer = () => {
	return (
		<div className="footer d-flex justify-content-end align-items-center">
			<p className="m-0 flex-fill">
				<a
					target="_blank"
					rel="noopener noreferrer"
					className="btn btn-yellow rk-link"
					href="https://raymondkneipp.com/"
				>
					<img src={logo} alt="RK" className="rk" />
					Web Design
				</a>
			</p>
			<a
				href="https://www.facebook.com/eaachapter174/"
				className="btn btn-yellow"
				target="_blank"
				rel="noopener noreferrer"
			>
				<i className="fab fa-2x fa-facebook-square" />
			</a>
		</div>
	);
};

export default Footer;
