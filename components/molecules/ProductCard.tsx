import React from "react";
import Image from "next/image";

const productCard = (props: any) => {
	return (
		<div className="product-card-wrapper">
			{props.full && (
				<div className="top-section justify-around items-center flex p-4">
					<div className="goal-indicator">
						<h1 className="text-blue-500">2 GOALS MATCHED</h1>
					</div>
					<span className="light-icon flex"></span>
					{props.isUnileverProduct && (
						<span
							className="heart-icon flex"
							onClick={(event) => {
								(event.target as HTMLInputElement).classList.toggle("active");
							}}></span>
					)}
				</div>
			)}
			<div className="middle-section justify-around items-center flex p-4">
				<Image
					className="mt-4 mb-4"
					src={props.product.imageUrl}
					alt="Product Photo"
					width={224}
					height={112}
				/>
			</div>
			<div className="bottom-section">
				<h3 className="product-title">{props.product.productName}</h3>
				<span>
					{props.full && (
						<p className="product-description">
							{props.product.shortDescription + " "}
							<a
								className="product-link"
								href={props.product.pageUrl}
								target="_blank">
								More
							</a>
						</p>
					)}
				</span>
				<div className="buynow-wrapper">
					<p className="product-price">From £{props.product.price}</p>
					<button className="product-buyNow"></button>
				</div>
			</div>
		</div>
	);
};

export default productCard;
