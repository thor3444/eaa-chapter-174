import React from "react";

const date = new Date();
const month = date.toLocaleString("en-us", { month: "long" });
const day = date.toLocaleString("en-us", { weekday: "long" });
const daysInMonth = new Date(
	date.getFullYear(),
	date.getMonth() + 1,
	0
).getDate();
const startDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
const currentDay = date.getDate();
const year = date.getFullYear();

const Calendar = () => {
	let arr = [];
	let blank = [];

	for (let i = 1; i <= startDay; i++) {
		blank.push("");
	}

	for (let i = 1; i <= daysInMonth; i++) {
		arr.push(i);
	}

	return (
		<>
			<h3>Calendar</h3>
			<div className="calendar">
				<h6>{day}</h6>
				<h6>
					{month} {currentDay}, {year}
				</h6>

				<div className="month">
					<div className="day-label">S</div>
					<div className="day-label">M</div>
					<div className="day-label">T</div>
					<div className="day-label">W</div>
					<div className="day-label">T</div>
					<div className="day-label">F</div>
					<div className="day-label">S</div>

					{blank.map((num, index) => (
						<div key={index} className="day">
							{num}
						</div>
					))}

					{arr.map((num, index) =>
						num === currentDay ? (
							<div key={index} className="day-label">
								{num}
							</div>
						) : (
							<div key={index} className="day">
								{num}
							</div>
						)
					)}
				</div>
			</div>
		</>
	);
};

export default Calendar;
