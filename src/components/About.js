import React from "react";

const About = () => {
	return (
		<div className="main">
			<h3>About Us</h3>
			<h4>2019 Cincinnati Chapter 174 Board of Directors</h4>
			<h5>Executive Officers</h5>
			<table className="table table-borderless table-responsive">
				<tbody>
					<tr>
						<th>President</th>
						<td>Jim Gibbs</td>
						<td>(513) 288-1406</td>
					</tr>
					<tr>
						<th>Vice-president</th>
						<td>Holly Harper</td>
						<td>(513) 910-3585</td>
					</tr>
					<tr>
						<th>Treasurer</th>
						<td>Phil Cady</td>
						<td>(513) 969-5324</td>
					</tr>
					<tr>
						<th>Secretary</th>
						<td>Bill Miracco</td>
						<td>(651) 249-1152</td>
					</tr>
				</tbody>
			</table>

			<h4>Location</h4>
			<p>
				Our headquarters are located at Clermont County Airport (I69) in
				Batavia, Ohio, home of world-famous Sporty's Pilot Shop, the world's
				largest pilot shop. We meet in the Hawk Building, on Taylor Rd (just off
				the threshold of Rnwy 4). Please visit the Calendar page for our meeting
				schedule. Visitors are always welcome!
			</p>

			<h4>Clermont County Airport - I69</h4>

			<table className="table table-borderless table-responsive">
				<tbody>
					<tr>
						<th>Sectional:</th>
						<td>Cincinnati</td>
					</tr>
					<tr>
						<th>Location:</th>
						<td>39.04.02 lat, 84.12.38 lng</td>
					</tr>
					<tr>
						<th>Runways:</th>
						<td>4-22 (3500', asphalt)</td>
					</tr>
					<tr>
						<th>Altitude:</th>
						<td>844' MSL</td>
					</tr>
					<tr>
						<th>CTAF:</th>
						<td>122.975 MHz</td>
					</tr>
				</tbody>
			</table>

			<h4>Ground Transportation to I69</h4>

			<p>
				To get to the airport, take Ohio Rte 32 East from I-275 for about 3
				miles. Then turn South on Ohio Rte 74 ("old 74") and go about 1.2 miles.
				Turn right onto Armstrong Blvd and go about 1/2 mile until it tees into
				Taylor Rd. Turn left on Taylor, and follow to the airport, about 1/4
				mile on the left. The old terminal building is the red brick building
				close to the road just before the runway.
			</p>
		</div>
	);
};

export default About;
