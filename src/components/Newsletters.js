import React from "react";

import newsletter1_18 from "../newsletters/2018/1-18-tailSpinners.pdf";
import newsletter2_18 from "../newsletters/2018/2-18-tailSpinners.pdf";
import newsletter3_18 from "../newsletters/2018/3-18-tailSpinners.pdf";
import newsletter5_18 from "../newsletters/2018/5-18-tailSpinners.pdf";
import newsletter6_18 from "../newsletters/2018/6-18-tailSpinners.pdf";
import newsletter7_18 from "../newsletters/2018/7-18-tailSpinners.pdf";
import newsletter10_18 from "../newsletters/2018/10-18-tailSpinners.pdf";
import newsletter11_18 from "../newsletters/2018/11-18-tailSpinners.pdf";
import newsletter12_18 from "../newsletters/2018/12-18-tailSpinners.pdf";

import newsletter1_19 from "../newsletters/2019/1-19-tailSpinners.pdf";
import newsletter2_19 from "../newsletters/2019/2-19-tailSpinners.pdf";
import newsletter6_19 from "../newsletters/2019/6-19-tailSpinners.pdf";
import newsletter7_19 from "../newsletters/2019/7-19-tailSpinners.pdf";

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
					2019 <i className="fas fa-caret-down float-right" />
				</div>

				<div
					id="collapseOne"
					className="collapse show accordion-body"
					data-parent="#accordion"
				>
					<p>
						<a href={newsletter7_19} target="_blank" rel="noopener noreferrer">
							July
						</a>
					</p>
					<p>
						<a href={newsletter6_19} target="_blank" rel="noopener noreferrer">
							June
						</a>
					</p>
					<p>
						<a href={newsletter2_19} target="_blank" rel="noopener noreferrer">
							February
						</a>
					</p>
					<p>
						<a href={newsletter1_19} target="_blank" rel="noopener noreferrer">
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
					2018 <i className="fas fa-caret-down float-right" />
				</div>
				<div
					id="collapseTwo"
					className="collapse accordion-body"
					data-parent="#accordion"
				>
					<p>
						<a href={newsletter12_18} target="_blank" rel="noopener noreferrer">
							December
						</a>
					</p>
					<p>
						<a href={newsletter11_18} target="_blank" rel="noopener noreferrer">
							November
						</a>
					</p>
					<p>
						<a href={newsletter10_18} target="_blank" rel="noopener noreferrer">
							October
						</a>
					</p>
					<p>
						<a href={newsletter7_18} target="_blank" rel="noopener noreferrer">
							July
						</a>
					</p>
					<p>
						<a href={newsletter6_18} target="_blank" rel="noopener noreferrer">
							June
						</a>
					</p>
					<p>
						<a href={newsletter5_18} target="_blank" rel="noopener noreferrer">
							May
						</a>
					</p>
					<p>
						<a href={newsletter3_18} target="_blank" rel="noopener noreferrer">
							March
						</a>
					</p>
					<p>
						<a href={newsletter2_18} target="_blank" rel="noopener noreferrer">
							Feburary
						</a>
					</p>
					<p>
						<a href={newsletter1_18} target="_blank" rel="noopener noreferrer">
							January
						</a>
					</p>
				</div>
			</div>
		</>
	);
};

export default Newsletters;
