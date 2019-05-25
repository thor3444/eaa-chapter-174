import React from "react";

import ye from "../images/ye.gif";

const YoungEagles = () => {
	return (
		<div className="main">
			<h3>Young Eagles</h3>
			<p>
				<img
					src={ye}
					className="img-fluid float-right p-3"
					width="160px"
					alt="Young Eagles"
				/>
				Ever since 1992, the Young Eagles program has been giving 8 to 17 years
				olds the opportunity to fly for the first time.
			</p>
			<p>
				The purpose of this program is to introduce youth to the world of
				flying.
			</p>
			<p>
				To date, more than 2 million youth have been given a free introductory
				flight through the Young Eagles program. This is made possible by the
				kindness of EAA member volunteers.
			</p>
			<p>
				To register head over to <a href="yeday.org">yeday.org</a> and sign your
				youth up today. For more information you can contact Eric Carnahan at{" "}
				<a href="mailto:vamustang1@wildblue.net">vamustang1@wildblue.net</a>.
			</p>
		</div>
	);
};

export default YoungEagles;
