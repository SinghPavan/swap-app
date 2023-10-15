import React from "react";
import Image from "next/image";

const offsetCard = (props) => {
	return (
		<div className="offset-card-wrapper">
			<div className="offset-icon"></div>
			<h3 className="offset-title">{props.offset.offsetActivity}</h3>
			<p className="offset-description">{props.offset.description}</p>
			<button>More info</button>
		</div>
	);
};

export default offsetCard;
