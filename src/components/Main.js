import React from "react";

import ye from "../images/ye.gif";
import patch from "../images/patch.gif";

const Main = () => {
	return (
		<div className="main">
			<h3>Welcome to EAA Chapter 174!</h3>

			<p>
				<img src={patch} className="img-fluid float-right p-3" alt="Patch" />
				Cincinnati EAA Chapter 174 was chartered in 1966 and presently has over
				120 members from the Greater Cincinnati area. We normally meet at 2:00
				pm on the third Sunday of the month in Hawk building at the Clermont
				County airport (Cincinnati Sectional 39.04.42 N lat, 84.12.38 W lon).
				Visitors and guests are always welcome to stop by.
			</p>

			<p>
				<img
					src={ye}
					className="img-fluid float-left p-3"
					width="160px"
					alt="Young Eagles"
				/>
				Over the last 10 years, Chapter 174 sponsored 15 very successful Young
				Eagles flight rallies, providing over 1000 young Cincinnati men and
				women their first experiences with flight, and perhaps setting the
				course for a career or two in the direction of flying and flight-related
				professions. Each rally was assembled and conducted by a small army of
				dedicated Chapter 174 members, who volunteered their time and resources
				to register, coordinate, and fly some of Cincinnati's newest and
				youngest aviators. Young Eagle flights are paid for entirely by the
				Chapter volunteers, without reimbursement for fuel or aircraft time. We
				do not accept contributions for these flights. For more on the Young
				Eagles program, and on Chapter 174's involvement in this outstanding
				activity, check out our Young Eagles page.
			</p>

			<p>
				The Chapter's headquarters are housed in the Hawk building at Clermont
				County Airport (I69), home of world-famous Sporty's Pilot Shop. To get
				to the airport, take Ohio Rte 32 East from I-275 for about 3 miles. Then
				turn South on Ohio Rte 74 ("old 74") and go about 1.2 miles. Turn right
				onto Armstrong Blvd and go about 1/2 mile until it tees into Taylor Rd.
				Turn left on Taylor, and follow to the airport, about 1/4 mile on the
				left. The Hawk building is the building closest to the road just before
				the runway.
			</p>
		</div>
	);
};

export default Main;
