import React from "react";

import pdf from "../newsletter.pdf";

const Newsletters = () => {
	return (
		<>
			<h3 className="m-0">Newsletters</h3>

			<div id="accordion">
				<div
					className="accordion-header h5"
					id="headingOne"
					data-toggle="collapse"
					data-target="#collapseOne"
				>
					2019
				</div>

				<div
					id="collapseOne"
					className="collapse show accordion-body"
					data-parent="#accordion"
				>
					<p>
						<a href={pdf} target="_blank" rel="noopener noreferrer">
							Feburary
						</a>
					</p>
					<p>
						<a href={pdf} target="_blank" rel="noopener noreferrer">
							January
						</a>
					</p>
				</div>
				<div
					className="accordion-header h5"
					id="headingTwo"
					data-toggle="collapse"
					data-target="#collapseTwo"
				>
					2018
				</div>
				<div
					id="collapseTwo"
					className="collapse accordion-body"
					data-parent="#accordion"
				>
					<p>
						<a href={pdf} target="_blank" rel="noopener noreferrer">
							December
						</a>
					</p>
					<p>
						<a href={pdf} target="_blank" rel="noopener noreferrer">
							November
						</a>
					</p>
					<p>
						<a href={pdf} target="_blank" rel="noopener noreferrer">
							October
						</a>
					</p>
					<p>
						<a href={pdf} target="_blank" rel="noopener noreferrer">
							September
						</a>
					</p>
					<p>
						<a href={pdf} target="_blank" rel="noopener noreferrer">
							August
						</a>
					</p>
					<p>
						<a href={pdf} target="_blank" rel="noopener noreferrer">
							July
						</a>
					</p>
					<p>
						<a href={pdf} target="_blank" rel="noopener noreferrer">
							June
						</a>
					</p>
					<p>
						<a href={pdf} target="_blank" rel="noopener noreferrer">
							May
						</a>
					</p>
					<p>
						<a href={pdf} target="_blank" rel="noopener noreferrer">
							April
						</a>
					</p>
					<p>
						<a href={pdf} target="_blank" rel="noopener noreferrer">
							March
						</a>
					</p>
					<p>
						<a href={pdf} target="_blank" rel="noopener noreferrer">
							Feburary
						</a>
					</p>
					<p>
						<a href={pdf} target="_blank" rel="noopener noreferrer">
							January
						</a>
					</p>
				</div>
			</div>
		</>
	);
};

export default Newsletters;
