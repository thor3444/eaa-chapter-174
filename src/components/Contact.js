import React from "react";

const Contact = () => {
	return (
		<div className="main">
			<h3>Contact Us</h3>

			<form>
				<div className="form-group">
					<label htmlFor="exampleFormControlInput1">Name</label>
					<input
						type="text"
						className="form-control"
						id="exampleFormControlInput1"
						placeholder="John Smith"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="exampleFormControlInput1">Email address</label>
					<input
						type="email"
						className="form-control"
						id="exampleFormControlInput1"
						placeholder="johnsmith@example.com"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="message">Message</label>
					<textarea className="form-control" id="message" rows="3" />
				</div>
				<button type="submit" className="btn btn-yellow">
					<i className="fas fa-paper-plane" /> Send
				</button>
			</form>
		</div>
	);
};

export default Contact;
