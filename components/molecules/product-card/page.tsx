import React from "react";
import Image from "next/image";

const productCard = () => {
	return (
		<div className="product-card-wrapper">
			<div className="top-section justify-around items-center flex p-4">
				<div className="goal-indicator">
					<h1 className="text-blue-500">2 GOALS MATCHED</h1>
				</div>
				<span className="light-icon flex"></span>
				<span className="heart-icon flex"></span>
			</div>
			<div className="middle-section justify-around items-center flex p-4">
				<Image
					className="mt-4 mb-4"
					src="/assets/dove-product.jpg"
					alt="Product Photo"
					width={224}
					height={112}
				/>
			</div>
			<div></div>
		</div>
	);
};

export default productCard;
