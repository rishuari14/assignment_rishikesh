import React from "react";
import "./ProfileCard.css";

function ProfileCard(props) {
	return (
		<div className="card-container">
			<header>
				<img src={props.image} alt={"loading"} />
			</header>
			<h1 className="bold-text">
				{props.name} <span className="normal-text">{props.age}</span>
			</h1>
			<h2 className="normal-text">{props.email}</h2>
			<div className="social-container">
				<div className="followers">
					<h1 className="bold-text">{props.city}</h1>
					<h2 className="smaller-text">City</h2>
				</div>
				<div className="likes">
					<h1 className="bold-text">{props.country}</h1>
					<h2 className="smaller-text">Country</h2>
				</div>
				<div className="photos">
					<h1 className="bold-text">{props.postcode}</h1>
					<h2 className="smaller-text">Postcode</h2>
				</div>
			</div>
		</div>
	);
}

export default ProfileCard;
