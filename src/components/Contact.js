import React from "react";

const Contact = () => {
	return (
		<div className="main">
			<h3>Contact Us</h3>

			<form name="contact" method="POST" data-netlify="true">
				<div className="form-group">
					<label htmlFor="exampleFormControlInput1">Name</label>
					<input
						type="text"
						className="form-control"
						id="exampleFormControlInput1"
						placeholder="John Smith"
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="exampleFormControlInput1">Email address</label>
					<input
						type="email"
						className="form-control"
						id="exampleFormControlInput1"
						placeholder="johnsmith@example.com"
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="message">Message</label>
					<textarea className="form-control" id="message" rows="3" required />
				</div>
				<button type="submit" className="btn btn-yellow">
					<i className="fas fa-paper-plane" /> Send
				</button>
			</form>
		</div>
	);
};

export default Contact;
