import React from "react";

const Contact = () => {
	return (
		<div className="main">
			<h3>Contact Us</h3>

			<form name="Contact" method="POST" action="/">
				<input type="hidden" name="form-name" value="Contact" />
				<div className="form-group">
					<label htmlFor="exampleFormControlInput1">Name</label>
					<input
						type="text"
						className="form-control"
						id="exampleFormControlInput1"
						placeholder="John Smith"
						required
						name="name"
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
						name="email"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="message">Message</label>
					<textarea
						className="form-control"
						id="message"
						rows="3"
						required
						name="message"
					/>
				</div>
				<button type="submit" className="btn btn-yellow">
					<i className="fas fa-paper-plane" /> Send
				</button>
			</form>
		</div>
	);
};

export default Contact;
